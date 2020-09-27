// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("animate");
    if (navigation.style.transform === "translateX(-2000px)") {
        navigation.style.transform = "translateX(0px)";
    } else {
        navigation.style.transform = "translateX(-2000px)";
    }
});