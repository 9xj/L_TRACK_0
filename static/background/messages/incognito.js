document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("goToExtension")
    .addEventListener("click", function (event) {
      event.preventDefault();
      chrome.tabs.update({
        url: "chrome://extensions?id=flahkgamhlgdgpoikkdjemmkdbcipflf",
      });
    });
});
