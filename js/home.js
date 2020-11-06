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

      // const type_categoria = `<button onclick="paginaCategoria(\'${categoria.nome_categoria}\')">${categoria.nome}</button>`;

      const type_categoria = `<div onclick="paginaCategoria(\'${categoria.nome_categoria}\')">
        <div class="card card-curso column">
          <img src="IMG/Logo/Ruby.png" alt="" class="card img-fluid">
        </div>
        <h2>${categoria.nome}</h2>
      </div>`;

      $list.append(type_categoria);

      console.log(categoria.nome);
    }
  };
}
