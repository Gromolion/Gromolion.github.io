let links = document.getElementsByClassName("header_link");

setInterval(function () {
    if (window.pageYOffset >= 100) {
        document.documentElement.style.setProperty('--header_link-color', "#646464")
        document.getElementById("header").style.background = "white";
    } else {
        document.getElementById("header").style.background = "";
        document.documentElement.style.setProperty('--header_link-color', "#fff")
    }
}, 1000);