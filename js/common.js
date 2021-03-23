$(function(){

    //ここからハンバーガーメニュー
    $('.burger-btn').on('click',function(){
        $('.burger-btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('slide-in');
      });
    //ハンバーガーメニューここまで

    //ここからslick
    $(".regular").slick({
        autoplay: false,
        dots: true,
        arrows:false
    });
    //slickここまで

    //ここからスムーススクロール
    $('a[href^="#"]').click(function() {
        var speed = 600; 
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    //ここまでスムーススクロール
    
});