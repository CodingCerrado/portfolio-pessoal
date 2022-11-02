async function getContent(paginaId, callback) {
    var paginas = {};

    await fetch("/paginas/resume/index.html")
      .then((res) => res.text())
      .then((data) => paginas.resume = data);
    await fetch("/paginas/home/index.html")
      .then((res) => res.text())
      .then((data) => paginas.home = data);
    await fetch("/paginas/projects/index.html")
      .then((res) => res.text())
      .then((data) => paginas.projects = data);
    await fetch("/paginas/contact/index.html")
      .then((res) => res.text())
      .then((data) => paginas.contact = data);

  callback(paginas[paginaId]);
}

function carregarConteudo() {
  var contentDiv = document.getElementById("app"),
    paginaId = location.hash.substring(1);

  getContent(paginaId, function (content) {
    contentDiv.innerHTML = content;
  });

}

if (!location.hash) {
  location.hash = "#home";
}

carregarConteudo();

window.addEventListener("hashchange", carregarConteudo);
