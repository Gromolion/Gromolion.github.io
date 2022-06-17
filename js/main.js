let links = document.getElementsByClassName("header_link");

function openMenu() {
    document.getElementById("background").style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeMenu() {
    document.getElementById("background").style.display = "none";
    document.body.style.overflow = "";
}

setInterval(function () {
    if (window.pageYOffset >= 100) {
        document.documentElement.style.setProperty('--header_link-color', "#646464")
        document.getElementById("header").style.background = "white";
    } else {
        document.getElementById("header").style.background = "";
        document.documentElement.style.setProperty('--header_link-color', "#fff")
    }
}, 1000);