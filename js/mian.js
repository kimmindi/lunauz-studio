$(function(){
    $('header .search img').click(function(){
        $('header .inputbox').toggleClass('on')
    })
    
    $(window).scroll(function(){
        let scroll = $(window).scrollTop()
        let footer = $('footer').offset().top - 800

        if($('.maintext').offset().top <= scroll)
            {
            if(footer <=scroll){
                $('.gotop').fadeOut()
            }else {
                $('.gotop').fadeIn()
            }
        }else{
            $('.gotop').fadeOut()
        }
        

    })
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html,body').animate({
            scrollTop : 0
        },700)
    })

    let headerof = $('header .headertop').offset().top
    $(window).scroll(function(){
        if($(window).scrollTop()>= headerof){
            $('header .headertop').addClass('on')
        }else{
            $('header .headertop').removeClass('on')
        }
    })




})