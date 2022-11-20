#include <iostream>
#include <string>
#include <fstream>
#include <stdio.h>
#include <conio.h>
#include<ctime>
#include <vector>
#include <windows.h>
using namespace std;


void SetColor(WORD color)
{
	HANDLE hConsoleOutput;
	hConsoleOutput = GetStdHandle(STD_OUTPUT_HANDLE);

	CONSOLE_SCREEN_BUFFER_INFO screen_buffer_info;
	GetConsoleScreenBufferInfo(hConsoleOutput, &screen_buffer_info);

	WORD wAttributes = screen_buffer_info.wAttributes;
	color &= 0x000f;
	wAttributes &= 0xfff0;
	wAttributes |= color;

	SetConsoleTextAttribute(hConsoleOutput, wAttributes);
}


int main()
{

		system("cls");
		vector <int> A;
		A.push_back(7);
		A.push_back(12);
		A.push_back(14);
		A.push_back(10);
		int i = 0;
		SetColor(A.at(i++ % A.size()));
		ifstream file;
		file.open("mapview.bmp", ios_base::in);
		string line;
		while (getline(file, line)) {
			cout << line << endl;
			Sleep(30); 
		}
		file.close();
		system("pause >nul");	
		
}

