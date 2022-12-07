var paginas = {};

async function fetchPaginas() {
  const contentDiv = document.getElementById("app");
  contentDiv.innerHTML = "Loading page...";

  await fetch("paginas/resume/resume.html")
    .then((res) => res.text())
    .then((data) => (paginas.resume = data));
  await fetch("paginas/home/home.html")
    .then((res) => res.text())
    .then((data) => (paginas.home = data));
  await fetch("paginas/projects/projects.html")
    .then((res) => res.text())
    .then((data) => (paginas.projects = data));
  await fetch("paginas/contact/contact.html")
    .then((res) => res.text())
    .then((data) => (paginas.contact = data));
}

fetchPaginas().then(() => {
  console.log(location.hash)
  function getContent(paginaId, callback) {
    callback(paginas[paginaId]);
  }

  function carregarConteudo() {
    const contentDiv = document.getElementById("app"),
      paginaId = location.hash.substring(1);

    getContent(paginaId, function (conteudoDaPagina) {
      contentDiv.innerHTML = conteudoDaPagina;
    });
  }

  if (!location.hash) {
    location.hash = "#home";
  }

  carregarConteudo();

  window.addEventListener("hashchange", carregarConteudo);
});
