$(".testing-top-box.first").click(function() {
    $("#third-form").attr({"action":"/testing/first"})
    document.getElementById("third-form").submit();
})
$(".testing-top-box.second").click(function() {
    $("#third-form").attr({"action":"/testing/second"})
    document.getElementById("third-form").submit();
})

if(navigator.userAgent.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
$(".testing").remove();
$(".testing-mobile").css({"display":"block"});
}
else {
}
var submitted = false;
var authe = true;
$(".navbar-nav a:nth-child(5)").addClass("color");
$("html, body").scrollTop($(".testing-top").offset().top)
$("#submit").click(function() {
if ($(".agree").is(":checked")) {
    if (submitted== false) {
        if (authe) {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxxu2UVy6xoxVgoYlsPxHDLRllwbPdfKV0CZRwSUQ2HrJ8Oibw_/exec",
                type: 'POST',
                data: $(".third-form").serialize(),
                beforeSend: function(e) {
                    authe = false;
                    $(".testing-third-loading").css({"display":"flex"});
                },
                error : function(error) {
                    $(".testing-third-loading").css({"display":"none"});
                    authe = true;
                },
                success : function(data) {
                    $(".testing-third-loading").css({"display":"none"});
                    $(".submit").css({"display":"block"});
                    $.ajax({
                        url: "/testing/submit",
                        type: 'POST',
                        data: $("#third-form").serialize(),
                        beforeSend: function(e) {
                            
                        },
                        error : function(error) {
                            $(".testing-third-loading").css({"display":"none"});
                            authe = true;
                        },
                        success : function(data) {
                            $(".testing-third-loading").css({"display":"none"});
                            $(".submit").css({"display":"block"});
                            submitted = true;
                        },
                        fail: function() {
                            authe = true;
                            $(".testing-third-loading").css({"display":"none"});
                        },
                        complete : function() {  
                        }
                    })        
                },
                fail: function() {
                    authe = true;
                    $(".testing-third-loading").css({"display":"none"});
                },
                complete : function() {  
                }
            })        
        }
    }
    else {
         alertify.alert()
        .setting({
            'frameless':false,
            'title':"제출 오류",
            'closableByDimmer':true,
            'closable': false,
            modal: false,
            transition:'pulse',
            'pinnable': false,
            message: '이미 제출했습니다.',
            'label':'Ok'
    }).show();
    }
    
}  
else {
     alertify.alert()
        .setting({
            'frameless':false,
            'title':"이용약관 동의",
            'closableByDimmer':true,
            'closable': false,
            modal: false,
            transition:'pulse',
            'pinnable': false,
            message: '이용약관을 동의해야 제출할 수 있습니다.',
            'label':'Ok'
    }).show();
}  
});
$("#modify").click(function() {
$("#third-form").attr({"action":"/testing/first"})
document.getElementById("third-form").submit();
});
$(document).on('click', '.submit button', function(){  
$(".redirect").submit();
})