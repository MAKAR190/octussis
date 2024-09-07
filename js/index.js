"use strict";

const menuButton = document.getElementById("menu-button");
const navbarSolidBg = document.getElementById("navbar-solid-bg");

menuButton.addEventListener("click", function () {
  navbarSolidBg.classList.toggle("hidden");
});


VANTA.HALO({
  el: "#main",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x30ff82,
});
