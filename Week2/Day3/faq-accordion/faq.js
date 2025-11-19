// Select all accordion buttons
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the associated content div
    const content = btn.nextElementSibling;

    // Toggle current content
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      // Close all other contents
      accordionBtns.forEach((b) => b.nextElementSibling.style.display = "none");
      // Open the clicked content
      content.style.display = "block";
    }
  });
});
