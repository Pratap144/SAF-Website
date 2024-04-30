const preloader = document.getElementById("preloader");

function preload() {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-99999";
  document.body.classList.remove("noScroll");
  preloader.style.visibility = "hidden";
}
