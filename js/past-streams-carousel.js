const leftNavElementPastStreams = document.getElementById("past-streams-carousel-left-nav");
const rightNavElementPastStreams = document.getElementById("past-streams-carousel-right-nav");

let currentNavSlidePastStreams = 0;
const maxSlidesPastStreams = 3;

leftNavElementPastStreams.addEventListener("click", () => {
    console.log("click");
    currentNavSlidePastStreams -= 1;
    onNavUtilsPastStreams();
});
rightNavElementPastStreams.addEventListener("click", () => {
    console.log("click");
    currentNavSlidePastStreams += 1;
    onNavUtilsPastStreams();
})

const documentRootPastStreams = document.querySelector(":root");
function onNavUtilsPastStreams() {
    currentNavSlidePastStreams = ((currentNavSlidePastStreams % maxSlidesPastStreams) + maxSlidesPastStreams) % maxSlidesPastStreams;
    documentRootPastStreams.style.setProperty("--past-streams-offset", currentNavSlidePastStreams.toString());
    updateSliderButtonsPastStreams();
}

function updateSliderButtonsPastStreams() {
    const sliderButtons = document.querySelectorAll("section.twitch-stream .goto-slide>.select-new-slide");
    let id = 0;
    for(let sliderButton of sliderButtons){
        if(id === currentNavSlidePastStreams){
            sliderButton.classList.add("selected");
        } else {
            sliderButton.classList.remove("selected");
        }
        id++;
    }
}

function gotoSliderTabPastStreams(id) {
    currentNavSlidePastStreams = id;
    onNavUtilsPastStreams();
}