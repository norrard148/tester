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
    if ($(".index").length>0) {
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var bottom_of_object1 = $(".hideme").offset().top;
        var bottom_of_object2 = $(".index-middle").offset().top;
        var bottom_of_object2_1 = $(".mobile.card1").offset().top+$(".mobile.card1").outerHeight();
        var bottom_of_object2_2 = $(".mobile.card2").offset().top+$(".mobile.card2").outerHeight();
        var bottom_of_object2_3 = $(".mobile.card3").offset().top+$(".mobile.card3").outerHeight();
        var bottom_of_object3 = $(".index-bottom").offset().top ;
        if( bottom_of_window > bottom_of_object2 && bottom_of_window <= bottom_of_object3){
            $('.hideme').addClass("show");
            $('.pc.card1').addClass("show").queue(function() {
                $('.pc.card2').addClass("show").queue(function() {
                    $('.pc.card3').addClass("show")
                    $('.pc.hideme2').addClass("show")
                });
            });
            if (bottom_of_window > bottom_of_object2_1) {
                $('.mobile.card1').addClass("show")
                if (bottom_of_window > bottom_of_object2_2) {
                    $('.mobile.card2').addClass("show")
                    if (bottom_of_window > bottom_of_object2_3) {
                        $('.mobile.card3').addClass("show").queue(function() {
                            $('.mobile.hideme2').addClass("show")
                        })
                    }
                }
            }
        }
        else if( bottom_of_window > bottom_of_object3){ 
                $(".index-bottom h1, .index-bottom h2, .index-bottom button").addClass("show");
        }
    }
    else if ($(".aboutus").length>0) {
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var bottom_of_object0 = $(".index-middle.aboutus").offset().top+200;
        var bottom_of_object1_1 = $(".aboutus-middle-box-left").offset().top;
        var bottom_of_object2 = $(".aboutus-middle2").offset().top;
        var bottom_of_object3 = $(".index-bottom.aboutus").offset().top;
        if( bottom_of_window > bottom_of_object0 && bottom_of_window <= bottom_of_object1_1 ){
            var bottom_of_object0_1 = $(".mobile.card1").offset().top+$(".mobile.card1").outerHeight()-150;
            var bottom_of_object0_2 = $(".mobile.card2").offset().top+$(".mobile.card1").outerHeight()-150;
            var bottom_of_object0_3 = $(".mobile.card3").offset().top+$(".mobile.card1").outerHeight()-150;
            $('.hideme').addClass("show");
            $('.pc.card1').addClass("show").queue(function() {
                $('.pc.card2').addClass("show").queue(function() {
                    $('.pc.card3').addClass("show");
                });
            });
            if (bottom_of_window > bottom_of_object0_1) {
                $('.mobile.card1').addClass("show");
            }
            if (bottom_of_window > bottom_of_object0_2) {
                $('.mobile.card2').addClass("show");
            }
            if (bottom_of_window > bottom_of_object0_3) {
                $('.mobile.card3').addClass("show");
            }
        }
        else if( bottom_of_window > bottom_of_object1_1 && bottom_of_window <= bottom_of_object2 ){
            var bottom_of_object1_2 = $(".aboutus-middle-box-right").offset().top;
            $('.hideme2').addClass("show");
            $('.aboutus-middle-box-left').addClass("show");
            if (bottom_of_window > bottom_of_object1_2) {
                $('.aboutus-middle-box-right').addClass("show");
            };
        }
        else if( bottom_of_window > bottom_of_object2 && bottom_of_window <= bottom_of_object3 ){
            var bottom_of_object2_1 = $(".mobile.card4").offset().top +$(".mobile.card4").outerHeight()-150;
            var bottom_of_object2_2 = $(".mobile.card5").offset().top +$(".mobile.card5").outerHeight()-150;
            var bottom_of_object2_3 = $(".mobile.card6").offset().top +$(".mobile.card6").outerHeight()-150;
            var bottom_of_object2_4 = $(".mobile.card7").offset().top +$(".mobile.card7").outerHeight()-150;
            $('.pc.card4').addClass("show")
            $('.pc.card5').addClass("show")
            $('.pc.card6').addClass("show")
            $('.pc.card7').addClass("show")
            if (bottom_of_window > bottom_of_object2_1) {
                $('.mobile.card4').addClass("show");
                if (bottom_of_window > bottom_of_object2_2) {
                    $('.mobile.card5').addClass("show");
                    if (bottom_of_window > bottom_of_object2_3) {
                        $('.mobile.card6').addClass("show");
                        if (bottom_of_window > bottom_of_object2_4) {
                            $('.mobile.card7').addClass("show");
                           
                        }
                    }
                }
            }
        }
        else if ( bottom_of_window > bottom_of_object3){
            $(".index-bottom.aboutus h1, .index-bottom.aboutus button").addClass("show");
        }    
    }
    else if ($(".works-container").length>0) {
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var bottom_of_object0 = $("#works-box1").offset().top + 150;
        if( bottom_of_window > bottom_of_object0 ){
            $("#works-box1").addClass("draw")
            $("#works-container1 h1, #works-container1 h2").addClass("show");
            var bottom_of_object1 = $("#works-box2").offset().top + 150;
            if( bottom_of_window > bottom_of_object1 ){
                $("#works-box1").addClass("btb-active")
                $("#works-container2 h1, #works-container2 h2").addClass("show");
                $("#works-box2").addClass("draw")
                var bottom_of_object2 = $("#works-box3").offset().top + 150;
                if( bottom_of_window > bottom_of_object2 ){
                    $("#works-box2").addClass("btb-active")
                    $("#works-container3 h1, #works-container3 h2").addClass("show");
                    $("#works-box3").addClass("draw")
                    var bottom_of_object3 = $("#works-bottom").offset().top+$("#works_bottom").outerHeight();
                    if( bottom_of_window > bottom_of_object3 ){
                        $("#works-bottom, #works-bottom h1, #works-bottom h2, #works-bottom button").addClass("show");
                    };
                };
            };
        };
     }
});

