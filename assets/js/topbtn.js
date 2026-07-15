  const scrollTopBtn = document.getElementById("scrollTopBtn");
  function toggleScrollBtn() {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", toggleScrollBtn);
scrollTopBtn.addEventListener("click", scrollToTop);

