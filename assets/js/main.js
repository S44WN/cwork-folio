// menu animation stuff
var tl = gsap.timeline({ paused: "true" });

tl.to(".menu-hidden", {
  duration: 1,
  x: "0%",
  ease: Expo.easeInOut,
});

tl.fromTo(
  ".li",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.15,
  }
);

tl.fromTo(
  ".menu-hidden__social",
  {
    x: "-80%",
    opacity: 0,
  },
  {
    x: "0%",
    duration: 0.8,
    opacity: 1,
    stagger: 0.15,
    ease: Expo.easeInOut,
  },
  "-=0.5"
);

function toggle() {
  tl.play();
}
function togglec() {
  tl.reverse();
}

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SERVICES MODAL ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Link active work */

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
