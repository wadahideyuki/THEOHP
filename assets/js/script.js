$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    console.log("aa");
    return false;
  });
  $("nav li").click(function(){
    $(".spmenu").removeClass("open")
  })
  
  $(".spmenu").click(function () {
    $(this).toggleClass("open");
  })
  $(".works").click(function () {
    $(this).toggleClass("open");
  });
  
  $(window).on('load scroll', function () {
    add_class_in_scrolling($('.main'));
    add_class_in_scrolling($('.sec1'));
    add_class_in_scrolling($('.sec2'));
    add_class_in_scrolling($('.sec2-2'));
    add_class_in_scrolling($('.sec3'));
    add_class_in_scrolling($('.sec4'));
    add_class_in_scrolling($('.sec5'));
    add_class_in_scrolling($('.sec6'));
  });

  // スクロールで要素が表示された時にclassを付与する
  function add_class_in_scrolling(target) {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight - 200;

    if (target.offset().top < scrollPos ) {
      target.addClass('is-show');
    }
  }
}); //fncEnd
