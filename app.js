const input = document.querySelector('input');
input.addEventListener("mouseover", setValue);
input.addEventListener("mouseout", setDefaultValue);

function setValue() {
    return input.value = ' ';
}

function setDefaultValue() {
    input.value = 'Какой магазин Вам нужен?';
}

const headerText = document.querySelector('h1');
const links = document.querySelectorAll('a');

links.forEach((function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      link.parentNode.classList.add('acitve');
      let text = e.target.textContent;
      headerText.innerHTML = text;
    })
  }));

