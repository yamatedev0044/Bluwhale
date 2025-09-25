//PRELOAD IMGs
var vihe = $(window).height();
var path = "img/";
if (window.innerWidth < 1900) var path = "img/min/";

var xscreen1 = [];
var xscreen2 = [];
var xscreen3 = [];
var xscreen4 = [];

function loadimgframe() {
  //Screen 1
  var xscreen1 = [];
  for (var i = 1; i < 80; i++) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = "img/screen-1/" + filename;
    xscreen1.push(img);
  }
  for (var i = 80; i > 1; i--) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = "img/screen-1/" + filename;
    xscreen1.push(img);
  }
  //Screen 2
  var xscreent2 = 125;
  var xscreen2 = [];
  for (var i = 1; i < xscreent2 + 1; i++) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = path + "screen-2/" + filename;
    xscreen2.push(img);
  }
  //Screen 3
  var xscreent3 = 150;
  var xscreen3 = [];
  for (var i = 1; i < xscreent3 + 2; i++) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = path + "screen-3/" + filename;
    xscreen3.push(img);
  }
  //Screen 4
  var xscreent4 = 150;
  var xscreen4 = [];
  for (var i = 100; i < xscreent4 + 1; i++) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = path + "screen-3/" + filename;
    xscreen4.unshift(img);
  }
  for (var i = 100; i < xscreent4 + 1; i++) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = path + "screen-3/" + filename;
    xscreen4.push(img);
  }
  for (var i = xscreent4; i > 100; i--) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = path + "screen-3/" + filename;
    xscreen4.push(img);
  }
  for (var i = 100; i < xscreent4 + 1; i++) {
    var filename = "frame_";
    if (i < 10) filename += "0000";
    else if (i < 100) filename += "000";
    else if (i < 1000) filename += "00";
    else if (i < 10000) filename += "0";
    filename += i + ".png";
    var img = new Image();
    img.src = path + "screen-3/" + filename;
    xscreen4.push(img);
  }
  xscreen1.at(-1).onload = function () {
    screen1 = xscreen1;
  };
  xscreen2.at(-1).onload = function () {
    screen2 = xscreen2;
  };
  xscreen3.at(-1).onload = function () {
    screen3 = xscreen3;
  };
  xscreen4.at(-1).onload = function () {
    screen4 = xscreen4;
  };
}

$(".nav .link").on("click", function (e) {
  e.preventDefault();
  var aid = $(this).attr("href");

  if (aid && $(aid).length) {
    $("html, body").animate({ scrollTop: $(aid).offset().top - 30 }, 1000);
  }

  $(".nav").removeClass("open");
  $("body").removeClass("overflow-hidden");
});

var setHeight = $(".section-1").height() - vihe;

// TIMER ANIMATE
function timerimg() {
  var img = 90,
    imgMax = 149,
    imgMin = 90;
  var npr = 0;
  var contextz = document.querySelector(".footer .bgs canvas").getContext("2d");
  setInterval(function () {
    if ($(".footer .bgs").length) {
      if (npr == 0) {
        if (img > imgMax) npr = 1;
        img = img + 1;
      } else {
        if (img < imgMin) npr = 0;
        img = img - 1;
      }
      if (screen3[img]) {
        contextz.reset();
        contextz.drawImage(screen3[img], 0, 0, 1920, 1080);
      }
    }
  }, 40);
}

// LOADING

// window.onload = function () {
//     window.setTimeout(function () {
//         disableLoading()
//     }, 1000);
// };

function disableLoading() {
  document.querySelector("body").classList.remove("load");
  document.querySelector("body").classList.remove("afterload");
  $("video").prop("autoplay", true).trigger("play");

  loadimgframe();
  timerimg();
  var myHash = location.hash;
  location.hash = "";
  if (myHash[1] != undefined) {
    $("html, body").animate({ scrollTop: $(myHash).offset().top - 30 }, 1000);
  }
}

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

