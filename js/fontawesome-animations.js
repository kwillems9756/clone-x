const fontawesomeIconHoverAnimationElements = document.querySelectorAll("[x-fontawesome-animate-hover]");
for(let fontawesomeIconHoverAnimationElement of fontawesomeIconHoverAnimationElements){
    fontawesomeIconHoverAnimationElement.parentElement.addEventListener("mouseenter", () => {
        fontawesomeIconHoverAnimationElement.classList.add("fa-"+fontawesomeIconHoverAnimationElement.getAttribute("x-fontawesome-animate-hover"));
    })
    fontawesomeIconHoverAnimationElement.parentElement.addEventListener("mouseleave", () => {
        fontawesomeIconHoverAnimationElement.classList.remove("fa-"+fontawesomeIconHoverAnimationElement.getAttribute("x-fontawesome-animate-hover"));
    })
}