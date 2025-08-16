
  document.addEventListener("DOMContentLoaded", () => {
    const row = document.querySelector(".trending-row");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    // Scroll amount (you can adjust)
    const scrollAmount = 300;

    if (leftBtn && rightBtn && row) {
      leftBtn.addEventListener("click", () => {
        row.scrollBy({
          left: -scrollAmount,
          behavior: "smooth"
        });
      });

      rightBtn.addEventListener("click", () => {
        row.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      });
    }
  });
  document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    const answer = button.nextElementSibling;

    if (button.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});


