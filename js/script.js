$(function(){
    var winH=$(window).height(),
        upperH=$('.upper-bar').innerHeight(),
        navH=$('.navbar').innerHeight();
    $('.slider,.carousel-item').height(winH-(upperH+navH));

    // suffle img
    $('.feature-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');

        if($(this).data('class')==='all'){
            $('.shuffle-img .col-sm').css('opacity',1)
        }else{
            $('.shuffle-img .col-sm').css('opacity','.08')
            $($(this).data('class')).parent().css('opacity',1)
        }
    })
    $('.footer-links li a').hover(function(){
        $(this).css('color',"#ec1c23");
        $(this).css('margin','3px');
        $(this).css('transition','all .4s ease-in-out')
    },
    function(){
        $(this).css('color',"#08526d");
        $(this).css('margin','0px');
        $(this).css('transition','all .4s ease-in-out')
    })
})