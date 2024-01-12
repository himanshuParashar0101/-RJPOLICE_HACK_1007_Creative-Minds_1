var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingMenuToggle() {
  settingsMenu.classList.toggle("setting-menu-height");
}

darkBtn.onclick = function() {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
}
