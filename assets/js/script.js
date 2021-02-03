window.onload = function () {
  document.getElementById("navMenu").addEventListener("click", function () {
    var links = document.getElementById("navLinks");
    links.classList.toggle("visible");
  });
};
