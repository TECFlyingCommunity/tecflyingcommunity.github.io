window.onload = initPage;

function initPage() {
  var nome_curso = queryString("curso");
  recoveryData(nome_curso);
}

function recoveryData(nome_curso) {
  var requestURL = "https://tecflyingcommunity.github.io/json/cursos.json";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    var cursos = request.response;

    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      if (curso.nome_curso == nome_curso) {
        recoveryInformation(curso);
      }
    }
  };
}

function recoveryInformation(data) {
  console.log(data);
  const $titulo = $("#nome_curso");
  const $canal = $("#nome_canal");
  $titulo.append(data.nome);
  const nome_canal = `<a class="canal" href="${data.url_canal}" target="_blank">${data.nome_canal}</a>`;
  $canal.append(nome_canal);

  recoveryVideos(data.videos);
}

function recoveryVideos(videos) {
  const $videos = $("#videos");
  console.log(typeof videos);
  console.log(videos);
  console.log(videos.length);

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];

    // const video_title = `<h3>${video.nome_video}</h3>`;
    // $videos.append(video_title);
    var video_container;
    if(i === 0 ){
       video_container = `<div class="carousel-item active ">
      <iframe class="d-block mx-auto" width="80%" height="480" src="https://www.youtube.com/embed/${video.url_video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
    }else{
       video_container = `<div class="carousel-item">
      <iframe class="d-block mx-auto" width="80%" height="480" src="https://www.youtube.com/embed/${video.url_video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
    }


    

    $videos.append(video_container);
  }
}
