#include <main.h>
#include <stdio.h>
sbit SDA = P2^1; 
sbit SCL = P2^0; 
sbit LEDPOWER = P0^1;  
sbit ECHO = P0^2;
sbit TRIG = P0^3;
sbit FANW = P0^4;
sbit WARN = P0^7;
sbit BUTSHOT =P1^6;



void I2C_Start();
void I2C_Stop();
void I2C_Write(unsigned char dat);
unsigned char I2C_Read();
#define LCD_I2C_ADDR 0x4E  // Ð?a ch? I2C c?a LCD
void LCD_Init();
void LCD_Cmd(unsigned char cmd);
void LCD_Data(unsigned char Data);
void LCD_String(char* str);
unsigned int Measure_Distance();
void LCD_SetCursor(unsigned char row, unsigned char col);void LCD_Clear();
void I2C_Start() {
    SDA = 1;
    SCL = 1;
    SDA = 0;
    SCL = 0;
}

void I2C_Stop() {
    SDA = 0;
    SCL = 1;
    SDA = 1;
}
void LCD_SetCursor(unsigned char row, unsigned char col) {
    unsigned char cmd;
    switch (row) {
        case 1:
            cmd = 0x80 + col;  // Dòng 1
            break;
        case 2:
            cmd = 0xC0 + col;  // Dòng 2
            break;
        default:
            return;  // Không h?p l?
    }
    LCD_Cmd(cmd);
}
void I2C_Write(unsigned char dat) {
    unsigned char i;
    for (i = 0; i < 8; i++) {
        SDA = dat & 0x80;
        SCL = 1;
        SCL = 0;
        dat <<= 1;
    }
    // ACK bit
    SDA = 1;
    SCL = 1;
    SCL = 0;
}

unsigned char I2C_Read() {
    unsigned char i, dat = 0;
    SDA = 1;  // Ð?t SDA ? ch? d? input
    for (i = 0; i < 8; i++) {
        SCL = 1;
        dat = (dat << 1) | SDA;
        SCL = 0;
    }
    // ACK bit
    SDA = 0;
    SCL = 1;
    SCL = 0;
    return dat;
}

void LCD_Init() {
    // Kh?i t?o LCD
    delay_ms(50);  // Delay for power stability
    LCD_Cmd(0x33);  // Initialization sequence
    LCD_Cmd(0x32);  // Initialization sequence
    LCD_Cmd(0x28);  // 4-bit mode, 2 lines, 5x7 font
    LCD_Cmd(0x0C);  // Display on, cursor off
    LCD_Cmd(0x01);  // Clear display
    delay_ms(2);
    LCD_Cmd(0x06);  // Entry mode set
}

void LCD_Cmd(unsigned char cmd) {
    unsigned char upper_nibble, lower_nibble;
    upper_nibble = cmd & 0xF0;
    lower_nibble = (cmd << 4) & 0xF0;
    
    I2C_Start();
    I2C_Write(LCD_I2C_ADDR);
    I2C_Write(upper_nibble | 0x04);  // En=1, Rs=0
    I2C_Write(upper_nibble);  // En=0, Rs=0
    I2C_Write(lower_nibble | 0x04);  // En=1, Rs=0
    I2C_Write(lower_nibble);  // En=0, Rs=0
    I2C_Stop();
    
    delay_ms(2);  // Command execution time
}

void LCD_Data(unsigned char Data) {
    unsigned char upper_nibble, lower_nibble;
    upper_nibble = Data & 0xF0;
    lower_nibble = (Data << 4) & 0xF0;
    
    I2C_Start();
    I2C_Write(LCD_I2C_ADDR);
    I2C_Write(upper_nibble | 0x05);  
    I2C_Write(upper_nibble | 0x01);  
    I2C_Write(lower_nibble | 0x05);  
    I2C_Write(lower_nibble | 0x01); 
    I2C_Stop();
    
    delay_ms(2); 
}

