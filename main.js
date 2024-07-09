// main.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (passwordInput.value.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    console.log("Form submitted");
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);

    form.reset();
  });
});
