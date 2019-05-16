function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
 }


function validate(){
if(document.myForm.username.value ==""){
document.myForm.username.focus();
alert("Please fill Name");
return false;
 }
if(document.myForm.email.value ==""){
document.myForm.email.focus();
alert("Please fill email");
return false;
}
if(document.myForm.country.value =="-1"){
document.myForm.country.focus();
alert("Please select country");
return false;
}
if(document.myForm.mobile.value==""||document.myForm.mobile.value.length!=10){
document.myForm.mobile.focus();
alert("Your phone isn't 10 digit number !");
return false;
 }

return true;
}


function myFuncton() {
  var dos = document.getElementById("dos");
  var moeText = document.getElementById("moe");
  var bnText = document.getElementById("Bn");

  if (dos.style.display === "none") {
    dos.style.display = "inline";
    bnText.innerHTML = "Read more"; 
    moeText.style.display = "none";
  } else {
    dos.style.display = "none";
    bnText.innerHTML = "Read less"; 
    moeText.style.display = "inline";
  }
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
