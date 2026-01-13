/**
* Template Name: PALAT_STYLE
* Updated: Jan 2 2024 with Bootstrap v5.3.2
* Template URL: https://palat.io.vn
* Author: BootstrapMade.com
* /
*/


function load_content(data){
  
  if(data=="https://palat.io.vn/?about") { document.getElementById("content").innerHTML = '<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark"> <div class="container-fluid"> <a class="navbar-brand"></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarColor02"> <ul class="navbar-nav me-auto" id="nav_controller"> <li class="nav-item"> <a class="nav-link" href="/">Trang Chủ </a> </li> <li class="nav-item"> <a class="nav-link" href="?thongtinkhac">Thông Tin Khác</a> </li> <li class="nav-item"> <a class="nav-link active" href="?about">Về tôi</a> </li> </ul> </div> </div> </nav> <div id="a"> <div class="container" data-aos="zoom-in" data-aos-delay="100"> <br> <br> <div class="col-lg-8 pt-4 pt-lg-0 container"> <div class="row"> <div class="col-lg-6"> <ul> <li><i class="bi bi-chevron-right"></i> <strong>Sinh năm:</strong> <span>2008</span></li> <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://palat.io.vn</span></li> <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="me@palat.io.vn">me@palat.io.vn</a></span></li> <li><i class="bi bi-chevron-right"></i> <strong>Nơi ở:</strong> <span>Phường Trấn Biên, Đồng Nai, Việt Nam</span></li> </ul> </div> <div class="col-lg-6"> <ul> <li><i class="bi bi-chevron-right"></i> <strong>Nơi Sinh:</strong> <span>TPHCM</span></li> <li><i class="bi bi-chevron-right"></i> <strong>Tuổi:</strong> <span>17<</span></li> <li><i class="bi bi-chevron-right"></i> <strong>Hiện là:</strong> <span>Học sinh</span></li> </ul> </div> </div> </div> </div> </div><div hidden><hr><h2>Vlog</h2><p>Ẩn ròi :)</p></div>'}
  else if(data=="https://palat.io.vn/?thongtinkhac"){
    window.open("https://dev.palat.io.vn", "_blank")
  }
  else if(data=="https://palat.io.vn/"){
    
  }
  else{
    var url = new URL(data);
    var utmSource = url.searchParams.get("utm_source");
    var sourceText = "";
    
    switch (utmSource) {
      case "ig":
      case "instagram":
        sourceText = "Instagram";
        break;
      case "fb":
      case "facebook":
        sourceText = "Facebook";
        break;
      default:
        sourceText = "Không xác định nguồn truy cập";
    }

     document.getElementById("content").innerHTML = '<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark"> <div class="container-fluid"> <a class="navbar-brand"></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarColor02"> <ul class="navbar-nav me-auto" id="nav_controller"> <li class="nav-item"> <a class="nav-link" href="/">Trang Chủ </a> </li> <li class="nav-item"> <a class="nav-link" href="?thongtinkhac">Thông Tin Khác</a> </li> <li class="nav-item"> <a class="nav-link active" href="?about">Về tôi</a> </li> </ul> </div> </div> </nav> <div id="a"> <div class="container" data-aos="zoom-in" data-aos-delay="100"> <br> <br> <div class="col-lg-8 pt-4 pt-lg-0 container"> <div class="row"> <div class="col-lg-6"> ĐÃ TRUY CẬP TỪ '+sourceText+' - ĐÃ GHI NHẬN LƯỢT TRUY CẬP<br><a href="/">Nhấn vào đây về trang chủ</a></div> </div> </div> </div> </div>'
  }
  changeBackground();
}



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */

})()
document.addEventListener("DOMContentLoaded", function() {
  // List of possible image URLs
  const imageUrls = [
    "url('/images/image1.jpg')",
    "url('/images/image2.jpg')",
    "url('/images/image3.jpg')",
    // Add more image URLs as needed
  ];

  // Choose a random image URL
  const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  // Set the CSS variable to the chosen image URL
  document.documentElement.style.setProperty('--bg-url', randomImageUrl);
});
