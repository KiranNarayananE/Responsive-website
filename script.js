function view(){
 document.getElementsByClassName('btn-4')[0].style.display="block"
}
function noview(){
 document.getElementsByClassName('btn-4')[0].style.display="none"
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}
function topFunction() {
document.documentElement.scrollTop=0;
}