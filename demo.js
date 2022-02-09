function chk_control(str) {
if(str=='dsb'){document.getElementById('ck1').disabled=true;}
else {document.getElementById('ck1').disabled=false;}
}


function myFunction() {
  document.getElementById("myCheck").disabled = true;
}

element = document.getElementById('selectPets87516');
if (element != null) {
  str = element.value;
}
else console.log("null element")

{
const selectPets87516 = document.getElementById ('selectPets87516');
const showBox57625 = document.getElementById ('showBox57625');

const f_update = (() => {
showBox57625 .textContent = ( selectPets87516) .value;
});

selectPets87516 .addEventListener ('input', f_update , false);

f_update();
}


{
const selectAni08005 = document.getElementById ('selectAni08005');
const showBox91970 = document.getElementById ('showBox91970');

const f_update2 = (() => {
 const selectedValues = Array.from ( selectAni08005.options ) .filter( (x => x.selected) ) . map( (x => x.value));
 showBox91970 . textContent = selectedValues .toString();
});

selectAni08005 .addEventListener ('input', f_update2 , false);

f_update2();
}


// <script language=JavaScript>
// <!--
// var caution = false
// function setCookie(name, value, expires, path, domain, secure){
// var curCookie = name + "=" + escape(value) +
// ((expires) ? "; expires=" + expires.toGMTString() : "") +
// ((path) ? "; path=" + path : "") +
// ((domain) ? "; domain=" + domain : "") +
// ((secure) ? "; secure" : "")
// if (!caution || (name + "=" + escape(value)).length<= 4000)
// document.cookie = curCookie
// else
// if (confirm("Cookie exceeds 4KB and will be cut!"))
// document.cookie = curCookie
// }
// function getCookie(name) {
// var prefix = name + "="
// var cookieStartIndex = document.cookie.indexOf(prefix)
// if (cookieStartIndex == -1)
// return null
// var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex+ prefix.length)
// if (cookieEndIndex == -1)
// cookieEndIndex = document.cookie.length
// return unescape(document.cookie.substring(cookieStartIndex +prefix.length, cookieEndIndex))
// }
// function deleteCookie(name, path, domain) {
// if (getCookie(name)) {
// document.cookie = name + "=" +
// ((path) ? "; path=" + path : "") +
// ((domain) ? "; domain=" + domain : "") +
// "; expires=Thu, 01-Jan-70 00:00:01 GMT"
// }
// }
// function fixDate(date) {
// var base = new Date(0)
// var skew = base.getTime()
// if (skew > 0)
// date.setTime(date.getTime() - skew)
// }
// var now = new Date()
// fixDate(now)
// now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
// var visits = getCookie("counter")
// if (!visits)
// visits = 1
// else
// visits = parseInt(visits) + 1
// setCookie("counter", visits, now)
// document.write("您是第" + visits + "位访问本的！")
// // -->
// </script>
