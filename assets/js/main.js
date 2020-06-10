const toggleNav = () => {
    var nav = document.querySelector('.nav-bar');
    var navToggler = document.querySelectorAll('.navbar-toggler div')

    if (nav.style.height) {
        nav.style.height = null;
        for (let index = 0; index < navToggler.length; index++) {
            navToggler[index].classList.remove("active")
        }
    } else {
        nav.style.height = nav.scrollHeight + "px";
        for (let index = 0; index < navToggler.length; index++) {
            navToggler[index].className += " active"
        }
    }
}

