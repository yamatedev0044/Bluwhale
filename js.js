// LOADING
window.onload = function () {
  window.setTimeout(function () {
    document.querySelector("body").classList.remove("load");
    document.querySelector("body").classList.remove("afterload");
    var myHash = location.hash;
    location.hash = "";
    if (myHash[1] != undefined) {
      $("html, body").animate({ scrollTop: $(myHash).offset().top - 30 }, 1000);
    }
  }, 200);
};
//BURGER
function burger() {
  if (document.querySelector(".nav.open")) {
    document.querySelector(".nav").classList.remove("open");
    document.querySelector("body").classList.remove("overflow-hidden");
  } else {
    document.querySelector(".nav").classList.add("open");
    document.querySelector("body").classList.add("overflow-hidden");
  }
}
$(document).on("mouseup", function (e) {
  if (document.querySelector(".nav.open")) {
    var div = $(".nav");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      document.querySelector(".nav").classList.remove("open");
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }
});
document.querySelectorAll(".burger").forEach(
  (el) =>
    el.addEventListener("click", (event) => {
      event.preventDefault();
      burger();
    }),
  false
);
$(".nav .menu a.menu-item").on("click", function (event) {
  document.querySelector(".nav").classList.remove("open");
  document.querySelector("body").classList.remove("overflow-hidden");
});

//FAQ OPEN-CLOSE
$(".faq-box .question").on("click", function (event) {
  $(this).parent().toggleClass("open");
});
//notification
$(".notification .message").on("click", function (event) {
  $(this).parent().remove();
});

//SLICK SLIDER
let blocked = false;
let blockTimeout = null;
let prevDeltaX = 0;
let prevSlides = {};
const onWheelEvent = function (e) {
  let deltaX =
    e.originalEvent.deltaX !== 0
      ? e.originalEvent.deltaX
      : e.originalEvent.deltaY;
  const slick = $(this)[0].slick;

  if (
    !slick.animating &&
    !blocked &&
    prevDeltaX * deltaX > 0 &&
    prevSlides[slick] === slick.currentSlide
  ) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  if (slick.animating) return;

  clearTimeout(blockTimeout);
  blockTimeout = setTimeout(function () {
    blocked = false;
  }, 50);

  if (
    (deltaX > 0 && deltaX > prevDeltaX) ||
    (deltaX < 0 && deltaX < prevDeltaX) ||
    !blocked
  ) {
    blocked = true;
    prevDeltaX = deltaX;
    prevSlides[slick] = slick.currentSlide;

    if (deltaX > 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  }
};
if ($(".crsl-1").length) {
  $(".crsl-1").slick({
    centerMode: false,
    slidesToShow: 5,
    arrows: false,
    infinite: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 4,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
  $(".crsl-1").on("wheel", onWheelEvent);
}
if ($(".crsl-2").length) {
  $(".crsl-2").slick({
    centerMode: false,
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
  $(".crsl-2").on("wheel", onWheelEvent);
}
if ($(".crsl-3").length) {
  $(".crsl-3").slick({
    centerMode: false,
    slidesToShow: 5,
    arrows: false,
    infinite: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 4,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
  $(".crsl-3").on("wheel", onWheelEvent);
}
if ($(".crsl-4").length) {
  $(".crsl-4").slick({
    centerMode: false,
    slidesToShow: 5,
    arrows: false,
    infinite: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
  $(".crsl-4").on("wheel", onWheelEvent);
}

// if($('.crsl-5').length){
//   $('.crsl-5').slick({
//     centerMode: false,
//     // slidesToShow: 5,
//     arrows: false,
//     infinite: false,
//     centerMode: false,
//     centerPadding: '0px',
//     responsive: [
//           {
//             breakpoint: 1600,
//             settings: {
//                 slidesToShow: 4,
//                 centerPadding: '0px',
//             }
//           },
//           {
//             breakpoint: 1320,
//             settings: {
//                 slidesToShow: 3,
//                 centerPadding: '0px',
//             }
//           },
//           {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 centerPadding: '0px',
//                 arrows: true,
//             }
//           }
//           ,
//           {
//             breakpoint: 550,
//             settings: {
//                 slidesToShow: 1,
//                 centerMode: true,
//                 centerPadding: '20px',
//                 arrows: true,
//             }
//           }
//     ]
//   });
//   $('.crsl-5').on('wheel', onWheelEvent);
// }

var a = 0;
$(window).on("scroll", function () {
  if ($(".section-10").length) {
    var oTop = $(".section-10").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = parseInt($this.text());
        $({
          countNum: 0,
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    }
  }
});
