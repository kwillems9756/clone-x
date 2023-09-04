const leftNavElement = document.getElementById("news-carousel-left-nav");
const rightNavElement = document.getElementById("news-carousel-right-nav");

let currentNavSlide = 0;
const maxSlides = 7;

leftNavElement.addEventListener("click", () => {
    currentNavSlide -= 1;
    onNavUtils();
});
rightNavElement.addEventListener("click", () => {
    currentNavSlide += 1;
    onNavUtils();
})

const documentRoot = document.querySelector(":root");
function onNavUtils() {
    currentNavSlide = currentNavSlide % (maxSlides);
    documentRoot.style.setProperty("--news-carousel-slide-id", currentNavSlide.toString());
    updateSliderButtons();
}

function updateSliderButtons() {
    const sliderButtons = document.querySelectorAll(".goto-slide>.select-new-slide");
    let id = 0;
    for(let sliderButton of sliderButtons){
        if(id === currentNavSlide){
            sliderButton.classList.add("selected");
        } else {
            sliderButton.classList.remove("selected");
        }
        id++;
    }
}

function gotoSliderTab(id) {
    currentNavSlide = id;
    onNavUtils();
}