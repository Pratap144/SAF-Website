const preloader = document.getElementById("preloader");

function preload() {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-99999";
  document.body.classList.remove("noScroll");
  preloader.style.visibility = "hidden";
  preloader.children.visibility = "hidden";
}

document.body.onload = preload();

const menuToggle = document.getElementById("navbarNavDropdown");
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {
  toggle: false,
});

document.addEventListener("click", (event) => {
  if (menuToggle.contains(event.target)) {
    return;
  }

  if (menuToggle.classList.contains("show")) {
    bsCollapse.toggle();
  }
});

// const bannerClose = document.getElementById("bannerClose");
// const banner = document.getElementById("banner");

document.getElementById("bannerClose").addEventListener("click", (e) => {
  document.getElementById("banner").classList.add("visually-hidden");
});

// C O L O R   P I C K E R   S C R I P T
// document
//   .getElementById("colorPickerBtn")
//   .addEventListener("click", function () {
//     window.scrollTo(0, 0);

//     const colors = [
//       "#bed7dc",
//       "#d3f8e2",
//       "#e4c1f9",
//       "#f694c1",
//       "#ede7b1",
//       "#a9def9",
//       "#d4e09b",
//     ];

//     const colorPickerContainer = document.createElement("div");
//     colorPickerContainer.id = "colorPickerContainer";
//     colorPickerContainer.style.position = "absolute";
//     colorPickerContainer.style.zIndex = "9999";
//     colorPickerContainer.style.backgroundColor = "#fff";
//     colorPickerContainer.style.border = "1px solid #ccc";
//     colorPickerContainer.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";

//     colors.forEach((color) => {
//       const colorButton = document.createElement("button");
//       colorButton.style.backgroundColor = color;
//       colorButton.style.width = "30px";
//       colorButton.style.height = "30px";
//       colorButton.style.margin = "5px";
//       colorButton.style.borderRadius = "50%"; // Make the color button circular
//       colorButton.addEventListener("click", function () {
//         const color = this.style.backgroundColor;
//         document.documentElement.style.setProperty("--primary-color", color);
//         localStorage.setItem("primaryColor", color);
//         colorPickerContainer.remove(); // Remove the color picker container after a color is selected
//       });
//       colorPickerContainer.appendChild(colorButton);
//     });

//     // Position the color picker container below the button
//     const buttonRect = this.getBoundingClientRect();
//     colorPickerContainer.style.left = buttonRect.left + "px";
//     colorPickerContainer.style.top = buttonRect.bottom + "px";

//     document.body.appendChild(colorPickerContainer);
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const savedColor = localStorage.getItem("primaryColor");
//   if (savedColor) {
//     document.documentElement.style.setProperty("--primary-color", savedColor);
//   } else {
//     document.documentElement.style.setProperty("--primary-color", "#bed7dc");
//   }
// });
// color pricker script

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
    document.getElementById("banner").classList.remove("visually-hidden");
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const sideNav = document.getElementById("sideNav");
const overview = document.getElementById("overview");
const nav = document.getElementById("headerNav");
const scrollThreshold = overview.offsetTop;
const sideNavWidth = sideNav.offsetWidth;

window.addEventListener("scroll", function () {
  if (window.scrollY > scrollThreshold) {
    sideNav.style.position = "fixed";
    sideNav.style.top = nav.offsetHeight + 48 + "px";
    sideNav.style.width = sideNavWidth + "px";
  } else {
    sideNav.style.position = "static";
    sideNav.style.top = "";
    sideNav.style.width = "auto";
  }
});