$(window).on("scroll", function () {
  var stop = $(window).scrollTop();

  if ($("#s-3-1").length) {
    if (
      stop <
      $("#s-3-1").offset().top +
        $("#s-3-1").height() +
        $("#s-3-2").height() +
        40 -
        vihe
    ) {
      $("#s-3-2").addClass("pfb");
    } else {
      $("#s-3-2").removeClass("pfb");
    }
  }
  if ($(".b-2").length) {
    if (stop < $(".b-2").offset().top) {
      $(".b-1 video").trigger("play");
    } else {
      $(".b-1 video").trigger("pause");
    }
  }
  if ($(".section-2").length) {
    if (stop < $(".section-2").offset().top) {
      if ($(".b-1").length) {
        var zoom = parseInt(stop) / 600;
        zoom = 1 + zoom;
        if (zoom > 3) zoom = 3;
        $(".b-1 .content").css("transform", "scale(" + zoom + ")");
        var opacity = parseInt(stop) / 200;
        opacity = 1 - opacity;
        if (opacity < 0) opacity = 0;
        if (stop < vihe) {
          $(".screen").removeClass("active");
          $(".b-1").addClass("active");
        }
        if (opacity == 0) $(".b-1").css("z-index", "0");
        else $(".b-1").css("z-index", "4");
        $(".b-1").css("opacity", "" + opacity + "");
        $(".b-1 video").css("opacity", "" + opacity + "");
        var opacity = parseInt(stop) / 60;
        opacity = 1 - opacity;
        if (opacity < 0) opacity = 0;
        $(".b-1 .scroll-down").css("opacity", "" + opacity + "");
      }

      if ($(".b-2").length) {
        var opacity = (parseInt(stop) / 400).toFixed(2);
        opacity = 1 - opacity;
        if (opacity < 0) opacity = 0;
        $(".b-2").css("opacity", "" + (1 - opacity) + "");
        var otop = 50;
        if (
          stop > $(".b-2").offset().top + otop &&
          stop < $(".b-2").offset().top + $(".b-2").height() - vihe
        ) {
          $(".screen").removeClass("active");
          $(".b-2").addClass("active");
          let pos = (
            (($(".b-2 .content").offset().top - otop) * screent1) /
            ($(".b-2").height() - vihe - otop)
          ).toFixed(0);
          var context = document
            .querySelector(".b-2 .content canvas")
            .getContext("2d");
          if (screen1[pos]) {
            context.reset();
            context.drawImage(screen1[pos], 0, 0, 1920, 1080);
          }
        }
      }
      if ($(".b-3").length) {
        var pos = 1;
        var otop = 0;
        var smax = $(".b-3").offset().top + $(".b-3").height() - vihe;

        var sws = ($(".b-3").offset().top + otop - stop) / 300;
        var opsws = (sws - 0.5).toFixed(2);
        if (opsws < 0) opsws = 0;
        if (opsws > 1) opsws = 1;
        $(".b-3 .mask").css("opacity", opsws);
        if (stop > $(".b-3").offset().top + otop && stop < smax) {
          $(".b-3").addClass("show");
        } else {
          $(".b-3").removeClass("show");
        }
        if (stop > $(".b-3").offset().top + otop && stop < smax) {
          $(".screen").removeClass("active");
          $(".b-3").addClass("active");
          pos = (
            (($(".b-3 .content").position().top - otop) * screent2) /
            ($(".b-3").height() - vihe - otop)
          ).toFixed(0);
        }
        if (stop == smax) pos = screent2;
        var context = document
          .querySelector(".b-3 .content canvas")
          .getContext("2d");
        if (screen2[pos]) {
          context.reset();
          context.drawImage(screen2[pos], 0, 0, 1920, 1080);
          if (stop > smax) {
            context.reset();
          }
        }
      }
      if ($(".b-4").length) {
        var pos = 1;
        var otop = 0;
        var smax = $(".b-4").offset().top + $(".b-4").height() - vihe;
        if (stop > $(".b-4").offset().top + otop && stop < smax) {
          $(".screen").removeClass("active");
          $(".b-4").addClass("active");
          pos = (
            (($(".b-4 .content").position().top - otop) * screent3) /
            ($(".b-4").height() - vihe - otop)
          ).toFixed(0);
        }
        if (stop == smax) pos = screent3;
        var context = document
          .querySelector(".b-4 .content canvas")
          .getContext("2d");
        if (screen3[pos]) {
          context.reset();
          context.drawImage(screen3[pos], 0, 0, 1920, 1080);
          if (stop > smax) {
            context.reset();
          }
        }
      }
      if ($(".b-5").length) {
        var pos = 1;
        var otop = 0;
        var smax = $(".b-5").offset().top + $(".b-5").height() - vihe;
        if (stop > $(".b-5").offset().top + otop && stop < smax) {
          $(".screen").removeClass("active");
          $(".b-5").addClass("active");
          pos = (
            (($(".b-5 .content").position().top - otop) * screent4) /
            ($(".b-5").height() - vihe - otop)
          ).toFixed(0);
          $(".b-5 .mission .item").removeClass("active");
          if (pos > 40) $(".b-5 .mission .item.i-1").addClass("active");
          if (pos > 50) $(".b-5 .mission .item.i-2").addClass("active");
          if (pos > 60) $(".b-5 .mission .item.i-3").addClass("active");
        }
        if (stop == smax) pos = screent4;
        var context = document
          .querySelector(".b-5 .content canvas")
          .getContext("2d");
        if (screen4[pos]) {
          context.reset();
          context.drawImage(screen4[pos], 0, 0, 1920, 1080);
          if (stop > smax) {
            context.reset();
          }
        }
      }
    } else {
      if (document.querySelector(".section-1 .bg canvas"))
        document
          .querySelector(".section-1 .bg canvas")
          .getContext("2d")
          .reset();
      if (document.querySelector(".b-2 .bg canvas"))
        document.querySelector(".b-2 .bg canvas").getContext("2d").reset();
      if (document.querySelector(".b-2 .content canvas"))
        document.querySelector(".b-2 .content canvas").getContext("2d").reset();
      if (document.querySelector(".b-3 .content canvas"))
        document.querySelector(".b-3 .content canvas").getContext("2d").reset();
      if (document.querySelector(".b-4 .content canvas"))
        document.querySelector(".b-4 .content canvas").getContext("2d").reset();
      if (document.querySelector(".b-5 .content canvas"))
        document.querySelector(".b-5 .content canvas").getContext("2d").reset();
    }
  }
  // if ($(".section-5").length) {
  //     if (stop > ($('.section-5').offset().top - vihe) && stop < ($('.section-5').offset().top + $('.section-5').height())) {
  //         var xx = stop - ($('.section-5').offset().top - vihe);
  //         xx = (xx / 4).toFixed(2);
  //         $('.section-5 .container-box .imgs .img-1').css('transform', 'translateX(-' + xx + 'px)');
  //         $('.section-5 .container-box .imgs .img-3').css('transform', 'translateX(-' + xx + 'px)');
  //         $('.section-5 .container-box .imgs .img-4').css('transform', 'translateX(-' + xx + 'px)');
  //         $('.section-5 .container-box .imgs .img-6').css('transform', 'translateX(-' + xx + 'px)');
  //         $('.section-5 .container-box .imgs .img-8').css('transform', 'translateX(-' + xx + 'px)');
  //         $('.section-5 .container-box .imgs .img-9').css('transform', 'translateX(-' + xx + 'px)');
  //         $('.section-5 .container-box .imgs .img-12').css('transform', 'translateX(-' + xx + 'px)');
  //         xx = (xx / 2).toFixed(2);
  //         $('.section-5 .container-box .imgs .img-2').css('transform', 'translateX(-' + xx + 'px) scale(0.8)');
  //         $('.section-5 .container-box .imgs .img-5').css('transform', 'translateX(-' + xx + 'px) scale(0.8)');
  //         $('.section-5 .container-box .imgs .img-7').css('transform', 'translateX(-' + xx + 'px) scale(0.8)');
  //         $('.section-5 .container-box .imgs .img-10').css('transform', 'translateX(-' + xx + 'px) scale(0.8)');
  //         $('.section-5 .container-box .imgs .img-11').css('transform', 'translateX(-' + xx + 'px) scale(0.8)');
  //     }
  // }

  // Section 5 dynamic Media logos number support

  if ($(".footer-box .bgs .before").length) {
    var trt = 100 - (stop - ($(".footer-box .bgs").offset().top - vihe)) / 8;

    if (trt < 0) trt = 0;
    if (trt > 100) trt = 100;

    $(".footer-box .bgs .before").css(
      "transform",
      "translate(-" + trt + "px, " + trt + "px)"
    );
    $(".footer-box .bgs .after").css(
      "transform",
      "translate(" + trt + "px, -" + trt + "px)"
    );
  }
});

