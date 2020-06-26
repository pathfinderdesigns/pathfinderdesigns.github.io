const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    // Toggle Nav
    menuToggle.addEventListener('click', ()  => {
        nav.classList.toggle('nav-active');
        body.classList.toggle('nav-black');
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                // Automatic propper delay
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.5}s`;
            }

        });

        //Transform to cross animation
        menuToggle.classList.toggle('open');   

    });

    nav.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        menuToggle.classList.remove('open');
        body.classList.remove('nav-black');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                // Automatic propper delay
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.5}s`;
            }

        });
    });
}

const app = () => {
    navSlide();
}

app();
