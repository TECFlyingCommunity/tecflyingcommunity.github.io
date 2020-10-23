window.onload = initPage;

function initPage() {
  listarCategorias();
}

function paginaCategoria(valor) {
  window.location = "categoria.html?categoria=" + valor;
}

function listarCategorias() {
  const $list = $("#categorias-list");
  var requestURL = "https://tecflyingcommunity.github.io/json/categorias.json";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    var categorias = request.response;

    for (let i = 0; i < categorias.length; i++) {
      const categoria = categorias[i];

      const type_categoria = `<button onclick="paginaCategoria(\'${categoria.nome_categoria}\')">${categoria.nome}</button>`;
      $list.append(type_categoria);

      console.log(categoria.nome);
    }
  };
}
