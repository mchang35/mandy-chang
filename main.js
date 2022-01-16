// var ready = (callback) => {
//     if (document.readyState != "loading") callback();
//     else document.addEventListener("DOMContentLoaded", callback);
// }
// ready(() => {
//     document.querySelector(".header").style.height = window.innerHeight + "px";
// })

// defines where the navigation bar will be FIXED!
// var navbar_sticky_Y = window.scrollY + window.innerHeight;
var navbar_sticky_Y = document.getElementById("navbar").scrollTop;

// when users scroll on the window, make sure that the navigation is sticky
window.onscroll = function() {sticky_nav()};

// function that makes navigation sticky
function sticky_nav() {
    console.log("Sticky Nav");
    var navbar = document.getElementById("navbar");
    // var navbar = navbar_list[0]; // gets the navigation bar
    if (window.pageYOffset >= navbar_sticky_Y) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// define a function for when they click on each button in the navigation
// function home() {
//     document.body.scrollTop = 0; // for Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }