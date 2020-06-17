const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const siteLogo = document.querySelector(".site-logo");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      siteLogo.classList.add("site-logo--scrolled");
    } else {
      header.classList.remove("nav-scrolled");
      siteLogo.classList.remove("site-logo--scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


/* 
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 20) {
    // I am using 'display' instead of 'top':
    document.getElementById("head").style.display = "none";
  } else {
    document.getElementById("head").style.display = "initial";
  }
} */
