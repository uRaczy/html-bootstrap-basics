/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburgerMenu = document.querySelector('.header-nav-hamburger');
const headerNavMobile = document.querySelector('.header-nav-mobile');

hamburgerMenu.addEventListener('click', () => {
  if (headerNavMobile.style.display === "flex") {
    headerNavMobile.style.display = "none";
  } else {
    headerNavMobile.style.display = "flex";
  }
});

const setup = () => {
  headerNavMobile.style.display = "none";
}

document.addEventListener('load', setup());