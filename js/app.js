// Animations
const animations = () => {

  /*** Global Animations ***/
  gsap.from('.hero-h1', {
    opacity:0, duration: 1, y:50, stagger: 0.5,
    ease: 'Power2.easeInOut'
  });

  gsap.from('.hero-paragraph', {opacity: 0, duration: 1, delay: 1.6});

  gsap.from('.down-arrow', {
    opacity:0, duration: 1, y:-20, repeat: -1,
    ease: 'Power2.easeInOut'
  });


  /** Scroll Magic **/
  var controller = new ScrollMagic.Controller();

  const wbw = () => {
    // Word by word appering
    $(".anim-wbw-wrapper").each(function() {
      var tl = new TimelineMax();
      var child = $(this).find(".anim-wbw");
      tl.from(child, 1, {
        opacity:0, duration: 1, y:50, stagger: 0.5,
        ease: 'Power2.easeInOut'
      });
  
      new ScrollMagic.Scene({
        triggerElement: this,
        offset: -100,
        reverse:false
      })
        .setTween(tl)
        .addTo(controller);
    });
  }

  const animUp = () => {
    /// Text up animation for all headings except hero
    $(".anim-up-wrapper").each(function() {
      var tl = new TimelineMax();
      var child = $(this).find(".anim-up");
      tl.from(child, 1, { opacity:0, duration: 1, y:30, stagger: 0.2,
        ease: 'Power2.easeInOut' });
  
      new ScrollMagic.Scene({
        triggerElement: this,
        offset: -100,
        reverse:false
      })
        .setTween(tl)
        // .addIndicators({
        //   colorTrigger: "black",
        //   colorStart: "black",
        //   colorEnd: "black",
        //   indent: 10
        // })
        .addTo(controller);
    });
  
  }

  const removeHeadingScroll = () => {
    // Removing text as down scroll
    var heroTimeline = gsap.timeline({onUpdate: updatePercentage}).to('.hero-heading', {
      opacity:0
    });

    function updatePercentage() {
      heroTimeline.progress();
      // console.log(heroTimeline.progress());
    }

    new ScrollMagic.Scene({
      triggerElement: '.hero-heading',
      triggerHook: "onLeave",
      duration: 110,
    }).setTween(heroTimeline)
    //.addIndicators()
    .addTo(controller);
  }

  const imgZeroToOpacity = () => {
    $(".anim-up-wrapper").each(function() {
      var tl = new TimelineMax();
      var child = $(this).find(".anim-fade-in");
      tl.from(child, 1, { opacity:0, duration: 1,
        ease: 'Power2.easeInOut' });
  
      new ScrollMagic.Scene({
        triggerElement: this,
        offset: 0,
        reverse:false
      })
        .setTween(tl)
        // .addIndicators({
        //   colorTrigger: "black",
        //   colorStart: "black",
        //   colorEnd: "black",
        //   indent: 10
        // })
        .addTo(controller);
    });
  }

  wbw();
  animUp();
  removeHeadingScroll();
  imgZeroToOpacity();

}

// Section Observer
// const sectionObserver = () => {
//   const sectionOne = document.querySelector('.services');

//   const observer = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(entry => {
//           entry.target.classList.toggle('services-focus');
//       });
//   }, {});
  
//   observer.observe(sectionOne);    
// }


// Firebase functions
const firebase = () => {
  const form = document.querySelector('#add-email-form');

  // Add new Email
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Email Sent!\nWait for our response');
      db.collection('emails').add({
          name: form.name.value,
          email: form.mail.value,
          message: form.message.value,
          time: new Date(Date.now())
      });
      clearEmailFields();
  });

  function clearEmailFields() {

      document.getElementById("email-name").value = "";
      document.getElementById("email-mail").value = "";
      document.getElementById("email-message").value = "";
  }
}

const hideNavBarScroll = () => {
  // Hide Header on on scroll down
  //console.log("called");
  var didScroll;
  var lastScrollTop = 0;
  var delta = 20;
  var navbarHeight = $('nav').outerHeight();

  const menuToggle = document.querySelector('.menu-toggle');

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {

    if(!menuToggle.classList.contains('open')) {

        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }
  }
}

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

const changeNavSection = () => {
  $(document).ready(function(){      
    var scroll_start = 0;
    var sectionOffset = 100;
    var startchange = $('#startChange');
    var offset = startchange.offset();
    const body = document.querySelector('.menu-toggle');
    $(document).scroll(function() {
       
       scroll_start = $(this).scrollTop() + sectionOffset;
       if(!body.classList.contains('open')) {
         
         if(scroll_start > offset.top) {
            $('nav').removeClass('nav-normal').addClass('nav-scrolled');
         } else {
            $('nav').removeClass('nav-scrolled').addClass('nav-normal');
         }

       }
    });
 });
}

/// Add functions to be initialized
const app = () => {
  animations();
  firebase();
  hideNavBarScroll();
  navSlide();
  changeNavSection();
  //sectionObserver();
}

/// Initialization
app();