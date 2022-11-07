async function getContent(paginaId, callback) {
    var paginas = {};

    await fetch("https://raw.githubusercontent.com/CodingCerrado/portfolio-pessoal/2d3f9dccd859cb444ebf8334fb9a5e2ecb382883/paginas/resume/index.html")
      .then((res) => res.text())
      .then((data) => paginas.resume = data);
    await fetch("https://raw.githubusercontent.com/CodingCerrado/portfolio-pessoal/2d3f9dccd859cb444ebf8334fb9a5e2ecb382883/paginas/home/index.html")
      .then((res) => res.text())
      .then((data) => paginas.home = data);
    await fetch("https://raw.githubusercontent.com/CodingCerrado/portfolio-pessoal/2d3f9dccd859cb444ebf8334fb9a5e2ecb382883/paginas/projects/index.html")
      .then((res) => res.text())
      .then((data) => paginas.projects = data);
    await fetch("https://raw.githubusercontent.com/CodingCerrado/portfolio-pessoal/2d3f9dccd859cb444ebf8334fb9a5e2ecb382883/paginas/contact/index.html")
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