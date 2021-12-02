//nodes
const modal = document.getElementById("modal");
const button = document.getElementById("modalBtn");
const evenCol = document.getElementById("evenCol");
const oddCol = document.getElementById("oddCol");

//listener
button.addEventListener("click", () => {
  clearTable();
  closeModal();
});

function closeModal() {
  modal.style.display = "none";
}
function clearTable() {
  evenCol.innerHTML = null;
  oddCol.innerHTML = null;
}
