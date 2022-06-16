
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

function requestMenu() {
  fetch("./mocks/MENU.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      if (window.innerWidth > 1024){
        constructMenuDesktop(json.menu);
      } else {
        constructMenuMobile(json.menu);
      }
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

function constructMenuMobile(json) {
  let structureMobileMenu = "";
  const $mobileWrapper = document.querySelector(".menu-mobile-options");

  for (menu of json){
    structureMobileMenu += `
    <li class="header__menu-mobile--menu-wrapper-category">
      <span class="header__menu-mobile--menu-nav-category">
        <a href="${menu.url}" class="header__menu-mobile--menu-title-category"
          >${menu.name}
        </a> ${menu.children ? `
        <div class="mobile-nav-arrow category-arrow">
          <img
            src="./assets/img/nav-mobile-arrow.svg"
            alt="seta de navegação"
            title="seta apontando para baixo indicando que o menu pode ser expandido"
            />
        </div>`:``}
      </span> ${menu.children ? `
      <ul class="header__menu-mobile--menu-wrapper-subcategory"> ${menu.children.map(function(submenu) {return ` 
        <li>
          <span class="header__menu-mobile--menu-nav-subcategory${submenu.children ? `-child` : ``}">
            <a href="${submenu.url}" class="header__menu-mobile--menu-title-subcategory${submenu.children ? `-child` : ``}">
            ${submenu.name}
            </a> ${submenu.children ? `
            <div class="mobile-nav-arrow subcategory-arrow">
              <img
                src="./assets/img/nav-mobile-arrow-sub.svg"
                alt="seta de navegação"
                title="seta apontando para baixo indicando que o menu pode ser expandido"
              />
            </div>`: ``}
          </span> ${submenu.children ? `
      <ul class="header__menu-mobile--menu-wrapper-subcategory-items">${submenu.children.map(function (children){return `
        <li>
          <a href="${children.url}" class="header__menu-mobile--menu-nav-item">
            <span class="header__menu-mobile--menu-title-item">
              ${children.name}
            </span>
          </a>
        </li>`}).join("")}
      </ul>`: ``}`}).join("")}
        </li>`:``}
      </ul>
    </li>
    `
  }
  $mobileWrapper.innerHTML = structureMobileMenu;

  handleNavMenuMobile();
}

requestMenu();

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

function handleNavMenuMobile() {
  const $categoryArrow = document.querySelectorAll(".category-arrow");
  const $subcategoryList = document.querySelectorAll(".header__menu-mobile--menu-wrapper-subcategory");
  const $subcategoryArrow = document.querySelectorAll(".subcategory-arrow");
  const $menuMobileSubcategories = document.querySelectorAll(".header__menu-mobile--menu-wrapper-subcategory-items");

  $categoryArrow.forEach(function ($mobileDepartment, index) {
    $mobileDepartment.addEventListener("click", function () {
      for (let i = 0; i < $subcategoryList.length; i++) {
        $subcategoryList[index].classList.toggle("active-category");
      }
      $categoryArrow.classList.toggle("active-arrow");
    });
  });

  $subcategoryArrow.forEach(function ($mobileCategory, index) {
    $mobileCategory.addEventListener("click", function () {
      for (let i = 0; i < $menuMobileSubcategories.length; i++) {
        $menuMobileSubcategories[index].classList.toggle("active-subcategory");
      }
      $subcategoryArrow.classList.toggle("active");
    });
  });
}


function constructFeatures(json) {

  const $featuresWrapper = document.querySelector(".features-wrapper__swiper-items");
  
  json.map(function (json){
    const featuresContainer = document.createElement('div');
    const featuresImg = document.createElement('img');
    const featuresContainerText = document.createElement('div');
    const featuresStrong = document.createElement('strong');
    const featuresSpan = document.createElement('span');
    
    featuresContainer.classList.add("features-wrapper__swiper-items");
    featuresContainer.classList.add("swiper-slide");
    featuresImg.classList.add("features-wrapper__image");
    featuresImg.src = json.src;
    featuresImg.title = json.title;
    featuresImg.alt = json.alt;
    featuresContainerText.classList.add("features-wrapper__text");
    featuresStrong.classList.add("features-wrapper__text--strong");
    featuresStrong.textContent = json.bold;
    featuresSpan.classList.add("features-wrapper__text--span");
    featuresSpan.textContent = json.text;
  
    featuresContainerText.appendChild(featuresStrong);
    featuresContainerText.appendChild(featuresSpan);
    featuresContainer.appendChild(featuresImg);
    featuresContainer.appendChild(featuresContainerText);
    
    $featuresWrapper.appendChild(featuresContainer);
  })
}

function requestFeatures() {
  fetch("./mocks/FEATURES.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    constructFeatures(json);
  });
}

  requestFeatures();


