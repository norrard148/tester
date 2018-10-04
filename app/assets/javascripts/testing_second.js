$(".testing-help-purpose-box-tab div:first-child").click(function() {
    $(this).addClass("focus")
    $(".testing-help-purpose-box-tab div:last-child").removeClass("focus")
    $(".testing-help-purpose-box-left").css({"display":"flex"})
    $(".testing-help-purpose-box-right").css({"display":"none"})
})
$(".testing-help-purpose-box-tab div:last-child").click(function() {
    $(this).addClass("focus")
    $(".testing-help-purpose-box-tab div:first-child").removeClass("focus")
    $(".testing-help-purpose-box-left").css({"display":"none"})
    $(".testing-help-purpose-box-right").css({"display":"flex"})
})
console.log("Ss")
if(navigator.userAgent.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
   $(".testing").remove();
   $(".testing-mobile").css({"display":"block"});
} else {
}
$(".navbar-nav a:nth-child(5)").addClass("color");
$("#purpose-is").focus();
$("html, body").scrollTop($(".testing-top").offset().top)
$("#accordionExample1 input").attr("disabled", false);
$("#accordionExample1 .ui.dropdown").removeClass("disabled");
$(document).on('click', '.card-delete', function(){   
    $(this).parent().parent().find(".card-body-2").each(function(v) {
        if (v == 2) {
            var a = $(this).parent().parent().parent().attr("id");
            var purpose_number = a.replace(/[^0-9]/g,"");
            $(this).find(".card-body-2-target h1").text(`타겟 2`)
            $(this).find(".target").attr({"name":`[purpose][purpose${purpose_number}][exp2][target]`})
            $(this).find(".detail").attr({"name":`[purpose][purpose${purpose_number}][exp2][detail]`})
            $(this).find(".testernumber select").attr({"name":`[purpose][purpose${purpose_number}][exp2][testernumber]`})
            $(this).find(".sex").attr({"name":`[purpose][purpose${purpose_number}][exp2][sex]`})
            $(this).find(".age select").attr({"name":`[purpose][purpose${purpose_number}][exp2][age]`})
            $(this).find(".age2 select").attr({"name":`[purpose][purpose${purpose_number}][exp2][age2]`})
            $(this).find(".question1").attr({"name":`[purpose][purpose${purpose_number}][exp2][question1]`})
            $(this).find(".question2").attr({"name":`[purpose][purpose${purpose_number}][exp2][question2]`})
            $(this).find(".question3").attr({"name":`[purpose][purpose${purpose_number}][exp2][question3]`})
            $(this).find(".question4").attr({"name":`[purpose][purpose${purpose_number}][exp2][question4]`})
        }
    });
    $(this).parent().remove();
});
$(document).on('click', '.purpose-add', function(){   
    var purpose_count = document.getElementsByClassName("accordion").length;
    if (purpose_count != 3 ) {
        $(".testing-third-loading").css({"display":"flex"});
        $.ajax ({
            url: "/testing/second1",
            method: "get",
            data: {"purpose_count" : purpose_count}
        });
    }
    else {
        $(".testing-help-purpose.purpose").css({"display":"block"});
    }
});
$(document).on('click', '.testing-second-top-top button', function(){  
    $(".testing-help-purpose.help").css({"display":"block"});
});
$(document).on('click', '.testing-help-purpose-box button', function(){  
    $(".testing-help-purpose").css({"display":"none"});
})
$(document).on('click', '.card-button', function(){  
    $(".card-button").not(this).parent().parent().parent().find(".collapse").removeClass("show")
    $(".card-button").not(this).attr({"aria-expanded":"false"})
})
$(document).on('focus', '.purpose-is', function(){  
    $(".purpose-is").not(this).parent().parent().parent().parent().find(".collapse").removeClass("show")
    $(".purpose-is").not(this).parent().parent().find(".card-button").attr({"aria-expanded":"false"})
    $(this).parent().parent().parent().parent().find(".collapse").addClass("show")
    $(this).parent().parent().find(".card-button").attr({"aria-expanded":"true"})
        $('html, body').animate({scrollTop : $(this).parent().parent().parent().parent().offset().top}, 000);
});
$(document).on('click', '.card-submit a', function(){   
    var a = $(this).parent().parent().parent().attr("id");
    var purpose_number = a.replace(/[^0-9]/g,"");
    var target_count = $(`#accordionExample${purpose_number} .card-body-2`).length;
    var purpose_count = document.getElementsByClassName("accordion").length;
    if (target_count != 3 ) {
        $(".testing-third-loading").css({"display":"flex"});
        $.ajax ({
            url: "/testing/second2",
            method: "get",
            data: {"target_count" : target_count, "purpose_number" : purpose_number, "purpose_count": purpose_count}
        });
    }
    else {
        alertify.alert()
        .setting({
            'frameless':false,
            'title':"타겟 추가 제한",
            'closableByDimmer':true,
            'closable': false,
            modal: false,
            transition:'pulse',
            'pinnable': false,
            message: '타겟은 한 목표당 최대 3개만 추가할 수 있습니다.',
            'label':'Ok'
        }).show();
    }
});

