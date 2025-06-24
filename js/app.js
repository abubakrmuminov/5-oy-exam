import { countries, info } from "./request.js";

countries()

info()

const themeToggleBtn = document.getElementById("darkMode");
const htmlTag = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlTag.setAttribute("data-theme", savedTheme);
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTag.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
