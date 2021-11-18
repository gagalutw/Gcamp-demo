$(function () {
  Scrollspy();
  webNav();

  var cardH = parseInt($("#cardH").outerHeight());
  // console.log(cardH)
  $(window).on("resize", function () {
    var card = $(".awards .card-wrap");
    window.clearTimeout(timer);
    timer = null;
    timer = window.setTimeout(function () {
    width = $(window).width();
    if (width > 700) {
      card.css("height",cardH);
    }
    else if (width < 699) {
      card.css("height","auto");
    }
    else {
      card.css("height","auto");
    }
  }, 200)
  }).trigger("resize")


})


//判斷手機行動裝置
function isMobile() {
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    //  (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/))
  );
}



//區塊動態效果
$(window).on('load', function () {
  AOS.init({
    duration: 1200,
  })
});



function Scrollspy() {
  // 菜單分類滾動監聽
  $('body').scrollspy({
    target: '#scrollNav',
    offset: 100 //距離視窗頂部多少就active
  })

  $("#scrollNav .a-anchor").click(function () {
    //不要讓網址掛上#id
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location
      .hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 500);
        return false;
      }
    }
  });
}

var width = $(window).width();
var timer = null;

//手機版導覽列控制
function webNav() {
  $(window).on("scroll", function () {
    window.clearTimeout(timer);
    timer = null;
    timer = window.setTimeout(function () {
      width = $(window).width();
      if (width > 700) {
        if ($(window).scrollTop() > 20) {
          $('header').addClass('scrolling');
        } else {
          $('header').removeClass('scrolling');
        }
      }

    }, 100)
  })
}
