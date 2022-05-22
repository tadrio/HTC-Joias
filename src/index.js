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
