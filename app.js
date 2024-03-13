const preloader = document.getElementById("preloader");

function preload() {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-99999";
  document.body.classList.remove("noScroll");
  preloader.style.visibility = "hidden";
}

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.container-new',
//     start: 'start center',
//     ease: elastic,
//     end: 'end center',
//     scrub: true,
//     markers: false
//   }
// })

// tl.to('.container-new', {
//   x: 80
// })

gsap.to('.container-scroll-1', {
  scale: 0.85,
  ease: 'none',
  // scale: 0.81,
  scrollTrigger: {
      trigger: '.container-scroll-1',
      Scroller: 'body',
      start: 'top 0%',
      end: 'bottom 50%',
      // markers: true,
      scrub: 0.5
  }
})

gsap.from('.container-scroll-2', {
  x: 0,
  y: 50,
  opacity: 0,
  scrollTrigger: {
      trigger: '.container-scroll-1',
      Scroller: 'body',
      start: 'center center',
      end: 'bottom center',
      // markers: true,
      scrub: 2
  }
})

gsap.from('.container-scroll-3', {
  x: 0,
  y: 50,
  opacity: 0,
  scrollTrigger: {
      trigger: '.container-scroll-2',
      Scroller: 'body',
      start: 'center center',
      end: 'bottom center',
      // markers: true,
      scrub: 2
  }
})

gsap.from('.container-scroll-4', {
  x: 0,
  y: 50,
  opacity: 0,
  scrollTrigger: {
      trigger: '.container-scroll-3',
      Scroller: 'body',
      start: 'center center',
      end: 'bottom center',
      // markers: true,
      scrub: 2
  }
})

gsap.from('.container-scroll-5', {
  x: 0,
  y: 50,
  opacity: 0,
  scrollTrigger: {
      trigger: '.container-scroll-4',
      Scroller: 'body',
      start: 'center center',
      end: 'bottom center',
      // markers: true,
      scrub: 2
  }
})
