let bg = document.getElementById("background");
let menu = document.getElementById("mobile_menu");

function openMenu() {
    bg.style.display = "block";
    menu.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeMenu() {
    bg.style.display = "none";
    menu.style.display = "none"
    document.body.style.overflow = "";
}

