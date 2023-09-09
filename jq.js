$(document).ready(function(){
    $('.menue-bar').click(function(){
        $('.b1').toggleClass('active1');
        $('.b2').toggleClass('active2');
        $('.b3').toggleClass('active3');

        $('nav').toggleClass('active-nav');

        $('.all-section').toggleClass('fade');

        $(this).toggleClass('point');
       
    });

    $('nav a').click(function(){
        $('.b1').toggleClass('active1');
        $('.b2').toggleClass('active2');
        $('.b3').toggleClass('active3');

        $('nav').removeClass('active-nav');
        $('.all-section').removeClass('fade');

        $('.menue-bar').toggleClass('point');
    });

    $('.to-modal').click(function(){
        $('.modal-wrapper').fadeIn();
        $('.all-section').toggleClass('fade');
    });

    $('.to-modal2').click(function(){
        $('.inq-wrapper').fadeIn();
        $('.all-section').toggleClass('fade');
    });

    

    $('.xmark').click(function(){
        $('.modal-wrapper').hide();
        $('.inq-wrapper').hide();
        $('.all-section').toggleClass('fade');
    });

    $('#submit1').click(function(){
        $('.thanks-wrapper').fadeIn();
        $('.modal-wrapper').hide();
    });

    $('#submit2').click(function(){
        $('.inq-thank-wrapper').fadeIn();
        $('.inq-wrapper').hide();
    });



    $('.to-top').click(function(){
        $('.thanks-wrapper').fadeOut();
        $('.inq-thank-wrapper').fadeOut();
        $('.all-section').toggleClass('fade');
    });

    $('.fa-book-bookmark').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },400)
    });

    $('.head-nav').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop':position
        },400); 
    });

    $('.footer-left').click(function(){
        $('.modal-wrapper').fadeIn();
        $('.all-section').toggleClass('fade');
    });
    

    $('.blue').delay(100).fadeIn(3000);
    $('.black').delay(1500).fadeIn(3000);
    $('#second').delay(4000).fadeIn(2500);
       
});
