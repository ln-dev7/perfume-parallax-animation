import "./style.scss";
import gsap from "gsap";

// https://perfume-parallax-animation.vercel.app/

const run = document.querySelector(".run");
const reload = document.querySelector(".reload");

run.addEventListener("click", () => {
  run.style.display = "none";
  reload.style.display = "flex";
  gsap.to(".text", {
    scale: 1,
    duration: 1,
  });

  gsap.to(".perfume-top", {
    y: -50,
    duration: 1,
  });

  gsap.to(".perfume-body", {
    y: 300,
    duration: 1,
  });

  //
  gsap.to(".bg1", {
    y: "-100%",
    delay: 2,
    duration: 1,
  });

  gsap.to(".bg2", {
    y: "0",
    delay: 2,
    duration: 1,
  });

  gsap.to(".text", {
    y: "-400%",
    delay: 2,
    duration: 1,
  });

  gsap.to(".perfume-top", {
    y: 280,
    delay: 2,
    duration: 1,
  });

  gsap.to(".perfume-body", {
    scale: 1.1,
    delay: 2,
    duration: 1,
  });

  //

  gsap.to(".bg1", {
    y: "0",
    delay: 4,
    duration: 1,
  });

  gsap.to(".bg2", {
    opacity: 0.75,
    delay: 4,
    duration: 1,
  });

  gsap.to(".text", {
    y: 100,
    opacity: 0,
    scale: 0,
    delay: 4,
    duration: 1.5,
  });

  gsap.to(".perfume", {
    y: -550,
    scale: 0.9,
    delay: 4,
    duration: 1.25,
  });
});

reload.addEventListener("click", () => {
  window.location.reload();
});
