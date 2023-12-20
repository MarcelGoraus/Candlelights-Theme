var formatMoney = function (cents, format) {
  if (typeof cents == "string") {
    cents = cents.replace(".", "");
  }
  var value = "";
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || this.money_format;

  function defaultOption(opt, def) {
    return typeof opt == "undefined" ? def : opt;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ",");
    decimal = defaultOption(decimal, ".");

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split("."),
      dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
      cents = parts[1] ? decimal + parts[1] : "";

    return dollars + cents;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case "amount":
      value = formatWithDelimiters(cents, 2);
      break;
    case "amount_no_decimals":
      value = formatWithDelimiters(cents, 0);
      break;
    case "amount_with_comma_separator":
      value = formatWithDelimiters(cents, 2, ".", ",");
      break;
    case "amount_no_decimals_with_comma_separator":
      value = formatWithDelimiters(cents, 0, ".", ",");
      break;
  }

  return formatString.replace(placeholderRegex, value);
};

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

AOS.init({
  once: true,
});
