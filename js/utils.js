// Hamburger menu

const hamburger = document.querySelector(".header__hamburger");
const navigation = document.querySelector(".header__navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("animate");
  if (navigation.style.transform === "translateX(-2000px)") {
    navigation.style.transform = "translateX(0px)";
  } else {
    navigation.style.transform = "translateX(-2000px)";
  }
});
