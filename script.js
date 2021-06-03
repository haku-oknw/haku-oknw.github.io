// ハンバーガー
$(function(){
  $(".hamburger-btn,.header__navList a").on("click",function(){
    $(".hamburger-btn,.header__navList").toggleClass("active")
  });
});

// スクロール
// var fvh = $('.fv').height();

// $(window).scroll(function() {
//   var top = $(window).scrollTop();
//   if ((fvh - 100) < top) {
//     $('.header').css('display', 'block');
//     } else {
//     $('.header').css('display', 'none');
//   }
// });


// jQueryでブラウザの画面幅によって処理を変える

// $(window).on('load resize', function(){
//   if (window.matchMedia('(max-width:800px)').matches){
//     $('.header').css('display', 'block');
//   } else {
//     $('.header').css('display', 'none');
//   }
// });

// トップへ戻る
$(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

//ふわっと表示
$(function(){
  $(".ef").css({opacity:"0"});
  $(window).scroll(function (){
    $(".ef").each(function(){
      var ePos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > ePos - windowHeight + windowHeight/5){
        $(this).animate({ opacity: 1 }, { duration: 600, easing: 'swing'})
      }
    });
  });
});