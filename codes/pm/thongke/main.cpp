#include "data.h"
int main(int argc, char* argv[]) {
	int as = 1;
	while(true){
		char k;
		system("cls");
		gotoxy(32,2);colorselec(83);cout<<"THONG KE" <<endl;
		colorselec(12);cout << "[1] TAO MOI\t[2] MO FILE\t[3]THONG KE\n\t[4]MA HOA THANH FILE EXCEL"<<endl;
		k = getche();
	
	
		if(k=='1'){
			system("cls");
			int n,l,z,d;
			string tmp[10000],datain[10000],datain2[10000],datain3[10000],datain4[10000],datain5[10000],tmp2[10000],tmp3[10000],tmp4[10000],tmpc;
			colorselec(9);
			cout << "Nhap so luong: ";cin >>n >> d;
			for(int i=0;i<n;i++){
				cout << i+1 << ". ";cin >> datain[i];
				tmp[i] = tmp[i] + datain[i];
				
			}
			system("cls");
			if(d==1){
				for(int i=0;i<n;i++){
				cout <<datain[i] << " | ";
				cin >> datain2[i];
				tmp2[i] += datain2[i];
				tmpc = tmpc + tmp[i] + " | " + tmp2[i] + "\n";
				}
			}
			else if(d==2){
				for(int i=0;i<n;i++){
					cout <<datain[i] << " | ";
					cin >> datain2[i];
					tmp2[i] += datain2[i];
					
				}
				system("cls");
				for(int i=0;i<n;i++){
					cout <<datain[i] << " | "<<datain2[i] << " | ";
					cin >> datain3[i];
					tmp3[i] += datain3[i];
					tmpc = tmpc + tmp[i] + " | " + tmp2[i] + " | " + tmp3[i]+ "\n";
					
				}
			}
			else if(d==3){
				for(int i=0;i<n;i++){
					cout <<datain[i] << " | ";
					cin >> datain2[i];
					tmp2[i] += datain2[i];
					
				}
				system("cls");
				for(int i=0;i<n;i++){
					cout <<datain[i] << " | "<<datain2[i] << " | ";
					cin >> datain3[i];
					tmp3[i] += datain3[i];
					
				}
				system("cls");
				for(int i=0;i<n;i++){
					cout <<datain[i] << " | "<<datain2[i] << " | "<<datain3[i] << " | ";
					cin >> datain4[i];
					tmp4[i] += datain4[i];
					tmpc = tmpc + tmp[i] + " | " + tmp2[i] + " | " + tmp3[i]+ " | " + tmp4[i]+ "\n";
					
				}
			}
			system("cls");
			cout << tmpc+"\n Ket thuc du lieu, co muon luu lai? \n>>";
			char kc = getche();
			if(kc=='C'){
				char namefile[1024];
				cout << "Ten file la: "; cin >> namefile; 
				ofstream outfile;
	            outfile.open(namefile);
	            outfile << tmpc << endl;
	            outfile.close();
	            cout << "DA LUU XONG!";
			}
			else{
				as=0;
			}
		}	
	}

}
