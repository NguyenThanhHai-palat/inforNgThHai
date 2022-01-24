 ===============================================================================================
 
 
 # Remarks:                                                                                    
                                                                                               
 Tap lenh nay khong cai dat bat ky tep nao trong he thong cua ban 
  
 De kich hoat tuc thi thanh cong phai bat dich vu cap nhat Windows va Internet 
 Neu ban van dang chay no thi he thong se tu dong kich hoat sau khi ban bat
 Dich vu cap nhat Windows va Internet 
  
 Su dung VPN va quyen rieng tu cong cu chong gian diep may chu luu tru dua tren quyen rieng tu va cac quy tac cua tuong lua
 co the gay ra su co do mot so may chu MS bi chan khi Kich hoat thanh cong 
  
 Ban co the thay Loi ve Khoa bi chan hoac cac loi khac trong qua trinh kich hoat 
 Luu y rang ly do dang sau nhung loi nay la nhung ly do da de cap o tren hoac bi hong
 tap tin he thong hoac hiem khi su co may chu MS 
 Loi Khoa bi chan xuat hien do he thong khong the lien he voi may chu MS de kich hoat 
 Qua trinh kich hoat tap lenh nay thuc su khong su dung bat ky Khoa bi chan nao 
  
 Trong cung mot phan cung sau khi kich hoat neu nguoi dung cai dat lai cung mot phien ban windows thi
 Phien ban Ban le Nguoi tieu dung cua Windows 10 se tu dong kich hoat o lan lien he truc tuyen dau tien nhung
 trong truong hop phien ban VL Business cua Windows 10 Nguoi dung se phai chen cac cua so do
 khoa san pham phien ban de kich hoat he thong Ban co the chen khoa san pham theo cach thu cong
 hoac ban co the su dung tuy chon cua cong cu Chen khoa san pham No luu qua trinh Kich hoat   
                                                                                               
 ===============================================================================================
 
 # Windows 10 Preactivate:                                                                     
                                                                                               
 - De kich hoat truoc he thong trong khi cai dat hay lam nhung viec sau 
   Su dung tuy chon so 6 trong tap lenh va giai nen Thu muc $OEM$ vao May tinh de ban .Bay gio sao chep $OEM$ nay
   Thu muc toi thu muc nguon trong phuong tien cai dat                                      
   The directory will appear like this. iso/usb: \sources\$OEM$\                               
   Now use this iso/usb to install Windows 10 and it'll auto activate at first online contact. 
                                                                                               
 ===============================================================================================

 # Meo Khac Phuc Loi: FIX TIPS
 
  neu trong qua trinh active co loi vui long vao trang web sau:
  https://support.microsoft.com/en-us/help/2736303

  chay cac cau lenh sau duoi quyen admin
  net stop sppsvc
  ren %windir%\System32\spp\store\2.0\tokens.dat tokens.bar
  net start sppsvc
  cscript %windir%\system32\slmgr.vbs /rilc
 sau do khoi dong lai he thong hai lan 
 sau do chay tap lenh de kich hoat
																						   
 ===============================================================================================

 # Credits-ENG:                                                                                    
                                                                                               
 s1ave77        - Original Author of Digital License Generation without KMS or predecessor      
                 install/upgrade                                                               
                                                                                               
 mephistooo2    - Repacking s1ave77's earlier cmd version in 'KMS-Digital-Activation_Suite'     
                                                                                               
 WindowsAddict  - Repacking mephistooo2's Repack to make a clean, separate, and improved        
                 W10 Digital License Activation Script                                         
                                                                                               
 rpo            - Providing Great support in correction and improvements in this script       
 NguyenThanhHai - Edit again and translate to Vietnamese without accents   
                                                                                               
 ===============================================================================================
 
 # Homepages:                                                                                   
	
 W10 Digital License Activation Script __ W10 LTSB 2015 Digital License Activation Script 
 https://www.nsaneforums.com/topic/316668-w10-digital-license-activation-script/  
 
 ===============================================================================================
 Nhấn Enter để về màn hình chính!
