if (window.localStorage.getItem("CookieRead") === "true") {
    document.getElementById("cookies").remove();
}

function removeCookies(allowCookie = false) {
    if (allowCookie) {
        window.localStorage.setItem("CookieRead", "true");
    }
    gsap.to("#cookies", {
        y: window.innerHeight,
        duration: 1
    })
    setTimeout(() => {
        document.getElementById("cookies").remove();
    }, 1000)
}