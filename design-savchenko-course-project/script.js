//Acordion

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

//Main Menu

const main_menu = document.querySelectorAll(".menu_catalog");

main_menu.forEach((menu_catalog) => {
  menu_catalog.addEventListener("click", () => {
    menu_catalog.classList.toggle("active");
  });
});

//Burger Menu

const menu_btn = document.querySelector(".nav__menu-burger-btn");
const mobile_menu = document.querySelector(".mobile__nav-item");
const body = document.querySelector("body");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  body.classList.toggle("bg-black");
});

//filterMenu

let filterMenu = document.getElementById("filterMenu");

function myFunction() {
  filterMenu.classList.toggle("open-filter");
  const filterMenuHeight = filterMenu.scrollHeight;
  filterMenu.style.setProperty("--filter-menu-height", `${filterMenuHeight}px`);
}

// SubMenu

let subMenu = document.getElementById("subMenu");
const backdrop = document.querySelector(".backdrop-overlay");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
  const subMenuHeight = subMenu.scrollHeight;
  subMenu.style.setProperty("--sub-menu-height", `${subMenuHeight}px`);
  backdrop.classList.toggle("active");
}

// Splash loader

let intro = document.querySelector(".intro");
let loader = document.querySelector(".loader");
let rotaloader = document.querySelector(".rotaloader");
let logo = document.querySelector(".main-first");
let logoSpan = document.querySelectorAll(".logo");

window?.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan?.forEach((span, idx) => {
      setTimeout(() => {
        span?.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan?.forEach((span, idx) => {
        setTimeout(() => {
          span?.classList.remove("active");
          span?.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.transform = "translateY(-100%)";
    }, 1000);

    setTimeout(() => {
      loader.style.transform = "translateY(-100%)";
    }, 2000);

    setTimeout(() => {
      rotaloader.style.transform = "translateY(-100%)";
    }, 3000);
  });
});

// Carusel

let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.querySelector(".product__mobile-carusel-item");
  const items = document.querySelectorAll(".carusel-item");
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  const offset = -currentIndex * 420;

  carousel.style.transform = `translateX(${offset}px)`;
}

//filterButton

const menuButton = document.getElementById("filterMenu");
const menuFilter = document.getElementById("menuFilter");

menuButton?.addEventListener("click", function () {
  menuFilter?.classList.toggle("hidden");
  menuButton?.classList.toggle("active");
});

//Burger catalog SubMenu
const catButton = document.querySelector(".mobile__nav-item .nav__hyper a");
const catButtonContent = document.querySelector(
  ".mobile__nav-item .nav__hyper .content"
);
const catButtonBf = document.querySelector(
  ".mobile__nav-item .nav__hyper a .bf"
);
const catButtonAf = document.querySelector(
  ".mobile__nav-item .nav__hyper a .af"
);
const catButtonCatalogContainer = document.querySelector(
  ".mobile__nav-item .catalog-container"
);

catButton.addEventListener("click", function () {
  catButton.classList.toggle("is-active");
  catButtonBf.classList.toggle("is-active");
  catButtonAf.classList.toggle("is-active");
  catButtonContent.classList.toggle("is-active");
  catButtonCatalogContainer.classList.toggle("is-active");
});

//catalog item sub Menu
const itemABtn = document.querySelector(".catalog-container a");
const itemACont = document.querySelector(
  ".catalog-container .submenu__block-1"
);
itemABtn.addEventListener("click", function () {
  itemABtn.classList.toggle("is-active");
  itemACont.classList.toggle("is-active");
});