// BG IMAGE
window.addEventListener("resize", function () {
  setHeight = $(".section-1").height() - vihe;
});

// TALK - SLICK
function initializeSlick() {
  if ($(".reviews").length) {
    $(".reviews").slick({
      centerMode: false,
      slidesToShow: 1,
      arrows: true,
      infinite: false,
      centerMode: true,
      centerPadding: "16vw",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerPadding: "0px",
          },
        },
      ],
    });
  }

  if ($(".m-box > div > div").length) {
    $(".m-box > div > div").slick({
      centerMode: false,
      slidesToShow: 1,
      arrows: false,
      dots: false,
      infinite: false,
      centerMode: true,
      centerPadding: "20px",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        },
      ],
    });
  }

  if (window.innerWidth > 767) {
    $(".b-2 .content-end .htmlcontent .row-2").slick({
      centerMode: false,
      slidesToShow: 5,
      arrows: false,
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }
}

//MOUSE CURSOR B-1
if (document.querySelector(".cursor-box span")) {
  const cursor = document.querySelector(".cursor-box span");
  const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };
  window.addEventListener("mousemove", positionElement);
  $(".cursor-box").on("click", function (e) {
    e.preventDefault();
    var url = $(".b-1 .link-box a ").attr("href");
    location.href = url;
  });
}

