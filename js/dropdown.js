const dropdownPointerMoveAmount = 3;
const dropdownPointerMoveDuration = .5;
const dropdownNavElements = document.getElementsByClassName("dropdown-parent")
for(let dropdownNavElement of dropdownNavElements){
    dropdownNavElement.addEventListener("mouseenter", () => {
        const dropdownPointerElements = dropdownNavElement.getElementsByClassName("dropdown-pointer");
        if(dropdownPointerElements === null || dropdownPointerElements.length < 1) return;
        const dropdownPointerElement = dropdownPointerElements[0];
        let leftMode = dropdownPointerElement.getAttribute("x-pointer-move") === "right";
        let tl = gsap.timeline({delay: .5, repeat: 1});
        tl.fromTo(dropdownPointerElement, {
            y: 0,
            x: 0
        }, {
            y: leftMode ? 0 : dropdownPointerMoveAmount,
            x: leftMode ? dropdownPointerMoveAmount : 0,
            duration: dropdownPointerMoveDuration/4
        });
        tl.to(dropdownPointerElement, {
            y: 0,
            x: 0,
            duration: dropdownPointerMoveDuration/4
        })
    })
}
