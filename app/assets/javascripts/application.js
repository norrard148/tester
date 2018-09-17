// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

// if(navigator.userAgent.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
//     console.log("Mobile"); 
// } else {
//     console.log("PC");
//     $(".testing").remove();
// }



$(document).on('scroll', function (){
    var body = $("body")
  
    if ($(".index-middle").length>0) {
        console.log("index")
        var bottom_of_object1 = $(".hideme").offset().top;
        var bottom_of_object2 = $(".index-middle").offset().top;
        var bottom_of_object3 = $(".index-bottom").offset().top ;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object1 ){
            $('.hideme').animate({'opacity':'1'},700)
            if( bottom_of_window > bottom_of_object2 ){
                $('.card1').animate({'opacity':'1'},1000).queue(function() {
                        $('.card2').animate({'opacity':'1'},700).queue(function() {
                            $('.card3').animate({'opacity':'1'},700)
                            $('.hideme2').animate({'opacity':'1'},700)
                        });
                });
                if( bottom_of_window > bottom_of_object3+200 ){
                    $('.card4').animate({'opacity':'1'},1000).queue(function() {
                        $('.card5').animate({'opacity':'1'},700).queue(function() {
                            $('.card6').animate({'opacity':'1'},700);
                        });
                    });
                }; 
            }
        }
    }
    else if ($(".card1").length>0) {
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
        
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }
        }); 
    
        console.log("aboutus")
        
        $('.container').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
        
            if( bottom_of_window > bottom_of_object ){
                $('.card1').animate({'opacity':'1'},800).queue(function() {
                    $('.card2').animate({'opacity':'1'},800).queue(function() {
                        $('.card3').animate({'opacity':'1'},800).queue(function() {
                            $('.card4').animate({'opacity':'1'},800);
                        });
                    });
                });
            };
        }); 

    }
    else if ($("#hover0").length>0) {
        console.log("works")
         var bottom_of_object0 = $("#hover0").offset().top;
        var bottom_of_object1 = $("#hover1").offset().top;
        var bottom_of_object2 = $("#hover2").offset().top;
        var bottom_of_object3 = $("#hover3").offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object0 ){
            $("#draw1").addClass("draw")
        };
        if( bottom_of_window > bottom_of_object1 ){
            $("#draw1").addClass("btb-active")
            $("#draw2").addClass("draw")
        };
        if( bottom_of_window > bottom_of_object2 ){
            $("#draw2").addClass("btb-active")
            $("#draw3").addClass("draw")
        };
        if( bottom_of_window > bottom_of_object3 ){
            $("#draw3").addClass("btb-active")
        
        };
     }
});

