import gsap from "gsap";

//nodes
const modal = document.getElementById("modal");
const evenCol = document.getElementById("evenCol");
const oddCol = document.getElementById("oddCol");

//functions
function clearTable() {
  evenCol.innerHTML = null;
  oddCol.innerHTML = null;
}
//handlers
export async function openModal() {
  modal.style.display = "flex";
  gsap.to(modal, { duration: 0.5, opacity: 1 });
}
export async function closeModal() {
  gsap
    .to(modal, { duration: 0.5, opacity: 0 })
    .then(() => {
      modal.style.display = "none";
    })
    .then(() => clearTable());
}