setInterval(function () {
    $.ajax({
        url: "/testing/second3",
        method: "get",
        data: {"purpose_count":$(".accordion").length}
    })

}, 1000);

function purpose_2_test(a) {
    var element = $("#accordionExample1");
    var testernumber=0;
    var no_error = true;
    if (
    element.find(".purpose-is").val() =='' || Number(element.find(".minute option:selected").val()) + Number(element.find(".second option:selected").val()) == 0
    ) {
        alertify.alert()
        .setting({
            'frameless':false,
            'title':"작성 오류",   
            'closableByDimmer':true,
            'closable': false,
            modal: false,
            transition:'pulse',
            'pinnable': false,
            message: '이전 목표 필수 입력 사항을 모두 입력하세요.',
            'label':'Ok'
        }).show();
        a.preventDefault();
        no_error = false;
    }
    else {
        $("#accordionExample1 .card-body-2").each(function (i,e) {
            testernumber += Number($(this).find(".testernumber option:selected").val());
            if  ($(this).find(".target").val() == '') {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"작성 오류",
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: '이전 목표 필수 입력 사항을 모두 입력하세요.',
                    'label':'Ok'
                }).show();
                a.preventDefault();
                no_error = false;
                return false;
            }
            else if  ($(this).find(".testernumber option:selected").val() == 0 ) {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"작성 오류",
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: `이전 목표 필수 입력 사항을 모두 입력하세요.`,
                    'label':'Ok'
                }).show(); 
                no_error = false;
                return false;
            } 
        });
        if (no_error) {
            return true;
        }
    }
}
$(document).on("click","#accordionExample2 .ui.dropdown, #accordionExample2 input", function(a) {
   purpose_2_test(a);
})
$(document).on("keydown","#accordionExample2 input", function(a) {
    purpose_2_test(a);
   
})

