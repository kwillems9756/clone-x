const xGotoElements = document.querySelectorAll("[x-goto]");
for(let xGotoElement of xGotoElements){
    xGotoElement.addEventListener("click", () => {
        window.location.href = xGotoElement.getAttribute("x-goto");
    })
}
