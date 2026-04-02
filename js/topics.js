(function () {
  document.querySelectorAll("[data-modal-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-modal-target");
      var dlg = id && document.getElementById(id);
      if (dlg && typeof dlg.showModal === "function") {
        dlg.showModal();
      }
    });
  });

  document.querySelectorAll(".topic-modal__close").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dialog = btn.closest("dialog");
      if (dialog) dialog.close();
    });
  });
})();
