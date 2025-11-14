// ------------------------------
// Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// ------------------------------
// Dropdown Menu
const dropBtn = document.getElementById("dropdown-btn");
const dropMenu = document.getElementById("dropdown-menu");

dropBtn.addEventListener("click", () => {
  dropMenu.classList.toggle("hidden");
});

// ------------------------------
// Modal Popup
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));

// ------------------------------
// Counter
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// ------------------------------
// Key Events
const keyDisplay = document.getElementById("key-display");
document.addEventListener("keydown", (e) => {
  keyDisplay.textContent = `You pressed: ${e.key}`;
});
