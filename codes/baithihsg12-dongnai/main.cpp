#include <iostream>
using namespace std;
int main() {
	freopen("CHUSO.INP","r",stdin);    
	freopen("CHUSO.OUT","w",stdout);   
	int a,n,d,c,s;
	cin >> a >> n;
	s=a;
	for(int i=1;i<n;i++){
		a=a*s;
	} 
	if(a>10){
		c = a%10;
	}
	else{
		c =a ;
	}
    cout << c;
} 
