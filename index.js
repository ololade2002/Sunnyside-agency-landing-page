

var button = document.getElementById("menu");
var mobileNav = document.getElementById("mobileNav");

button.style.opacity = 1;
mobileNav.style.display = "none";

function ham() {
    if (mobileNav.style.display == "none") {
        mobileNav.style.display = "block";
        button.style.opacity = 0.5;
    } else {
        mobileNav.style.display = "none";
        button.style.opacity = 1;
    }
}