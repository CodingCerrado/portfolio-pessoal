"use strict";

const form = document.querySelector(".ct-right-content");
const nome = document.querySelector(".ct-input-name");
const sobrenome = document.querySelector(".ct-input-surname");
const email = document.querySelector(".ct-input-email");
const assunto = document.querySelector(".ct-input-subject");
const mensagem = document.querySelector(".ct-input-message");
const button = document.querySelector(".ct-submit-button");

form.addEventListener("submit", (e) => {
  alert("funcionou!");
  e.preventDefault();
  const dataForm = new FormData(form);

  for (const item of form) {
    console.log(item.value);
  }
});

function checkInputs() {
  const nameValue = nome.value;
  const surnameValue = sobrenome.value;
  const emailValue = email.value;
  const subjectValue = assunto.value;
  const messageValue = mensagem.value;

  // if (emailValue === "") {
  //   console.log("Preencha os dados!");
  // }
}
