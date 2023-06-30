document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navigation-toggle");
  const sidebarMenu = document.querySelector(".sidebar-menu");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");

  toggleButton.addEventListener("click", function () {
    sidebarMenu.classList.toggle("active"); // Aktiviert/deaktiviert die Klasse "active" der Sidebar
    sidebarOverlay.classList.toggle("active"); // Aktiviert/deaktiviert die Klasse "active" des Overlays
  });

  sidebarOverlay.addEventListener("click", function () {
    sidebarMenu.classList.remove("active"); // Deaktiviert die Klasse "active" der Sidebar beim Klicken auf das Overlay
    sidebarOverlay.classList.remove("active"); // Deaktiviert die Klasse "active" des Overlays beim Klicken darauf
  });
});