
function burger() {
  const navbar = document.getElementById('myTopnav');

  function openMobileNavbar() {
    navbar.classList.add("opened");
  }
  
  function closeMobileNavbar() {
    navbar.classList.remove("opened");
  }
  
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
}