 document.querySelector("#icon-close").style.display = "none";
 var  $hamburgerIcon = document.getElementById("icon-hamburger");
 var  $closeIconn = document.getElementById("icon-close");
function openNav() {
  document.getElementById("myNav").style.width = "65%";
  document.body.classList.add('no-scroll');
  
  $hamburgerIcon.style.display = 'none';
  $closeIconn.style.display = 'block';

  // $hamburgerIcon.classList.toggle.remove("hide");

}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.body.classList.remove('no-scroll');
  $hamburgerIcon.style.display = 'block';
  $closeIconn.style.display = 'none';
  
 } 
