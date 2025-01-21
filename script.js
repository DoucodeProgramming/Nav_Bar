// @ts-nocheck
// Sélection des éléments nécessaires
const toggleButton = document.getElementById("navbar-toggle");
const slideMenu = document.getElementById("navbar-slide");
const menuLinks = document.querySelectorAll(".navbar-slide a"); // Tous les liens dans le menu déroulant

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
  slideMenu.classList.toggle("active");
}

// Ferme le menu si un lien est cliqué
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    slideMenu.classList.remove("active");
  });
});

// Ferme le menu si on clique en dehors
document.addEventListener("click", (event) => {
  const isClickInsideMenu = slideMenu.contains(event.target);
  const isClickOnToggle = toggleButton.contains(event.target);

  // Si le clic n'est ni sur le menu, ni sur le bouton toggle, on ferme le menu
  if (!isClickInsideMenu && !isClickOnToggle) {
    slideMenu.classList.remove("active");
  }
});

// Ajout de l'écouteur d'événement pour le bouton hamburger
toggleButton.addEventListener("click", toggleMenu);
