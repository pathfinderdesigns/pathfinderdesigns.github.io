$(document).ready(function(){      
    var scroll_start = 0;
    var sectionOffset = 100;
    var startchange = $('#about');
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