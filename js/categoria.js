window.onload = initPage;

function initPage() {
  var categoria = queryString("categoria");
  listarCursos(categoria);
}

function paginaCurso(valor) {
  window.location = "curso.html?curso="+valor;
}

// função pra ler querystring
function queryString(parameter) {
  var loc = location.search.substring(1, location.search.length);
  var param_value = false;
  var params = loc.split("&");
  for (i = 0; i < params.length; i++) {
    param_name = params[i].substring(0, params[i].indexOf("="));
    if (param_name == parameter) {
      param_value = params[i].substring(params[i].indexOf("=") + 1);
    }
  }
  if (param_value) {
    return param_value;
  } else {
    return undefined;
  }
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
        const type_categoria = `<button onclick="paginaCurso(\'${curso.nome_curso}\')">${curso.nome_curso}</button>`;
        $list.append(type_categoria);

        console.log(curso.nome_curso);
      }
    }
  };
}
