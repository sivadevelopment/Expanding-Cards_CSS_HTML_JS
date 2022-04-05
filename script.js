const panels = document.querySelectorAll(".panel");
panels.forEach((pannel) => {
  console.log(pannel);
  pannel.addEventListener("click", () => {
    removeActiveClass();
    pannel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((pannel) => {
    pannel.classList.remove("active");
  });
}
