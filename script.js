$(function () {
  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('body,html').animate({ scrollTop: pos }, 500);
    return false;
  });

  // スクロールフェードイン
  $(function () {
    $(window).scroll(function () {
      $(".effect-fade").each(function () {
        var elemPos = $(this).offset().top; /* 要素の位置を取得 */
        var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
        var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
        if (scroll > elemPos - windowHeight) {
          /* 要素位置までスクロール出来たときに動作する */
          $(this).addClass("effect-scroll");
        }
      });
    });
    jQuery(window).scroll();
  });

  // 「Googleスプレットシートとは？」をクリックしたとき
  $(function(){
    $('.detail__sheet').on('click', function(){
      $('.sheet__menu').toggleClass('is-active');
    });
    $('.sheet__menu').on('click', function(){
      $('.sheet__menu').toggleClass('is-active');
    });
  }());

  // 「詳細はこちら」をクリックしたとき
  $(function(){
    $('.detail__pdf').on('click', function(){
      $('.pdf__menu').toggleClass('is-active');
    });
    $('.pdf__menu').on('click', function(){
      $('.pdf__menu').toggleClass('is-active');
    });
  }());

  // 回答用紙のサンプルをズーム
  if (window.matchMedia('(min-width: 520px)').matches) {
    mediumZoom(document.querySelectorAll('.sample__container--left > img'), {
      margin: -320,
      background: '#292d3d',
      scrollOffset: 500,
    });
  } else {
    /* スマホでは反応しない */
  }

});