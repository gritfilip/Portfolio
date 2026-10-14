const themeButton = document.querySelector("#theme-button");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const favIcon = document.querySelector("#favicon");
const navLogo = document.querySelector("#nav-logo");

// Hämtar det senast sparade temat
const savedTheme = localStorage.getItem("theme");

// Kontrollerar vilket tema som ska visas när sidan laddas
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  favIcon.href = "images/favicon-dark.png"
  navLogo.src = "images/favicon-dark.png"

  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
} else {
  document.documentElement.setAttribute("data-theme", "light");

  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
  favIcon.href = "images/favicon-light.png"
  navLogo.src = "images/favicon-light.png"
}

// Byter mellan ljust och mörkt tema när knappen klickas
themeButton.addEventListener("click", () => {
  if (sunIcon.style.display === "none") {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";

    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    favIcon.href = "images/favicon-light.png"
    navLogo.src = "images/favicon-light.png"
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";

    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    favIcon.href = "images/favicon-dark.png"
    navLogo.src = "images/favicon-dark.png"
  }
});
