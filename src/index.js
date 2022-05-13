function constructInfoTop(json) {
  const $wrapper = document.querySelector(".header__info-top__wrapper");
  for (completeText of json) {
    $wrapper.innerHTML += `
    <span class="header__info-top__wrapper--text">
      ${completeText.text}
      <strong class="header__info-top__wrapper--text-bold">
        ${completeText.bold}
      </strong>
    </span>`;
  }
}

function infoTop() {
  fetch("./mocks/INFORMATIVES_TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInfoTop(json);
    });
}

infoTop();
