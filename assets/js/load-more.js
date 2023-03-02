const loadMoreButton = document.querySelector(".load-more");
const poemasGroup = document.querySelector(".poemas-group");
const poemas = poemasGroup.querySelectorAll(".poema");

let poemasToShow = 10;

function showPoemas() {
  for (let i = 0; i < poemas.length; i++) {
    if (i < poemasToShow) {
      poemas[i].classList.add("show");
    }
  }
}

showPoemas();

loadMoreButton.addEventListener("click", function() {
  poemasToShow = poemas.length;
  showPoemas();
  loadMoreButton.style.display = "none";
});
