#include <iostream>
using namespace std;
int main() {
    freopen("GIAIDB.INP","r",stdin);
    freopen("GIAIDB.OUT","w",stdout);
	int n,k,sdcn=0,slg=0,stnn,ad;
	int tuoi[100],diem[100],tuoiin[100],tuof[100];
	cin >> n >> k;
	for(int i=0;i<n;i++){
		cin >> diem[i];
	}
	for(int i=0;i<n;i++){
		cin >> tuoi[i];
	}
	sdcn=diem[0];
	stnn=tuoi[0];
	for(int i=1;i<n;i++){
		if(stnn > tuoi[i]){
			if(stnn > 10){
				tuoiin[i] = stnn;	
			}
			
		}
	}
	for(int i=1;i<n;i++){
		if((sdcn < diem[i])&&(stnn >= tuoi[i])){
			if((diem[i]>=k)&&(stnn >= 10)){
					sdcn=tuoi[i];
					slg = slg+1;
					cout << slg<< " \n"<<sdcn << " \n";
			}
			
		}
	}

} 
