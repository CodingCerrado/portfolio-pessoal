"use strict";

const form = document.querySelector(".contact-right-content");
const nome = document.querySelector(".contact-input-name");
const sobrenome = document.querySelector(".contact-input-surname");
const email = document.querySelector(".contact-input-email");
const assunto = document.querySelector(".contact-input-subject");
const mensagem = document.querySelector(".contact-input-message");
const button = document.querySelector(".contact-input-button");
const enviar = document.querySelector(".contact-input-send");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //
  checkInputs();
});

function checkInputs() {
  const nameValue = nome.value;
  const surnameValue = sobrenome.value;
  const emailValue = email.value;
  const subjectValue = assunto.value;
  const messageValue = mensagem.value;

  //   if (emailValue === "") {
  //     setErrorFor(nomeValue, texto)
  //   }
}