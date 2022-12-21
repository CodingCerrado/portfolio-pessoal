"use strict";

const form = document.querySelector(".contact-right-content");
const nome = document.querySelector(".name");
const sobrenome = document.querySelector(".surname");
const email = document.querySelector(".email");
const assunto = document.querySelector(".subject");
const mensagem = document.querySelector(".message");
const button = document.querySelector(".button");
const enviar = document.querySelector(".send");

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