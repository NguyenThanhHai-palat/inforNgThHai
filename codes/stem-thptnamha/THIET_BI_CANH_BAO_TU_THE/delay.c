  /******************************************************************************
  * Ten tep:		delay.h
  * Tac gia:	 	www.hocdientu123.vn
  * Ngay:				01-08-2019
  ******************************************************************************/
#include <delay.h>
/*
 Tan so hoat dong cua vi dieu khien=Fosc(tan so dao song thach anh)/12=>chu ky Tosc=12/Fosc
 Chon tan so thach anh=12MHz=12*10^6 Hz
  =>chu kì máy (chu ky hoat dong cua vi dieu khien) là  12/(12*10^6 Hz)=1/(10^6)s = 1us
	mot vòng for khoang 8 chu kì máy nên = 8*1 = 8us
	=> delay_ms(1) = 125*8 = 1000uS 
*/
/*================================================
*Chuc nang: tao tre ms
*Tham so: Time la gia tri can tan tre, gia tri 16 bit
*Gia tri tra ve: Không có
=================================================*/
void delay_ms(unsigned int Time)
{
	unsigned int i,j;
	for(i=0;i<Time;i++)
	{
		for(j=0;j<125;j++);
	}
}
/*================================================
*Chuc nang: tao tre us
*Tham so: Time la gia tri can tan tre, gia tri 16 bit
*Gia tri tra ve: Không có
=================================================*/
void delay_us(unsigned int Time)
{
	while((--Time)!=0);
} 
