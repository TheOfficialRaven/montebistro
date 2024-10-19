///////////////////////////////////////////NavBar///////////////////////////////////////////////
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");
  const homeContent = document.querySelector(".home-content");
  const links = document.querySelector(".navigation");
  const barsImg = document.querySelector(".bar");
  const logoImage = document.getElementById("logo-image");

  function openNav() {
    nav.style.left = "0%";
    bar.src = "X.png";
    homeContent.style.left = "30%";
  }

  function closeNav() {
    nav.style.left = "-100%";
    bar.src = "Bars.png";
    homeContent.style.left = "2.5%";
  }

  function isNavOpen() {
    return nav.style.left === "0%";
  }

  bar.addEventListener("click", () => {
    if (isNavOpen()) {
      closeNav();
    } else {
      openNav();
    }
  });

  links.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A") {
      closeNav();
    }
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      barsImg.style.display = "none";
      nav.classList.add("scrolled");
      if (isNavOpen()) {
        closeNav();
      }
    } else {
      barsImg.style.display = "block";
      nav.classList.remove("scrolled");
    }
  });

///////////////////////////////////////////Logo Home btn ////////////////////////////////////////////    
  logoImage.addEventListener("click", function () {
    window.location.href = "#"; // Replace with your actual home page URL
  });

    
    
//////////////////////////////////////////Home content from left //////////////////////////////////
    
  setTimeout(() => {
    homeContent.classList.remove("initial-position");
    homeContent.style.left = "38px";
  }, 500);
});


