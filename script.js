const form = document.querySelector("form");
// import requirejs from "./node_modules/requirejs";
// require("dotenv").config();
form.addEventListener("submit", submitForm);
const apiKey = need.API_KEY;
const url = need.URL;

function submitForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;

  const data = {
    fields: {
      Email: emailValue,
    },
  };

  fetch(url, {
    // API documentation > AUTHENTICATION kısmından url'i bulabilirsin
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey, // Senin API key
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
  const customAlert = document.getElementById("custom_alert");
  setTimeout(() => {
    customAlert.style.transform = "translateY(0)";
    customAlert.textContent = "You have been successfully added";
    setTimeout(() => {
      customAlert.style.transform = "translateY(-500px)";
    }, 2000);
  }, 1000);
}
