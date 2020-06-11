var header = $("header");
var navBrand = $(".nav-brand");
var navLinks = $(".nav-link");
var menuBtn = $('.navbar-toggler div')
var nav = document.querySelector('.nav-bar');
var navToggler = document.querySelectorAll('.navbar-toggler div')

const toggleNav = () => {


    if (nav.style.height) {
        nav.style.height = null;
        for (let index = 0; index < navToggler.length; index++) {
            navToggler[index].classList.remove("active")
        }
        header.removeClass("scroll");
        navLinks.removeClass("scroll");
        navBrand.removeClass("scroll");
    } else {
        nav.style.height = nav.scrollHeight + "px";
        for (let index = 0; index < navToggler.length; index++) {
            navToggler[index].className += " active"
        }
        header.addClass("scroll");
        navLinks.addClass("scroll");
        navBrand.addClass("scroll");
        navToggler.className += " active"
    }
}


$(window).on('scroll', () => {
    if (window.scrollY >= 10) {
        header.addClass("scroll");
        navLinks.addClass("scroll");
        menuBtn.addClass("scroll")
        navBrand.addClass("scroll");
    } else {
        header.removeClass("scroll");
        navLinks.removeClass("scroll");
        menuBtn.removeClass("scroll")
        navBrand.removeClass("scroll");
    }
})

