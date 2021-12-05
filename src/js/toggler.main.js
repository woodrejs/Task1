import gsap from "gsap";

//nodes
const switchBtn = document.getElementById("switch");
const toggler = document.getElementById("toggler");
//vars
export let isActive = false;

switchBtn.addEventListener("click", () => {
  gsap.to(toggler, { duration: 0.3, x: isActive ? 30 : 0 });
  isActive = !isActive;
});