void LCD_String(char* str) {
    while (*str) {
        LCD_Data(*str++);
    }
}
void LCD_Clear() {
    LCD_Cmd(0x01);  
    delay_ms(2);      
}
unsigned int Measure_Distance() {
    unsigned int duration, distance;
    
    // G?i xung Trigger
    TRIG = 0;
    delay_us(2);
    TRIG = 1;
    delay_us(10);
    TRIG = 0;
    
    // Ðo th?i gian Echo
    while(!ECHO);  // Ch? Echo lên m?c cao
    TR0 = 1;  // Kh?i d?ng timer
    while(ECHO);  // Ch? Echo xu?ng m?c th?p
    TR0 = 0;  // D?ng timer
    
    // Ð?c giá tr? t? Timer0
    duration = (TH0 << 8) | TL0;
    TH0 = 0;  // Reset Timer0
    TL0 = 0;
    
    // Tính toán kho?ng cách
    distance = duration / 580;  // T?c d? âm thanh là 340m/s
    
    return distance;
}
void main() {
	unsigned int distance, distancex;unsigned int d1 = 0, d2 = 0, d = 0, v = 0, agt = 0,k=0;
    char buffer[16], datavantoc[16], datagiatoc[16];
    unsigned int timeset = 0;
	  unsigned int kc=1;
      WARN = 0;
    LCD_Init();
    LEDPOWER = 1;BUTSHOT=0;
    LCD_String("NGTHHAI OS LCD");
    LCD_SetCursor(2, 0);
    LCD_String("@V-01-BTD:GT/1S");
    delay_ms(1500);
    LCD_Clear();
	  while(1){
    WARN = 1;
    delay_ms(250);
    WARN = 0;
	  kc=1;
    LCD_Clear();
    LCD_String("3");
    delay_ms(1000);
    LCD_Clear();
    LCD_String("2");
    delay_ms(1000);
    LCD_Clear();
    WARN = 1;
    LCD_String("1");
    delay_ms(1000);
    WARN = 0;
    LCD_Clear();
     while (kc==1) {
        distance = Measure_Distance();
			  
        FANW = 1;
         
        // Display distance on LCD
        LCD_SetCursor(1, 0);
        LCD_String("Khoang Cach");
        sprintf(buffer, "%ucm  ", distance);
			 
        
        LCD_SetCursor(2, 0);
        LCD_String(buffer);
    
			 if(d1!=0){
			 timeset=timeset+1;
			 }
			 if ((BUTSHOT == 1)&&(k==1)) {
            WARN = 1;
            delay_ms(50);
					  WARN = 0;
            d2 = distance;
					  BUTSHOT=0;
            kc = 0;
					 k=0;
        }
			  if ((BUTSHOT == 1)&&(d1==0)) {
					 LCD_Clear();
					  LCD_String("OK");
            WARN = 1;
            delay_ms(50);
					  WARN = 0;
            d1 = distance;
					   k=1;
					  BUTSHOT=0;
				} 
			   WARN = 0;
        delay_ms(1000);
       
    
        
        
    }
    
    LCD_Clear();

    kc=1;
		d = d2 - d1;
		if(d>2777){
		d = d1 - d2;
			if(d>2777){
			d=0;
			}
		}
		
    
    v = (d / (timeset));  
    agt = v / (timeset);  
    LCD_SetCursor(1, 0);
		sprintf(buffer, "%ucm", d);WARN = 1;delay_ms(200);WARN = 0;
    LCD_String("KC: ");LCD_String(buffer);LCD_SetCursor(2, 0);sprintf(buffer, "%us", timeset);LCD_String(buffer);delay_ms(1000);
		LCD_Clear();
		FANW = 0;
    while (kc==1) {
			  
        sprintf(datavantoc, "%ucm/s", v);
        sprintf(datagiatoc, "%ucm/s2", agt);
        LCD_SetCursor(1, 0);
        LCD_String("Van Toc:");
        LCD_String(datavantoc);
        LCD_SetCursor(2, 0);
        LCD_String("Gia Toc:");
        LCD_String(datagiatoc);
		   	if (BUTSHOT == 1) {
					  WARN = 1;
            delay_ms(50);
					  WARN = 0;
					  BUTSHOT=0;
            kc = 0;
					d1=0;d2=0;
					timeset=0;
        }
        delay_ms(200);
			}
    }
}
