"use strict";

const form = document.querySelector(".ct-right-content");
const nome = document.querySelector(".ct-input-name");
const sobrenome = document.querySelector(".ct-input-surname");
const email = document.querySelector(".ct-input-email");
const assunto = document.querySelector(".ct-input-subject");
const mensagem = document.querySelector(".ct-input-message");
const button = document.querySelector(".ct-submit-button");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const dataForm = new FormData(form);

//   for (const item of form) {
//     console.log(item.value);
//   }
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataForm = [];

  for (let item of form) {
    dataForm.push(item.value)
    console.log(item.value);
  }
});