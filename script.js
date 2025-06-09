document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector(".nav ul");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("form-response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 2 || !email.includes("@") || message.length < 5) {
      responseMsg.textContent = "Пожалуйста, заполните все поля корректно.";
      responseMsg.style.color = "red";
      return;
    }

    responseMsg.textContent = "Спасибо! Ваше сообщение отправлено.";
    responseMsg.style.color = "green";
    form.reset();
  });
});
