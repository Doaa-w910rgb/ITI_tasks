const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "/", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("Thank you for contacting us!");
      form.reset();
    } else {
      alert("There was a problem submitting your form.");
    }
  };
  xhr.send(formData);
});
