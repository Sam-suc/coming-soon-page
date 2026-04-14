const form = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const errorIcon = document.getElementById("error-icon");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //standard email regex

  console.log(emailValue);

  if (!emailPattern.test(emailValue)) {
    // prevent the form from being send
    e.preventDefault();

    // display the error icon and error text
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");

    // add red border
    emailInput.style.borderColor = "hsl(0, 82%, 59%)";
    errorMessage.style.color = "red";
  } else {
    // If valid hide errors
    errorIcon.classList.add("hidden");
    errorMessage.classList.add("hidden");
    emailInput.style.borderColor = "";
  }
});
