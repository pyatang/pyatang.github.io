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
