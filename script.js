 var vk = document.getElementById("vikinhdo");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        vk.innerHTML = "Chức năng không hỗ trợ trên trình duyệt của bạn !";
      }
    function showPosition(position) {
      vk.innerHTML = "Vĩ độ,  " + position.coords.latitude  + 
      " Kinh độ: " + position.coords.longitude
