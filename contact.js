const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success");


const successCard = document.createElement("div");
successCard.className = "success-card";
successCard.textContent = "✅ Thank you! Your message has been sent.";
document.body.appendChild(successCard);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  successMsg.hidden = true;
  successCard.classList.remove("show");

  const fields = ["name", "email", "subject", "message"];
  fields.forEach((id) => {
    const input = document.getElementById(id);
    const error = document.getElementById(`error-${id}`);
    error.textContent = "";
    input.classList.remove("invalid");

    if (!input.value.trim()) {
      error.textContent = "This field is required.";
      input.classList.add("invalid");
      valid = false;
    } else if (id === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)) {
      error.textContent = "Please enter a valid email address.";
      input.classList.add("invalid");
      valid = false;
    } else if (id === "message" && input.value.trim().length < 10) {
      error.textContent = "Message must be at least 10 characters.";
      input.classList.add("invalid");
      valid = false;
    }
  });

  if (valid) {
    form.reset();
    successCard.classList.add("show");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  }
});
