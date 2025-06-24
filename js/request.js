import { elCardsContainer, elFilterSelect } from "./html-element.js";
import { loader, showDetailsByName, ui } from "./tool.js";

export function countries() {
  loader(true);
  fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags,borders,population,region,capital`
  )
    .then((res) => res.json())
    .then((countries) => {
      ui(countries);
    });
}

let isWaiting = false;

export function info() {
  elCardsContainer.addEventListener("click", (e) => {
    if (isWaiting) return;
    isWaiting = true;

    const card = e.target.closest(".card");
    if (!card) {
      isWaiting = false;
      return;
    }

    const name = card.querySelector("#countryName").textContent;

    showDetailsByName(name);

    setTimeout(() => {
      isWaiting = false;
    }, 2500);
  });
}


elFilterSelect.addEventListener("change", (e) => {
  const region = e.target.value;
  loader(true);
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((res) => res.json())
    .then((data) => {
      ui(data);
    })
});