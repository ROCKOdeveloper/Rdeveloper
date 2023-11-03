// Gsap
gsap.registerPlugin(ScrollTrigger, TextPlugin);

/* Bar progress */
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: {
    scrub: 1,
  },
});

// Box proyect
gsap.from("#project", {
  scrollTrigger: {
    trigger: "#project",
    start: "-600px 35%",
    end: "-600px top",
    toggleActions: "play resume reverse none",
    markers: false,
    id: "project",
    scrub: 1,
  },
  y: "500px",
  duration: 2.5,
  ease: "power3.out",
});

// Box experiment
gsap.from("#experiment", {
  scrollTrigger: {
    trigger: "#experiment",
    start: "-600px 30%",
    end: "-600px top",
    toggleActions: "play resume reverse none",
    markers: false,
    id: "experiment",
    scrub: 1,
  },
  y: "500px",
  duration: 2,
  ease: "power3.out",
});

// Box blog
gsap.fromTo(
  "#blog",
  {
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
  },
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#blog",
      start: "-100px 70%",
      end: "-100px 60%",
      toggleActions: "play resume reverse none",
      markers: false,
      id: "blog box",
      scrub: 1,
    },
  }
);

// Text blog
gsap.to("#TextBlog", {
  scrollTrigger: {
    trigger: "#TextBlog",
    start: "-250px 70%",
    end: "-250px 50%",
    scrub: 2,
    toggleActions: "play resume reverse none",
    markers: false,
    id: "blog",
  },
  duration: 5,
  text: "En este blog, te sumergirás en el emocionante mundo del aprendizaje efectivo y el autodidactismo, descubriendo las claves para alcanzar tu máximo potencial. (En desarrollo)",
  ease: "expo.out",
});

// Custom cursor
let root = document.documentElement;
root.addEventListener("mousemove", (e) => {
  root.style.setProperty("--mouse-x", e.clientX + "px");
  root.style.setProperty("--mouse-y", e.clientY + "px");
});

// typing
("use strict");
const type = document.querySelector("#typing");
let listTexts = [
  "Luis Rodriguez",
  "Web developer",
  "Autodidacta",
  "Taekwondista",
  "Curioso",
  "Comprometido",
  "Determinado",
  "Yo soy",
];
let index = -1;
let current = 0;
function typeTextFunc() {
  if (current === listTexts.length) {
    current = 0;
  }
  let typeText = setInterval(() => {
    if (index == listTexts[current].length - 1) {
      clearInterval(typeText);
      clearTextFunc();
    } else {
      index++;
      type.textContent += listTexts[current][index];
    }
  }, 200);
}
function clearTextFunc() {
  let clearText = setInterval(() => {
    if (type.textContent.length == 0) {
      clearInterval(clearText);
      index = -1;
      current++;
      typeTextFunc();
    } else {
      type.textContent = type.textContent.slice(0, -1);
    }
  }, 50);
}
typeTextFunc();
