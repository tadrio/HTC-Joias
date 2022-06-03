
function infoTop() {
  fetch("./mocks/INFORMATIVES_TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInfoTop(json);
    });
}
function constructInfoTop(json) {
  const $wrapper = document.querySelector(".header__info-top__wrapper");
  for (completeText of json) {
    $wrapper.innerHTML += `
    <span class="header__info-top__wrapper${
      completeText.firstBold ? "--text-bold" : "--text"
    }">
      ${completeText.text1}
      <span class="header__info-top__wrapper${
        completeText.firstBold ? "--text" : "--text-bold"
      }">
        ${completeText.text2}
      </span>
    </span>`;
  }
}

infoTop();

function menuDesktop() {
  fetch("./mocks/MENU.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructMenuDesktop(json.menu);
    });
}

function constructMenuDesktop(json){
  let structureMenu = "";
  const $wrapper = document.querySelector(".header__menu__container--list");
  for (menu of json){
    structureMenu += `
    <li>
      <a class="header__menu__container--link" href="${menu.link}">${menu.name}</a>
    </li>`;
  }

  $wrapper.innerHTML = structureMenu;
  
}

menuDesktop();

function handleToggleMenuMobile(){
  const $menuMobileOpen = document.querySelector(".header__menu-burger");
  const $menuMobileClose = document.querySelector(".header__menu-mobile--menu-close");
  const $menuMobile = document.querySelector(".header__menu-mobile");

  $menuMobileOpen.addEventListener('click', function(){
    $menuMobile.classList.add('active');
  })

  $menuMobileClose.addEventListener('click', function(){
    $menuMobile.classList.remove('active');
  })

}

handleToggleMenuMobile();