function purpose_3_test(a) {
    var element = $("#accordionExample2");
    var testernumber=0;
    var no_error = true;
    if (
    element.find(".purpose-is").val() =='' || Number(element.find(".minute option:selected").val()) + Number(element.find(".second option:selected").val()) == 0
    ) {
        alertify.alert()
        .setting({
            'frameless':false,
            'title':"작성 오류",   
            'closableByDimmer':true,
            'closable': false,
            modal: false,
            transition:'pulse',
            'pinnable': false,
            message: '이전 목표 필수 입력 사항을 모두 입력하세요.',
            'label':'Ok'
        }).show();
        a.preventDefault();
        no_error = false;
    }
    else {
        $("#accordionExample2 .card-body-2").each(function (i,e) {
            testernumber += Number($(this).find(".testernumber option:selected").val());
            if  ($(this).find(".target").val() == '') {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"작성 오류",
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: '이전 목표 필수 입력 사항을 모두 입력하세요.',
                    'label':'Ok'
                }).show();
                a.preventDefault();
                no_error = false;
                return false;
            }
            else if  ($(this).find(".testernumber option:selected").val() == 0 ) {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"작성 오류",
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: `이전 목표 필수 입력 사항을 모두 입력하세요.`,
                    'label':'Ok'
                }).show(); 
                no_error = false;
                return false;
            } 
        });
        if (no_error) {
            return true;
        }
    }
}
 $(document).on("click","#accordionExample3 .ui.dropdown, #accordionExample3 input", function(a) {
   if (purpose_2_test(a)) {
        purpose_3_test(a)
   }
})
$(document).on("keydown","#accordionExample3 input", function(a) {
   if (purpose_2_test(a)) {
        purpose_3_test(a)
   }
})
$(".testing-top-box.first").click(function() {
        $("#second-form").attr({"action":"/testing/first"})
        document.getElementById("second-form").submit();
})
$(".testing-top-box.third").click(function() {
        function purpose_test(a) {
        var element = $(`#accordionExample${a}`);
        var testernumber=0;
        var no_error = true;
        function input_check() {
            if (a != 1) {
                var input_check = false;
                element.find("input").not('input[type="radio"]').each(function(c) { if ($(this).val() !=''){console.log($(this).val()); input_check = true; return false}})
                if (input_check == true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        if (input_check())
        {
            if (element.find(".purpose-is").val() =='')
            {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"목표 작성 오류",   
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: `[목표 ${a}]의 목표는 필수 작성 사항입니다.`,
                    'label':'Ok'
                }).show();
                no_error = false;
            }
            else if ( Number(element.find(".minute option:selected").val())*60 + Number(element.find(".second option:selected").val()) == 0) {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"예상 시간 선택 오류",   
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: `[목표 ${a}]의 예상 시간은 필수 선택 사항입니다.`,
                    'label':'Ok'
                }).show();
                no_error = false;
            }
            else {
                $(`#accordionExample${a} .card-body-2`).each(function(b) {
                    testernumber += Number($(this).find(".testernumber option:selected").val());
                    if  ($(this).find(".target").val() == '') {
                        alertify.alert()
                        .setting({
                            'frameless':false,
                            'title':"타겟명 작성 오류",   
                            'closableByDimmer':true,
                            'closable': false,
                            modal: false,
                            transition:'pulse',
                            'pinnable': false,
                            message:`[목표 ${a}] [타겟 ${b+1}]의 타겟명은 필수 작성 사항입니다 .`,
                            'label':'Ok'
                        }).show();
                        no_error = false;
                        return false;
                    }
                    else if  ($(this).find(".testernumber option:selected").val() == 0 ) {
                        alertify.alert()
                        .setting({
                            'frameless':false,
                            'title':"작성 오류",
                            'closableByDimmer':true,
                            'closable': false,
                            modal: false,
                            transition:'pulse',
                            'pinnable': false,
                            message: `[목표 ${a}] [타겟 ${b+1}]의 테스터수는 1명 이상이어야 합니다.`,
                            'label':'Ok'
                        }).show(); 
                        no_error = false;
                        return false;
                    } 
                    else if (testernumber > 5 ) {
                        alertify.alert()
                        .setting({
                        'frameless':false,
                        'title':"테스터수 선택 오류",
                        'closableByDimmer':true,
                        'closable': false,
                        modal: false,
                        transition:'pulse',
                        'pinnable': false,
                        message: `[목표 ${a}]의 총 테스터수가 5명을 초과했습니다.`,
                        'label':'Ok'
                        }).show();
                        no_error = false;
                        return false;
                    }  
                });
                if (no_error) {
                    return true;
                }
            }
        }
        else {
            return true;
        }    
    }
        
    if (purpose_test(1)) {
        if (purpose_test(2)) {
            if (purpose_test(3)) {
                $("#second-form").attr({"action":"/testing/third"})
                document.getElementById("second-form").submit();
            }
        }
    }
})

