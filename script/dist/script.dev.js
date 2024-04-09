"use strict";

var hamburger = document.querySelector(".wrapper-hamburger");
var nav = document.querySelector("nav");
var state = false;
hamburger.addEventListener("click", function () {
  if (state == true) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
    state = false;
  } else {
    hamburger.classList.add("is-active");
    nav.classList.add("is-open");
    state = true;
  }
});

function ControlWidth() {
  var sirka = window.innerWidth;
  {
    hamburger.classList.remove("is-active"); //Odebere classu s hamburgeru .is-active

    nav.classList.remove("is-open"); //Odebere classu s navigace

    state = false; //nastavíme zpět na defaultní hodnotu state pro kontrolu pro hamburger
  }
}

window.addEventListener('resize', ControlWidth);