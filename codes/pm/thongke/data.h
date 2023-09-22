#ifndef DATA_H
#define DATA_H
#include <stdlib.h>
#include <iostream>
#include <math.h>
#include <bits/stdc++.h>
#include <Windows.h>
#include <conio.h>
#include <stdlib.h>
#include <fstream>
#include <ctime>
using namespace std;
void TimeNow(int l){
   time_t now = time(0);
   tm *ltm = localtime(&now);
   if(l=0){
   	cout << "Ngay "<<  ltm->tm_mday << ",";
    cout << "Thang "<< 1 + ltm->tm_mon;
    cout << " Nam " << 1900 + ltm->tm_year; 
   }
   else if(l=1){
   	cout << "Ngay "<<  ltm->tm_mday << ",";
   }
   else if(l=2){
   	cout << "Thang "<< 1 + ltm->tm_mon;
   }else if(l=3){
    cout << " Nam " << 1900 + ltm->tm_year; 
   }
   else{
   	cout << "error systax";
   }
}
void colorselec(int color)
{
 WORD wColor;  HANDLE hStdOut = GetStdHandle(STD_OUTPUT_HANDLE);
 CONSOLE_SCREEN_BUFFER_INFO csbi;
 if(GetConsoleScreenBufferInfo(hStdOut, &csbi))
 {
 wColor = (csbi.wAttributes & 0xF0) + (color & 0x0F);
 SetConsoleTextAttribute(hStdOut, wColor);
 }
}
void Delay(int number_of_seconds)
{
    int milli_seconds = 100 * number_of_seconds;
    clock_t start_time = clock();
    while (clock() < start_time + milli_seconds);
}
void readfile(string path){
	
}
void gotoxy(int x, int y)
{
    static HANDLE h = NULL;  
    if(!h)
        h = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD c = { x, y };  
    SetConsoleCursorPosition(h,c);
}
#endif
