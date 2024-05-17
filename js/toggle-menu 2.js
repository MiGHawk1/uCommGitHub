// Toggle functionality for mobile menu

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menuColumn");

function toggleMenu() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      // adds the menu (hamburger) button
      toggle.querySelector("a").innerHTML = '<img class="img100" src="images/MobileBtn.png" alt="Bars button to show menu">';
   } else {
      menu.classList.add("active");
      // adds the close (x) button
      toggle.querySelector("a").innerHTML = '<img class="img100" src="images/MobileBtnX.png" alt="Bars button to show menu">';
   }
}

toggle.addEventListener("click", toggleMenu, false);
