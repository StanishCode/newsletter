const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal__button");
const form = document.querySelector(".content__form");
const email = document.querySelector(".form__control-email");

modalButton.addEventListener("click", () => {
  modal.classList.toggle("closed");
  backdrop.classList.toggle("closed");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(email.value);
});
