const openMenu = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#close");
const db = document.querySelector("#db-bg");

openMenu.addEventListener("click", function(e) {
    db.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
})

closeMenu.addEventListener("click", function(e) {
    db.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});