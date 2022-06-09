
function infoTop() {
  fetch("./mocks/INFORMATIVES_TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInfoTop(json);
    });
};

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
};

infoTop();

function menuDesktop() {
  fetch("./mocks/MENU.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructMenuDesktop(json.menu);
    });
};

function constructMenuDesktop(json){
  let structureMenu = "";
  const $wrapper = document.querySelector(".header__menu__container--list");
  for (menu of json){
    structureMenu += `
    <li class="header__menu__container--list menu-item">
      <a class="header__menu__container--link" href="${menu.url}">${menu.name}</a>
      <ul class="header__menu__category-wrapper${menu.name === "Turmalina" ? `--color` : ``}">${menu.children ? `${menu.children.map(function (child) {return `
        <li class="header__menu__category-item${menu.name === "Turmalina" ? `--color` : ``}">
          <a class="header__menu__category-link${menu.name === "Turmalina" ? `--color` : ``}" href="${child.url}">${child.name}</a>${child.children ? `
          <ul class="header__menu__subcategory-wrapper">${child.children.map(function (child) { return `
            <li class="header__menu__subcategory-item">
              <a class="header__menu__subcategory-link" href="${child.url}">${child.name}</a>`}).join('')}
            </li>
          </ul>` : ``}
        </li>`}).join('')}`: ``}
      </ul>
    </li>`
  }
  
  $wrapper.innerHTML = structureMenu;
};

menuDesktop();

function menuMobile() {
  fetch("./mocks/MENU.json")
    .then(function (response) {
      return response.json();
      })
      .then(function (json) {
        constructMobileDesktop(json.menu);
      });
};

function constructMobileDesktop(json) {
  let structureMobileMenu = "";
  const $mobileWrapper = document.querySelector(".menu-mobile-options");

  for (mobileMenu of json){
    structureMobileMenu += `
    <li class="header__menu-mobile--menu-wrapper-category">
      <a href="${mobileMenu.url}" class="header__menu-mobile--menu-nav-category">
        <span class="header__menu-mobile--menu-title-category"
          >${mobileMenu.name}
        </span> ${mobileMenu.children ? `
        <div class="mobile-nav-arrow">
          <img src="./assets/img/nav-mobile-arrow.svg" alt="seta de navegação" title="seta apontando para baixo indicando que o menu pode ser expandido"/>
        </div>
          `:``}
      </a>
    </li>
    `
  //<li class="header__menu-mobile--menu-wrapper-category">
  //  <a href="#" class="header__menu-mobile--menu-nav-category">
  //    <span class="header__menu-mobile--menu-title-category"
  //      >Turmalina
  //    </span>
  //  </a>
  //</li>

  }

$mobileWrapper.innerHTML = structureMobileMenu;
}

menuMobile();

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