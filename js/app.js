// $(function() {

//     $(window).on("scroll", functoin(){
//         var inthoH =$
//     })

// })

const st = $(window).scrollTop()
const prevSt = st;

const header = $('.header');

$(window).scroll(function(){
    if(st > 200 ){
        header.addClass('fixed')
    }else{
        header.removeClass('fixed')
    }
    if(st < prevSt && prevSt - st < 500){
        header.removeClass('header--hide')
    }
     if(st > header.height()){
        header.addClass('header--hide')
    }

  });

