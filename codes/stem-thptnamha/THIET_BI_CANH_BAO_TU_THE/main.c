#include<stdio.h>
#include<main.h>

sbit TRIG = P0^0;
sbit ECHO = P0^1; 
sbit LED = P0^3;  
sbit LEDW = P0^2; 
sbit WARN = P0^4;
sbit POW = P0^5;
unsigned int time = 0;


void vc() { 
    TRIG = 1;
    delay_ms(250);
    TRIG = 0;
}

void main() {
	POW=1;
    while(1) {
			 
        vc(); 
        while(!ECHO);
        while(ECHO) { 
            time++;
          
        }
       
        if (time <= 290) { 
					  LEDW = 0; 
            LED = 1; WARN=1;
        }else if(time <= 408){
				  LEDW = 1; 
					 LED = 0;
					 WARN=0;
				}
				else if(time <= 648){
				  LEDW = 0; 
					 LED = 0;
					 WARN=0;
				} 				
				else {
            LED = 0; LEDW = 0; 	WARN=0;  
        }
        time = 0; 
    }
}
