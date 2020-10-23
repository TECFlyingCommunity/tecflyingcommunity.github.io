
window.onload = initPage;

function initPage() {
  var categoria = queryString("categoria");
  listarCursos(categoria);
}

function paginaCurso(valor) {
  window.location = "curso.html?curso="+valor;
}


  
function listarCursos(categoria) {
  const $list = $("#cursos-list");
  var requestURL = "https://tecflyingcommunity.github.io/json/cursos.json";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    var cursos = request.response;

    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      if (curso.categoria == categoria) {
        const type_categoria = `<button onclick="paginaCurso(\'${curso.nome_curso}\')">${curso.nome}</button>`;
        $list.append(type_categoria);

        console.log(curso.nome_curso);
        console.log(curso);
      }
    }
  };
}
