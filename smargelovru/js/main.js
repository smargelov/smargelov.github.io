$(document).ready(function () {
    $('.slider').slick(); 
});

var toggleMenu = function () { 
    var menu = document.getElementsByClassName("header-menu")[0];
    var btn  = document.getElementsByClassName("header__burger")[0];

    var toggleActive = function () { 
        menu.classList.toggle("active");
        btn.classList.toggle("active");
     }
    toggleActive();
 }   







