const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const subscriber = document.querySelector(".modal__text span");
const description = document.querySelector(".content__description");
const illustration = document.querySelector(".signup-illustration");
const modalButton = document.querySelector(".modal__button");
const form = document.querySelector(".content__form");
const label = document.querySelector(".form__control-label");
const email = document.querySelector(".form__control-email");

modalButton.addEventListener("click", () => {
  modal.classList.toggle("closed");
  backdrop.classList.toggle("closed");
  description.classList.toggle("closed");
  illustration.classList.toggle("closed");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value.trim().length === 0 || !email.value.includes("@")) {
    email.classList.remove("invalid");
    email.classList.add("invalid");

    if (!document.querySelector(".label-container p")) {
      label.insertAdjacentHTML("afterend", "<p>Valid email required</p>");
    }
    email.value = "";

    return;
  }

  if (document.querySelector(".label-container p")) {
    document.querySelector(".label-container p").remove();
    email.classList.remove("invalid");
  }
  const subscriberEmail = email.value;
  email.value = "";
  subscriber.innerHTML = subscriberEmail;

  description.classList.toggle("closed");
  illustration.classList.toggle("closed");
  modal.classList.toggle("closed");
  backdrop.classList.toggle("closed");
});