//TABS

$(".tabs-nav a").on("click", function (e) {
  e.preventDefault();
  $(".tabs-nav a").removeClass("active");
  var tab = $(this).attr("href");
  $(this).addClass("active");
  $(".tabs-content .tab").removeClass("active");
  $(".tabs-content " + tab).addClass("active");
});

$("a.go-tab").on("click", function (e) {
  e.preventDefault();
  var tab = $(this).attr("href");
  $(".tabs-content .tab").removeClass("active");
  $(".tabs-content " + tab).addClass("active");
});

//Screen 1
var screent1 = 158;
var screen1 = [];
var ii = 1;
for (var i = 1; i < 80; i++) {
  var filename = "frame_";
  if (i % 8 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = "img/screen-1/" + filename;
  screen1.push(img);
}
var ii = 80;
for (var i = 80; i > 1; i--) {
  var filename = "frame_";
  if (i % 7 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = "img/screen-1/" + filename;
  screen1.push(img);
}
//Screen 2
var screent2 = 125;
var screen2 = [];
var ii = 1;
for (var i = 1; i < screent2 + 1; i++) {
  var filename = "frame_";
  if (i % 8 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = path + "screen-2/" + filename;
  screen2.push(img);
}
//Screen 3
var screent3 = 150;
var screen3 = [];
var ii = 1;
for (var i = 1; i < screent3 + 2; i++) {
  var filename = "frame_";
  if (i % 10 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = path + "screen-3/" + filename;
  screen3.push(img);
}
//Screen 4
var screent4 = 150;
var screen4 = [];
var ii = 1;
for (var i = 100; i < screent4 + 1; i++) {
  var filename = "frame_";
  //if (i % 8 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = path + "screen-3/" + filename;
  screen4.unshift(img);
}
var ii = 100;
for (var i = 100; i < screent4 + 1; i++) {
  var filename = "frame_";
  //if (i % 8 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = path + "screen-3/" + filename;
  screen4.push(img);
}
var ii = screent4;
for (var i = screent4; i > 100; i--) {
  var filename = "frame_";
  //if (i % 8 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = path + "screen-3/" + filename;
  screen4.push(img);
}
var ii = 100;
for (var i = 100; i < screent4 + 1; i++) {
  var filename = "frame_";
  //if (i % 8 === 0) ii = i;
  if (ii < 10) filename += "0000";
  else if (ii < 100) filename += "000";
  else if (ii < 1000) filename += "00";
  else if (ii < 10000) filename += "0";
  filename += ii + ".png";
  var img = new Image();
  img.src = path + "screen-3/" + filename;
  screen4.push(img);
}
screent4 = 203;

$(".b-2").css("height", screent1 * 15 + vihe);
$(".b-3").css("height", screent2 * 15 + vihe);
$(".b-4").css("height", screent3 * 10 + vihe);
$(".b-5").css("height", screent4 * 10 + vihe * 2);

window.setTimeout(function () {
  window.scrollTo(0, 0);
  document.querySelector("body").classList.remove("load");
  $(".b-1 video").prop("autoplay", true).trigger("play");
}, 3000);

// Find .dropdown-menu; on click of their child a.dropdown-menu-switch, toggle .dropdown-menu active attribute
function setupDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach(function (dropdown) {
    var switchers = dropdown.querySelectorAll(".dropdown-menu-switch");
    switchers.forEach(function (switcher) {
      switcher.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("active");
      });
    });
  });

  $(document).on("click", function () {
    $(".dropdown-menu").removeClass("active");
  });
}

// var dropdownButtons = document.querySelectorAll('.dropdown-menu-switch');
// dropdownButtons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         e.preventDefault();
//         var dropdown = button.next('.dropdown-menu');
//         console.log('sibling', dropdown)
//         if (dropdown && dropdown.classList.contains('dropdown-menu')) {
//             dropdown.classList.toggle('active');
//         } else {
//             console.warn('No dropdown-menu sibling found for button', button);
//         }
//     });
// });

const marqueeCopies = {};
const marqueeDirections = {};

function setupMarquees() {
  const marqueeContents = document.querySelectorAll("ul.marquee-content");
  for (const marqueeContent of marqueeContents) {
    setupMarquee(marqueeContent);
  }
}

function setupMarquee(marqueeContent) {
  const key = marqueeContent.dataset.key;
  const marqueeRoot = marqueeContent.parentElement;
  const count = marqueeContent.children.length;
  marqueeRoot.style.setProperty("--marquee-elements", count);

  // const copies = marqueeRoot.getComputedStyle().get("--marquee-copies")[0];
  const copies = marqueeCopies[key];

  for (let i = 0; i < count * copies; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }

  // const direction = marqueeRoot.css().get("--marquee-direction")[0]; // 0 - left, 1 - right
  const direction = marqueeDirections[key]; // false - left, true - right
  marqueeContent.style.setProperty(
    "animation",
    `scrolling-${
      direction === true ? "right" : "left"
    } var(--marquee-animation-duration) linear infinite`
  );
}

// Fetch attributes from the API
async function fetchAttributes() {
  try {
    const response = await fetch(`${ApiBase}/attributes?ts=${Date.now()}`); // Replace with your API endpoint in settings.js
    if (!response.ok) {
      throw new Error("Failed to fetch attributes");
    }

    const attributes = await response.json();
    console.log(attributes);
    updateElements(attributes);
  } catch (error) {
    console.error("Error fetching attributes:", error);
  } finally {
    initializeSlick();
    setTimeout(() => disableLoading(), 200);
  }
}

// Update elements based on attributes
function updateElements(attributes) {
  Object.entries(attributes).forEach(([group, items]) => {
    items.forEach(({ key, type, value }) => {
      if (!value) return;
      if (type === "Array" || type === "Number" || type === "Boolean") return;
      const dataKey = `${group}:${key}`;
      const elements = document.querySelectorAll(`[data-key="${dataKey}"]`);

      if (type === "Text") {
        elements.forEach((element) => {
          element.innerHTML = value;
        });
      } else if (type === "Image") {
        elements.forEach((element) => {
          element.src = value;
        });
      } else if (type === "Link") {
        elements.forEach((element) => {
          element.href = value;
        });
      } else {
        console.warn(`Unsupported attribute type: ${type}`);
      }
    });
  });

  const textsCards = attributes["texts"].find(({ key }) => key === "cards");
  if (textsCards.value) {
    // <div class="item i-1">
    //     <div class="title">PURPOSE</div>
    //     <div class="text">YOU OWN YOUR DATA AND EXCHANGE IT FOR VALUE, NOT CORPORATIONS.</div>
    //     <div class="img">
    //         <img src="img/m-1.png" alt="">
    //             <img src="img/m-1.gif" alt="" class="fbg">
    //     </div>
    // </div>

    const cardsContainer = document.querySelector(`[data-key="texts:cards"]`);
    if (cardsContainer) {
      cardsContainer.innerHTML = "";
      textsCards.value.forEach(({ title, text }) => {
        const card = document.createElement("div");
        card.classList.add("item");
        card.innerHTML = `
                    <div class="title">${title}</div>
                    <div class="text">${text}</div>
                    <div class="img">
                        <img src="img/m-1.png" alt="">
                        <img src="img/m-1.gif" class="fbg">
                    </div>
                `;
        cardsContainer.appendChild(card);
      });

      function equalizeTextLines({ maxLinesCap = 6 } = {}) {
        const texts = Array.from(
          document.querySelectorAll(".b-5 .mission .item .text")
        );
        if (!texts.length) return;

        const linesPerEl = texts.map((el) => {
          const cs = getComputedStyle(el);
          const lh = parseFloat(cs.lineHeight);
          const padV = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
          const innerH = el.scrollHeight - padV;
          const lines = Math.max(1, Math.round(innerH / lh));
          return { el, lh, lines };
        });

        const maxLines = Math.max(...linesPerEl.map((x) => x.lines));
        const targetLines = Math.min(maxLines, maxLinesCap);

        linesPerEl.forEach(({ el, lh, lines }) => {
          const pad = Math.max(0, (targetLines - lines) * lh);
          el.style.setProperty("--pad-after", pad + "px");
        });
      }

      window.addEventListener("load", () => equalizeTextLines());
      if (document.fonts?.ready)
        document.fonts.ready.then(() => equalizeTextLines());
      window.addEventListener("resize", () => equalizeTextLines());
    }
  }

  const testimonialCards = attributes["testimonials"].find(
    ({ key }) => key === "cards"
  );
  if (testimonialCards.value) {
    // <div class="review">
    //     <img src="img/talk/t-1.png" alt="" class="desctop">
    //         <img src="img/talk/t-1m.png" alt="" class="mobile">
    // </div>

    const cardsContainer = document.querySelector(
      `[data-key="testimonials:cards"]`
    );
    if (cardsContainer) {
      cardsContainer.innerHTML = "";
      testimonialCards.value.forEach(({ image_desktop, image_mobile }) => {
        const card = document.createElement("div");
        card.classList.add("review");
        card.innerHTML = `
                    <img src="${image_desktop}" alt="" class="desctop">
                    <img src="${image_mobile}" alt="" class="mobile">
                `;
        cardsContainer.appendChild(card);
      });
    }
  }

  const customLinks = [
    { text: "Nodes", link: "/nodes", external: false },
    { text: "Whitelist", link: "/whitelist", external: false },
    { text: "Whitepaper", link: "/whitepaper.pdf", external: false },
  ];
  
  const linksContainers = document.querySelectorAll(
    `[data-key="navigation:website_links"]`
  );
  
  if (linksContainers) {
    linksContainers.forEach((container) => {
      container.innerHTML = "";
      customLinks.forEach(({ text, link, external }) => {
        const linkElement = document.createElement("a");
        linkElement.href = link;
        linkElement.target = external ? "_blank" : "_self";
        linkElement.classList.add("link");
        linkElement.innerText = text;
        container.appendChild(linkElement);
      });
    });
  }

  const socialLinks = attributes["navigation"].find(
    ({ key }) => key === "social_links"
  );
  if (socialLinks.value) {
    const socialContainers = document.querySelectorAll(
      `[data-key="navigation:social_links"]`
    );
    if (socialContainers) {
      socialContainers.forEach((container) => {
        container.innerHTML = "";
        socialLinks.value.forEach(({ text, link, icon, sublinks }) => {
          const divElement = document.createElement("div");
          if (sublinks && sublinks.length > 0) {
            divElement.className = "socio-box-item dropdown-menu up";
            const links = sublinks.map(
              (x) =>
                `<li><a target="${x.external ? "_blank" : ""}" href="${
                  x.link
                }">${x.text}</a></li>`
            );
            const linksStr = links.join("");
            divElement.innerHTML = `<a class="socio-link dropdown-menu-switch"><img src="${icon}" alt="telegram"></a><ul>${linksStr}</ul>`;
          } else {
            divElement.className = "socio-box-item";
            divElement.innerHTML = `<a target="_blank" class="socio-link" href="${link}"><img src="${icon}" alt="${text}"></a>`;
          }
          container.appendChild(divElement);
        });
      });
    }
    const socialWithTextContainers = document.querySelectorAll(
      `[data-key="navigation:social_links-with-text"]`
    );
    
    if (socialWithTextContainers) {
      socialWithTextContainers.forEach((container) => {
        container.innerHTML = "";
    
        // 🔹 Define your own links here (you can update anytime)
        const customSocialLinks = [
          {
            text: "TELEGRAM",
            link: "https://t.me/#", // <-- change this
            icon: "img/socio-1.svg"
          },
          {
            text: "X",
            link: "https://x.com/#", // <-- change this
            icon: "img/socio-3.svg"
          }
        ];
    
        // Render only your custom list
        customSocialLinks.forEach(({ text, link, icon }) => {
          const divElement = document.createElement("div");
          divElement.className = "socio-box-item";
    
          divElement.innerHTML = `
            <a target="_blank" class="socio-link" href="${link}">
              <div class="img"><img src="${icon}" alt="${text}"></div>
              <span>${text}</span>
            </a>
          `;
    
          container.appendChild(divElement);
        });
      });
    }
  }

  const investor_logos_line_1 = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_1"
  );
  const investor_logos_line_1_height = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_1_height"
  );
  const investor_logos_line_1_animation_duration = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_1_animation_duration"
  );

  const investor_logos_line_1_copies = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_1_copies"
  );
  const investor_logos_line_1_direction_right = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_1_direction_right"
  );
  marqueeCopies["logos:investor_logos_line_1"] =
    investor_logos_line_1_copies.value;
  marqueeDirections["logos:investor_logos_line_1"] =
    investor_logos_line_1_direction_right.value;

  if (investor_logos_line_1.value && investor_logos_line_1.value.length > 0) {
    // <li><img src="img/logos/line-1/L1-1.svg" alt=""/></li>
    const marqueeContentL1 = document.querySelector(
      `[data-key="logos:investor_logos_line_1"]`
    );
    if (marqueeContentL1) {
      marqueeContentL1.innerHTML = "";
      investor_logos_line_1.value.forEach((logo) => {
        const logoElement = document.createElement("li");
        if (logo["override_width"]) {
          logoElement.innerHTML = `<img src="${logo.image}" alt="" style="width: ${logo["override_width"]}px">`;
        } else {
          logoElement.innerHTML = `<img src="${logo.image}" alt="">`;
        }
        marqueeContentL1.appendChild(logoElement);
      });

      if (investor_logos_line_1_height.value) {
        marqueeContentL1.parentElement.style.setProperty(
          "--marquee-height",
          investor_logos_line_1_height.value + "px"
        );
      }

      if (investor_logos_line_1_animation_duration.value) {
        marqueeContentL1.parentElement.style.setProperty(
          "--marquee-animation-duration",
          investor_logos_line_1_animation_duration.value + "s"
        );
      }

      if (investor_logos_line_1_copies.value) {
        marqueeContentL1.parentElement.style.setProperty(
          "--marquee-copies",
          investor_logos_line_1_copies.value
        );
      }
    }
  }

  const investor_logos_line_2 = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_2"
  );
  const investor_logos_line_2_height = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_2_height"
  );
  const investor_logos_line_2_animation_duration = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_2_animation_duration"
  );

  const investor_logos_line_2_copies = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_2_copies"
  );
  const investor_logos_line_2_direction_right = attributes["logos"].find(
    ({ key }) => key === "investor_logos_line_2_direction_right"
  );
  marqueeCopies["logos:investor_logos_line_2"] =
    investor_logos_line_2_copies.value;
  marqueeDirections["logos:investor_logos_line_2"] =
    investor_logos_line_2_direction_right.value;
  if (investor_logos_line_2.value && investor_logos_line_2.value.length > 0) {
    // <li><img src="img/logos/line-1/L1-1.svg" alt=""/></li>
    const marqueeContentL2 = document.querySelector(
      `[data-key="logos:investor_logos_line_2"]`
    );
    if (marqueeContentL2) {
      marqueeContentL2.innerHTML = "";
      investor_logos_line_2.value.forEach((logo) => {
        const logoElement = document.createElement("li");
        if (logo["override_width"]) {
          logoElement.innerHTML = `<img src="${logo.image}" alt="" style="width: ${logo["override_width"]}px">`;
        } else {
          logoElement.innerHTML = `<img src="${logo.image}" alt="">`;
        }
        marqueeContentL2.appendChild(logoElement);
      });

      if (investor_logos_line_2_height.value) {
        marqueeContentL2.parentElement.style.setProperty(
          "--marquee-height",
          investor_logos_line_2_height.value + "px"
        );
      }

      if (investor_logos_line_2_animation_duration.value) {
        marqueeContentL2.parentElement.style.setProperty(
          "--marquee-animation-duration",
          investor_logos_line_2_animation_duration.value + "s"
        );
      }

      if (investor_logos_line_2_copies.value) {
        marqueeContentL2.parentElement.style.setProperty(
          "--marquee-copies",
          investor_logos_line_2_copies.value
        );
      }
    }
  }

  const partner_logos = attributes["logos"].find(
    ({ key }) => key === "partner_logos"
  );
  const partner_logos_height = attributes["logos"].find(
    ({ key }) => key === "partner_logos_height"
  );
  const partner_logos_animation_duration = attributes["logos"].find(
    ({ key }) => key === "partner_logos_animation_duration"
  );

  const partner_logos_copies = attributes["logos"].find(
    ({ key }) => key === "partner_logos_copies"
  );
  const partner_logos_direction_right = attributes["logos"].find(
    ({ key }) => key === "partner_logos_direction_right"
  );
  marqueeCopies["logos:partner_logos"] = partner_logos_copies.value;
  marqueeDirections["logos:partner_logos"] =
    partner_logos_direction_right.value;
  if (partner_logos.value && partner_logos.value.length > 0) {
    // <li><img src="img/logos/line-1/L1-1.svg" alt=""/></li>
    const marqueeContentP = document.querySelector(
      `[data-key="logos:partner_logos"]`
    );
    if (marqueeContentP) {
      marqueeContentP.innerHTML = "";
      partner_logos.value.forEach((logo) => {
        const logoElement = document.createElement("li");
        if (logo["override_width"]) {
          logoElement.innerHTML = `<img src="${logo.image}" alt="" style="width: ${logo["override_width"]}px">`;
        } else {
          logoElement.innerHTML = `<img src="${logo.image}" alt="">`;
        }
        marqueeContentP.appendChild(logoElement);
      });

      if (partner_logos_height.value) {
        marqueeContentP.parentElement.style.setProperty(
          "--marquee-height",
          partner_logos_height.value + "px"
        );
      }

      if (partner_logos_animation_duration.value) {
        marqueeContentP.parentElement.style.setProperty(
          "--marquee-animation-duration",
          partner_logos_animation_duration.value + "s"
        );
      }

      if (partner_logos_copies.value) {
        marqueeContentP.parentElement.style.setProperty(
          "--marquee-copies",
          partner_logos_copies.value
        );
      }
    }
  }

  const media_logos = attributes["logos"].find(
    ({ key }) => key === "media_logos"
  );
  const media_logos_link_text_gradient = attributes["logos"].find(
    ({ key }) => key === "media_logos_link_text_gradient"
  );

  if (media_logos_link_text_gradient.value) {
    //.section-5 .container-box-2 .link a span
    const linkTextElement = document.querySelector(
      `[data-key="logos:media_logos_link_text"]`
    );
    if (linkTextElement) {
      linkTextElement.style.cssText = `background: ${media_logos_link_text_gradient.value}; 
            background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent;`;
    }
  }
  if (media_logos.value) {
    const imgsElement = document.querySelector(
      `[data-key="logos:media_logos"]`
    );
    if (imgsElement) {
      imgsElement.innerHTML = media_logos.value
        .map(
          (img, index) => `
                <div class="img-${index + 1}"><img src="${
            img.image
          }" alt=""></div>
            `
        )
        .join("");

      const isSmallScreen = window.innerWidth <= 767;

      media_logos.value.forEach((img, index) => {
        const imgWrapper = imgsElement.querySelector(`.img-${index + 1}`);
        const imgElement = imgWrapper?.querySelector("img");

        if (imgWrapper) {
          imgWrapper.style.setProperty("position", "absolute");

          const top = isSmallScreen
            ? img?.override_position_top_small
            : img?.override_position_top;
          const left = isSmallScreen
            ? img?.override_position_left_small
            : img?.override_position_left;

          if (top != null) {
            imgWrapper.style.setProperty("top", top + "%");
          }
          if (left != null) {
            imgWrapper.style.setProperty("left", left + "%");
          }
        }

        if (imgElement && typeof img?.override_scale === "number") {
          const scale = img?.override_scale / 100 ?? 1;
          imgElement.style.setProperty("transform", `scale(${scale * 1.02})`);
          imgElement.style.setProperty("transform-origin", "center center");
          imgWrapper.style.setProperty("transform", `scale(${scale})`);
          imgWrapper.style.setProperty("transform-origin", "center center");
        }
      });
    }
  }

  setTimeout(() => {
    setupMarquees();
    setupDropdowns();
  }, 200);
}

// Call the function to fetch attributes and update the DOM
window.onload = fetchAttributes;
