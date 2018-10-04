if(navigator.userAgent.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
    $(".testing").remove();
    $(".testing-mobile").css({"display":"block"});
 } else {
 
}
$(".navbar-nav a:nth-child(5)").addClass("color");
$(".testing-first-bottom button").click(function() {
      $.ajax({
         url: "/testing/firsttest",
         method: "get"
     })
     
}); 

$(".testing-top-box.second").click(function() {
 var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
 var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
 var regUrl = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
 var brandname = document.getElementById('brandname').value;
 var name = document.getElementById('name').value;
 var phone_number = document.getElementById('phone-number').value;
 var email = document.getElementById('email').value;
 var url = document.getElementById('url').value;
 phone_number = phone_number.split('-').join('');
 if (brandname == '') {
         alertify.alert()
         .setting({
             'frameless':false,
             'title':"회사명 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '회사명은 필수 입력 사항입니다.',
             'label':'Ok'
             
         }).show();
        
 }
 else if (name == '') {
         alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자명 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '담당자명은 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
 else if (phone_number == '') {
         alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자 연락처 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '담당자 연락처는 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
//  <%# else if (!regPhone.test(phone_number)) {
//      alertify.alert()
//          .setting({
//              'frameless':false,
//              'title':"담당자 연락처 작성 오류",
//              'closableByDimmer':true,
//              'closable': false,
//              modal: false,
//              transition:'pulse',
//              'pinnable': false,
//              message: '올바른 전화번호를 입력하세요.',
//              'label':'Ok'
//          }).show();
//  } %>
 else if (email == '') {
     alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자 이메일 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '담당자 이메일은 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
 else if (!re.test(email)) {
             alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자 이메일 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '올바른 이메일 주소를 입력하세요.',
             'label':'Ok'
         }).show();
 }
 else if (url == '') {
     alertify.alert()
         .setting({
             'frameless':false,
             'title':"URL 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: 'URL은 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
//  <%# else if (!regUrl.test(url)) {
//              alertify.alert()
//          .setting({
//              'frameless':false,
//              'title':"URL 작성 오류",
//              'closableByDimmer':true,
//              'closable': false,
//              modal: false,
//              transition:'pulse',
//              'pinnable': false,
//              message: '올바른 URL 주소를 입력하세요.',
//              'label':'Ok'
//          }).show();
//  } %>
 else {
     $("#first-form").attr({"action":"/testing/second"})
     document.getElementById("first-form").submit();
 }
})
$(".testing-top-box.third").click(function() {
 var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
 var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
 var regUrl = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
 var brandname = document.getElementById('brandname').value;
 var name = document.getElementById('name').value;
 var phone_number = document.getElementById('phone-number').value;
 var email = document.getElementById('email').value;
 var url = document.getElementById('url').value;
 phone_number = phone_number.split('-').join('');
 if (brandname == '') {
         alertify.alert()
         .setting({
             'frameless':false,
             'title':"회사명 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '회사명은 필수 입력 사항입니다.',
             'label':'Ok'
             
         }).show();
         
 }
 else if (name == '') {
         alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자명 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '담당자명은 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
 else if (phone_number == '') {
         alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자 연락처 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '담당자 연락처는 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
//  <%# else if (!regPhone.test(phone_number)) {
//      alertify.alert()
//          .setting({
//              'frameless':false,
//              'title':"담당자 연락처 작성 오류",
//              'closableByDimmer':true,
//              'closable': false,
//              modal: false,
//              transition:'pulse',
//              'pinnable': false,
//              message: '올바른 전화번호를 입력하세요.',
//              'label':'Ok'
//          }).show();
//  } %>
 else if (email == '') {
     alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자 이메일 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '담당자 이메일은 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
 else if (!re.test(email)) {
             alertify.alert()
         .setting({
             'frameless':false,
             'title':"담당자 이메일 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: '올바른 이메일 주소를 입력하세요.',
             'label':'Ok'
         }).show();
 }
 else if (url == '') {
     alertify.alert()
         .setting({
             'frameless':false,
             'title':"URL 작성 오류",
             'closableByDimmer':true,
             'closable': false,
             modal: false,
             transition:'pulse',
             'pinnable': false,
             message: 'URL은 필수 입력 사항입니다.',
             'label':'Ok'
         }).show();
 }
//  <%# else if (!regUrl.test(url)) {
//              alertify.alert()
//          .setting({
//              'frameless':false,
//              'title':"URL 작성 오류",
//              'closableByDimmer':true,
//              'closable': false,
//              modal: false,
//              transition:'pulse',
//              'pinnable': false,
//              message: '올바른 URL 주소를 입력하세요.',
//              'label':'Ok'
//          }).show();
//  } %>
 else {
     if (getUrlVars().includes("%5Bsecond-step%5D")) {
         $("#first-form").attr({"action":"/testing/third"})
         document.getElementById("first-form").submit();
     }
     else {
         if (getUrlVars().includes("%5Bpurpose%5D%5Bpurpose1%5D%5Bpurpose-is%5D")) {
             alertify.alert()
                 .setting({
                     'frameless':false,
                     'title':"순서 오류",
                     'closableByDimmer':true,
                     'closable': false,
                     modal: false,
                     transition:'pulse',
                     'pinnable': false,
                     message: '[테스트 정보] 필수 입력 사항 점검을 위해 [테스터 정보 입력] 단계로 이동합니다.',
                     'label':'Ok',
                     'onok':function() {
                         $("#first-form").attr({"action":"/testing/second"})
                         document.getElementById("first-form").submit();
                     }
                 }).show();
         }
         else {
             $("#first-form").attr({"action":"/testing/second"})
             document.getElementById("first-form").submit();
         }
     }
 }
 function getUrlVars()
 {
     var vars = [], hash;
     var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
     for(var i = 0; i < hashes.length; i++)
     {
         hash = hashes[i].split('=');
         vars.push(hash[0]);
         vars[hash[0]] = hash[1];
     }
     return vars;
 }
 
})
function OnCheckPhone(oTa) { 
 var oForm = oTa.form ; 
 var sMsg = oTa.value ; 
 var onlynum = "" ; 
 var imsi=0; 
 onlynum = RemoveDash2(sMsg);  //하이픈 입력시 자동으로 삭제함 
 onlynum =  checkDigit(onlynum);  // 숫자만 입력받게 함 
 var retValue = ""; 
 if(event.keyCode != 12 ) { 
     if(onlynum.substring(0,2) == 02) {  // 서울전화번호일 경우  10자리까지만 나타나교 그 이상의 자리수는 자동삭제 
             if (GetMsgLen(onlynum) <= 1) oTa.value = onlynum ; 
             if (GetMsgLen(onlynum) == 2) oTa.value = onlynum + "-"; 
             if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,3) ; 
             if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,4) ; 
             if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) ; 
             if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) ; 
             if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,7) ; ; 
             if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,8) ; 
             if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,9) ; 
             if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
             if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
             if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
     } 
     if(onlynum.substring(0,2) == 05 ) {  // 05로 시작되는 번호 체크 
         if(onlynum.substring(2,3) == 0 ) {  // 050으로 시작되는지 따지기 위한 조건문 
                 if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
                 if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
                 if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
                 if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
                 if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
                 if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
                 if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,9) ; ; 
                 if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,10) ; 
                 if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,11) ; 
                 if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
                 if (GetMsgLen(onlynum) == 13) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
       } else { 
             if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
             if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
             if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
             if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
             if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
             if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
             if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ; ; 
             if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
             if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
             if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
             if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
       } 
     } 
     if(onlynum.substring(0,2) == 03 || onlynum.substring(0,2) == 04  || onlynum.substring(0,2) == 06  || onlynum.substring(0,2) == 07  || onlynum.substring(0,2) == 08 ) {  // 서울전화번호가 아닌 번호일 경우(070,080포함) 
             if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
             if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
             if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
             if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
             if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
             if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
             if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ; ; 
             if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
             if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
             if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
             if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 

     } 
     if(onlynum.substring(0,2) == 01) {  //휴대폰일 경우 
         if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
         if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
         if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
         if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
         if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
         if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
         if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,8) ; 
         if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
         if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
         if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
         if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
     } 

     if(onlynum.substring(0,1) == 1) {  // 1588, 1688등의 번호일 경우 
         if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
         if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
         if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
         if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
         if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
         if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
         if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
         if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
         if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
         if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
     } 
 } 
} 
function RemoveDash2(sNo) { 
var reNo = "" 
for(var i=0; i<sNo.length; i++) { 
 if ( sNo.charAt(i) != "-" ) { 
 reNo += sNo.charAt(i) 
 } 
} 
return reNo 
} 
function GetMsgLen(sMsg) { // 0-127 1byte, 128~ 2byte 
var count = 0 
 for(var i=0; i<sMsg.length; i++) { 
     if ( sMsg.charCodeAt(i) > 127 ) { 
         count += 2 
     } 
     else { 
         count++ 
     } 
 } 
return count 
} 
function checkDigit(num) { 
 var Digit = "1234567890"; 
 var string = num; 
 var len = string.length 
 var retVal = ""; 

 for (i = 0; i < len; i++) 
 { 
     if (Digit.indexOf(string.substring(i, i+1)) >= 0) 
     { 
         retVal = retVal + string.substring(i, i+1); 
     } 
 } 
 return retVal; 
} 
