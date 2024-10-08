document.addEventListener("DOMContentLoaded", function() {
  const pass_field = document.querySelector(".pass-key");
  const showBtn = document.querySelector(".show");
  const loginForm = document.querySelector("form");

  showBtn.addEventListener("click", function () {
      if (pass_field.type === "password") {
          pass_field.type = "text";
          showBtn.textContent = "HIDE";
          showBtn.style.color = "#3498db";
      } else {
          pass_field.type = "password";
          showBtn.textContent = "SHOW";
          showBtn.style.color = "#222";
      }
  });

  loginForm.addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Redirect to the other page
      window.location.href = "index.html";
  });
});
