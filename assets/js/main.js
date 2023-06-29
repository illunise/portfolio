const navMenu = document.getElementById("nav-menu"),
      navClose = document.getElementById("nav-close"),
      navToggle = document.getElementById("nav-toggle");



/* ==================== Show Menu ==================== */
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add("show-menu");
    })
}

/* ==================== Show Menu ==================== */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))