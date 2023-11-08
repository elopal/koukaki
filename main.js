/*-----------------------------------------------------------------VIDEO----------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");

    const video = document.createElement("video");
    const videoURL = "https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4";
    video.classList.add("background-video");
    video.src = videoURL;

    banner.appendChild(video);

    video.autoplay = true;
    video.loop = true;
    video.muted = true;
     
});
/*------------------------------------------------------------------MENU----------------------------------------------------------------------------------*/
const burgerIcon = document.getElementById('burgerIcon');
const fullscreenMenu = document.getElementById('fullscreenMenu');

burgerIcon.addEventListener('click', () => {
    fullscreenMenu.classList.toggle('active');
    burgerIcon.classList.toggle('close');
});
// const fullscreenMenu = document.querySelector('.fullscreen-menu');
// const burgerIcon = document.querySelector('.burger-icon');
// const closeIcon =document.querySelector('.close-icon');

// function openNav() {
//   fullscreenMenu.classList.add('active');
// }

// function closeNav() {
//   fullscreenMenu.classList.remove('active');
// }

// burgerIcon.onclick = openNav;
// closeIcon.onclick = closeNav;

//-------------------------------------

//---------------------------------------------------------------------

// const fullscreenMenu = document.querySelector('.fullscreen-menu');
//  const burgerIcon = document.querySelector(".burger-icon");

// burgerIcon.addEventListener('click', function () {
//     if ('close') {
//         fullscreenMenu.classList.add('open');
//     } else {
//         fullscreenMenu.classList.remove('open');
//         fullscreenMenu.classList.add('closeBtn');
//     }
// });




// const sidenav = document.getElementById("mySidenav");
// const openBtn = document.getElementById("openBtn");
// const closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// /* Set the width of the side navigation to 250px */
// function openNav() {
//   sidenav.classList.add("active");
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove("active");
// }

/*---------------------------------------------------------------------DOM----------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
/*-----------------------SECTIONS------------------------*/
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('section-animation1');
          observer1.unobserve(entry.target);
        }
      });
    });
  
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('section-animation2');
          observer2.unobserve(entry.target);
        }
      });
    });
  
    const section1 = document.querySelector('.section-animation1');
    const section2 = document.querySelector('.section-animation2');
  
    if (section1) {
      observer1.observe(section1);
    }
  
    if (section2) {
      observer2.observe(section2);
    }
/*----------------------TITRES----------------------*/
    const observerTitle = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              entry.target.classList.add('title-text');
              observerTitle.unobserve(entry.target);
          }
      });
  });

  const titles = document.querySelectorAll('.title');

  titles.forEach(title => {
      observerTitle.observe(title);
  });

/*-------------------SLIDER--------------------------*/
  let mySwiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
/*-----------------------------------------------------*/
  });
/*--------------------------------------------------------------------DOM------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------TITRES------------------------------------------------------------------------------*/
// const observerTitle = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//       if (entry.isIntersecting) {
//           entry.target.style.animationPlayState = 'running';
//           entry.target.classList.add(`title`);
//           observerTitle.unobserve(entry.target);
//       }
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const titles = document.querySelectorAll('.title');

//   titles.forEach(title => {
//       observerTitle.observe(title);
//   });
// });

/*-------------------------------------------------------------------SLIDER----------------------------------------------------------------------------------*/

// let mySwiper = new Swiper('.swiper-container', {
//   effect: 'coverflow', 
//   coverflowEffect: {
//     rotate: 50, 
//     stretch: 0, 
//     depth: 100, 
//     modifier: 1, 
//     slideShadows: true, 
//   },
//   slidesPerView: "auto", 
//   spaceBetween: 20,
//   loop: true, 
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   scrollbar: {
//     el: '.swiper-pagination',
//   },

// });


  


