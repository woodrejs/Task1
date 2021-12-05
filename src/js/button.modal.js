import gsap from "gsap";
import { closeModal } from "./modal.handlers";

//nodes
const button = document.getElementById("modalBtn");

//listener
button.addEventListener("click", closeModal);
button.addEventListener("mouseenter", () => {
  gsap.to(button, { duration: 0.3, opacity: 0.8 });
});
button.addEventListener("mouseout", () => {
  gsap.to(button, { duration: 0.3, opacity: 1 });
});
