document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navbar").classList.remove("show");
    document.querySelector("body").classList.add(".offcanvas-backdrop");
  });
});
