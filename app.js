const input = document.querySelector('#input-question');
input.addEventListener("mouseover", setValue);
input.addEventListener("mouseout", setDefaultValue);

function setValue() {
  return input.value = ' ';
}

function setDefaultValue() {
  input.value = 'Какой магазин Вам нужен?';
}

const headerText = document.querySelector('h3');
const links = document.querySelectorAll(".menu-item");

links.forEach((function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    link.parentNode.classList.add('acitve');
    let text = e.target.textContent;
    headerText.innerHTML = text;
  })
}));



let w = window.screen.width;
let h = window.screen.height;
const burger = document.querySelector(".menu-button");
if (w === 768 && h === 1024) {
  burger.addEventListener('click', burgerMenuMedium);
}
if (w === 320 && h === 568) {
  burger.addEventListener('click', burgerMenuSmall);
}


let sidebar = document.querySelector(".sidebar");
let brandName = document.querySelector("#brand");
let menuIcon = document.querySelector(".menu-button-icon");
let menuNames = document.querySelectorAll(".menu-name");
let content = document.querySelector(".content");
let logo = document.querySelector(".logo");

function burgerMenuMedium() {
  sidebar.classList.toggle('active-medium');
  brandName.classList.toggle('active-medium');
  menuIcon.classList.toggle('active-medium');
  content.classList.toggle('active-medium');
  menuNames.forEach((function (category) {
    category.classList.toggle('active-medium');
  }));

}

function burgerMenuSmall() {
  sidebar.classList.toggle('active-small');
  brandName.classList.toggle('active-small');
  menuIcon.classList.toggle('active-small');
  content.classList.toggle('active-small');
  menuNames.forEach((function (category) {
    category.classList.toggle('active-small');
  }));
  logo.classList.toggle('active-small');
}

let categoryName = document.querySelector(".category-name");
window.addEventListener('scroll', function() {
    if (w === 768 || w === 320) {
      if(window.pageYOffset >= 10) {
        categoryName.classList.add('off')
      } else {
        categoryName.classList.remove('off')
      }
    }
});