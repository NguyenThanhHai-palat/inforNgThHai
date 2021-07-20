  var d = new Date();
     var thu = new Array(7);
    thu[0] = "Chủ Nhật,";
    thu[1] = "Thứ Hai,";
    thu[2] = "Thứ Ba,";
    thu[3] = "Thứ Tư,";
    thu[4] = "Thứ Năm,";
    thu[5] = "Thứ Sáu,";
    thu[6] = "Thứ Bảy,";

  var n = thu[d.getDay()];
  document.getElementById("thu").innerHTML = n;
  
 var ngay = new Date().getDate();
      document.getElementById("ngay").innerHTML = ngay;

     var gio = new Date().getHours();
     document.getElementById("gio").innerHTML = gio;

    var phut = new Date().getMinutes()
    document.getElementById("phut").innerHTML = phut;

var thang = new Array();
  thang[0] = "Một";
  thang[1] = "Hai";
  thang[2] = "Ba";
  thang[3] = "Tư";
  thang[4] = "Năm";
  thang[5] = "Sáu";
  thang[6] = "Bảy";
  thang[7] = "Tám";
  thang[8] = "Chín";
  thang[9] = "Mười";
  thang[10] = "Mười Một";
  thang[11] = "Mười Hai";
  var d = new Date();


 var vk = document.getElementById("vikinhdo");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        vk.innerHTML = "Chức năng không hỗ trợ trên trình duyệt của bạn !";
      }
    function showPosition(position) {
      vk.innerHTML = "Vĩ độ,  " + position.coords.latitude  + 
      " Kinh độ: " + position.coords.longitude;

    var n = thang[d.getMonth()];
    document.getElementById("thang").innerHTML = n;
