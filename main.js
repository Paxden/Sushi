// Show Menu

const navMenu = document.querySelector("#nav__menu");
      navToggle = document.querySelector("#nav__toggle");
      navClose = document.querySelector("#nav__close");
      navLink = document.querySelectorAll("#navlink");


    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    };

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    };

    // Hide menu mobile

    const linkAction = () =>{
        const navMenu = document.querySelectorAll("#nav__menu")
        navMenu.classList.remove('show-menu')
    };

   
    
    navLink.forEach(moon=> {
        moon.addEventListener("click", clic)
    });

    function clic() {
        linkAction()
    }

  
navLink.forEach(n => n.addEventListener("click", linkAction))

// Change background header

const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener("scroll", scrollHeader);


// Scroll Up
const scrollUp = () => {
    const scrollUp = document.querySelector('#scrollup')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// Scroll Reveal Animation
const sr = ScrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info')
sr.reveal('.home__data', {origin: "bottom"})
sr.reveal('.about__data, .recently__data', {origin: "left"})
sr.reveal('.about__img, .recently__img', {origin: "right"})
sr.reveal('.popular__card', {interval: 100})