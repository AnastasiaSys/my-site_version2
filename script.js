document.addEventListener("DOMContentLoaded", function() {
  const banner = document.querySelector(".delivery-banner");
  const closeBtn = document.querySelector(".delivery-close");

  if (banner && closeBtn) {
    closeBtn.addEventListener("click", function() {
      banner.style.display = "none";
    });
  }
});

