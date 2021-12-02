//nodes
const switchBtn = document.getElementById("switch");
const toggler = document.getElementById("toggler");
//vars
export let isActive = false;

switchBtn.addEventListener("click", () => {
  const shift = isActive ? 30 : 0;

  toggler.style.transform = `translateX(${shift}px)`;
  isActive = !isActive;
});
