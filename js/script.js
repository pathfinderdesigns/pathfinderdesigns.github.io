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
}

const app = () => {
    navSlide();
}

app();
