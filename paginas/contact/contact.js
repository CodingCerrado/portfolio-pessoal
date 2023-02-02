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

// Alterei a codificação que encontrei na internet para o jeito em que aprendi.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataForm = [];
  for (let item of form) {
    dataForm.push(item.value);
    console.log(item.value); // Manter qual? O objeto? ou item.value?
  }
  // console.log(dataForm);
});

// GERADO PELO CHATGPT // Removendo o  submit do objeto.
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const dataForm = [];
//   for (let item of form) {
//     if (item.type !== "submit") {
//       dataForm.push(item.value);
//     }
//   }
//   console.log(dataForm);
// });

// GERADO PELO CHATGPT // Removendo o Submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const dataForm = [];
//   const elements = form.elements;
//   for (let i = 0; i < elements.length - 1; i++) {
//     const item = elements[i];
//     dataForm.push(item.value);
//   }
//   console.log(dataForm);
// });
