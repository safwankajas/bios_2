$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navabar').addClass("sticky");
            $('.home').addClass("sticky");
        }else{
            $('.navabar').removeClass("sticky");
            $('.home').removeClass("sticky");

        }
    });

    
    $('.icon').click(function(){
      $('span').toggleClass("cancel");
    });
 
})