$(document).on("click",".testernumber.ui.dropdown .item", function() {
    var testernumber = 0;
    $(this).parent().parent().parent().parent().parent().parent().parent().find(".card-body-2").each(function(a) {
        testernumber += Number($(this).find(".testernumber option:selected").val());
      if (testernumber > 5 ) {
            alertify.alert()
            .setting({
            'frameless':false,
            'title':"테스터수 선택 오류",
            'closableByDimmer':true,
            'closable': false,
            modal: false,
            transition:'pulse',
            'pinnable': false,
            message: `한 목표당 최대 5명의 테스터수를 선택할 수 있습니다.`,
            'label':'Ok'
            }).show();
            no_error = false;
            return false;
        }  
    });
})

$("#complete").click(function() {
    
    function purpose_test(a) {
        var element = $(`#accordionExample${a}`);
        var testernumber=0;
        var no_error = true;
        function input_check() {
            if (a != 1) {
                var input_check = false;
                element.find("input").not('input[type="radio"]').each(function(c) { if ($(this).val() !=''){console.log($(this).val()); input_check = true; return false}})
                if (input_check == true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        if (input_check())
        {
            if (element.find(".purpose-is").val() =='')
            {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"목표 작성 오류",   
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: `[목표 ${a}]의 목표는 필수 작성 사항입니다.`,
                    'label':'Ok'
                }).show();
                no_error = false;
            }
            else if ( Number(element.find(".minute option:selected").val())*60 + Number(element.find(".second option:selected").val()) == 0) {
                alertify.alert()
                .setting({
                    'frameless':false,
                    'title':"예상 시간 선택 오류",   
                    'closableByDimmer':true,
                    'closable': false,
                    modal: false,
                    transition:'pulse',
                    'pinnable': false,
                    message: `[목표 ${a}]의 예상 시간은 필수 선택 사항입니다.`,
                    'label':'Ok'
                }).show();
                no_error = false;
            }
            else {
                $(`#accordionExample${a} .card-body-2`).each(function(b) {
                    testernumber += Number($(this).find(".testernumber option:selected").val());
                    if  ($(this).find(".target").val() == '') {
                        alertify.alert()
                        .setting({
                            'frameless':false,
                            'title':"타겟명 작성 오류",   
                            'closableByDimmer':true,
                            'closable': false,
                            modal: false,
                            transition:'pulse',
                            'pinnable': false,
                            message:`[목표 ${a}] [타겟 ${b+1}]의 타겟명은 필수 작성 사항입니다 .`,
                            'label':'Ok'
                        }).show();
                        no_error = false;
                        return false;
                    }
                    else if  ($(this).find(".testernumber option:selected").val() == 0 ) {
                        alertify.alert()
                        .setting({
                            'frameless':false,
                            'title':"작성 오류",
                            'closableByDimmer':true,
                            'closable': false,
                            modal: false,
                            transition:'pulse',
                            'pinnable': false,
                            message: `[목표 ${a}] [타겟 ${b+1}]의 테스터수는 1명 이상이어야 합니다.`,
                            'label':'Ok'
                        }).show(); 
                        no_error = false;
                        return false;
                    } 
                    else if (testernumber > 5 ) {
                        alertify.alert()
                        .setting({
                        'frameless':false,
                        'title':"테스터수 선택 오류",
                        'closableByDimmer':true,
                        'closable': false,
                        modal: false,
                        transition:'pulse',
                        'pinnable': false,
                        message: `[목표 ${a}]의 총 테스터수가 5명을 초과했습니다.`,
                        'label':'Ok'
                        }).show();
                        no_error = false;
                        return false;
                    }  
                });
                if (no_error) {
                    return true;
                }
            }
        }
        else {
            return true;
        }    
    }

    if (purpose_test(1)) {
        if (purpose_test(2)) {
            if (purpose_test(3)) {
                $("#second-form").attr({"action":"/testing/third"})
                document.getElementById("second-form").submit();
            }
        }
    }
});  
