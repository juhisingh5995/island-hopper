$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".mbl-link").addClass(".mbl-list");
    $(".mbl-link").toggle(".mbl-list");
  });
});

// countDown
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
      }
      //seconds
    }, 0);
})();

// venue_carousel_section
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
  });
});

// featured slick slider

var $st = $(".pagination");
var $slickEl = $(".center");

$slickEl.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $st.text(i + " /" + slick.slideCount);
  }
);

$slickEl.slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 5,
  focusOnSelect: true,
  arrows: true,
  appendArrows: $(".news__arrows"),
  prevArrow:
    '<div class="news__arrow news__arrow_dir_left"><i class="fa-solid fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="news__arrow news__arrow_dir_right"><i class="fa-solid fa-chevron-right"></i></div>',

  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// sponsors slick slider
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    appendArrows: $(".brand_arrows"),
    prevArrow:
      '<div class="brand_arrow brand_arrow_dir_left"><i class="fa-solid fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="brand_arrow brand_arrow_dir_right"><i class="fa-solid fa-chevron-right"></i></div>',
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          arrow:false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          arrow:false,
        },
      },
      
    ],
  });
});
