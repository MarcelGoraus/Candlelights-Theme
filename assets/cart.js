document.addEventListener("DOMContentLoaded", function () {
  // Finde das Warenkorb-Symbol
  var cartIcon = document.querySelector(".bx-shopping-bag");

  // Finde das Schließen-Symbol im Header
  var closeBtn = document.querySelector(".close-drawer");

  // Füge einen Klick-Event-Listener zum Öffnen/Schließen des Cart Drawers hinzu
  cartIcon.addEventListener("click", function () {
    toggleCartDrawer();
  });

  closeBtn.addEventListener("click", function () {
    // Schließe den Cart Drawer, wenn auf das Schließen-Symbol geklickt wird
    closeCartDrawer();
  });

  // Funktion zum Überprüfen, ob der Cart Drawer geöffnet ist
  function cartDrawerIsOpen() {
    var cartDrawer = document.querySelector(".cartDrawer");
    return cartDrawer.classList.contains("open");
  }

  // Funktion zum Öffnen/Schließen des Cart Drawers
  function toggleCartDrawer() {
    if (cartDrawerIsOpen()) {
      closeCartDrawer();
    } else {
      openCartDrawer();
    }
  }

  // Funktion zum Öffnen des Cart Drawers
  function openCartDrawer() {
    var cartDrawer = document.querySelector(".cartDrawer");
    cartDrawer.classList.add("open");
  }

  // Funktion zum Schließen des Cart Drawers
  function closeCartDrawer() {
    var cartDrawer = document.querySelector(".cartDrawer");
    cartDrawer.classList.remove("open");
  }
});
