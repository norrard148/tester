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
  
    if ($(".index").length>0) {
        var bottom_of_object1 = $(".hideme").offset().top;
        var bottom_of_object2 = $(".index-middle").offset().top;
        var bottom_of_object3 = $(".index-bottom").offset().top ;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object1 ){
            $('.hideme').animate({'opacity':'1'},500)
            if( bottom_of_window > bottom_of_object2 ){
                $('.card1').animate({'opacity':'1'},500).queue(function() {
                        $('.card2').animate({'opacity':'1'},500).queue(function() {
                            $('.card3').animate({'opacity':'1'},500)
                            $('.hideme2').animate({'opacity':'1'},500)
                        });
                });
                if( bottom_of_window > bottom_of_object3+200 ){
                    $('.card4').animate({'opacity':'1'},500).queue(function() {
                        $('.card5').animate({'opacity':'1'},500).queue(function() {
                            $('.card6').animate({'opacity':'1'},500);
                        });
                    });
                }; 
            }
        }
    }
    else if ($(".aboutus-middle").length>0) {
        
            var bottom_of_object0 = $(".index-middle.aboutus").offset().top + 150;
            var bottom_of_object1 = $(".aboutus-middle").offset().top + 150;
            var bottom_of_object2 = $(".aboutus-middle2").offset().top + 150;
            var bottom_of_object3 = $(".index-bottom.aboutus").offset().top;;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object0 ){
                $('.card1').animate({'opacity':'1'},500).queue(function() {
                    $('.card2').animate({'opacity':'1'},500).queue(function() {
                        $('.card3').animate({'opacity':'1'},500);
                    });
                });
            };
            if( bottom_of_window > bottom_of_object1 ){
                $(".aboutus-middle").addClass("show");
            
            };
            if( bottom_of_window > bottom_of_object2 ){
                $('.card4').animate({'opacity':'1'},500).queue(function() {
                    $('.card5').animate({'opacity':'1'},500).queue(function() {
                        $('.card6').animate({'opacity':'1'},500).queue(function() {
                            $('.card7').animate({'opacity':'1'},500)
                        });;
                    });
                });
            
            };
            if( bottom_of_window > bottom_of_object3 ){
                $(".index-bottom.aboutus h1, .index-bottom.aboutus button").addClass("show");
            };
    }
    else if ($("#works-container1").length>0) {
        console.log("works")
        var bottom_of_object0 = $("#works-box1").offset().top + 150;
        var bottom_of_object1 = $("#works-box2").offset().top + 150;
        var bottom_of_object2 = $("#works-box3").offset().top + 150;
        var bottom_of_object3 = $("#works-bottom").offset().top;;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object0 ){
            $("#works-box1").addClass("draw")
            $("#works-container1 h1, #works-container1 h2").addClass("show");
        };
        if( bottom_of_window > bottom_of_object1 ){
            $("#works-box1").addClass("btb-active")
            $("#works-container2 h1, #works-container2 h2").addClass("show");
            $("#works-box2").addClass("draw")
        };
        if( bottom_of_window > bottom_of_object2 ){
            $("#works-box2").addClass("btb-active")
            $("#works-container3 h1, #works-container3 h2").addClass("show");
            $("#works-box3").addClass("draw")
        };
        if( bottom_of_window > bottom_of_object3 ){
            $("#works-bottom, #works-bottom h1, #works-bottom h2, #works-bottom button").addClass("show");
        };
     }
});

