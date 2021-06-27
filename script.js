/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburgerMenu = document.querySelector('.nav-hamburger');
const navMobile = document.querySelector('.nav-mobile');

const navBars = document.querySelector('.nav-bars');
const navX = document.querySelector('.nav-x');

// Display and hide menu for mobile.
// Change menu bars to X on click.
hamburgerMenu.addEventListener('click', () => {
  if (navMobile.style.display === "flex") {
    navMobile.style.display = "none";
    navX.style.display = 'none';
    navBars.style.display = 'block';
  } else {
    navMobile.style.display = "flex";
    navX.style.display = 'block';
    navBars.style.display = 'none';
  }
});

const setup = () => {
  navMobile.style.display = "none";
  navX.style.display = "none";
}

document.addEventListener('load', setup());