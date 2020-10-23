

window.onload = initPage;

function initPage() {
  var nome_curso = queryString("curso");
  recoveryData(nome_curso);
}



  
function recoveryData(nome_curso){
   
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
          recoveryInformation(curso)
        }
      }
    }; 
}

function recoveryInformation(data){
    console.log(data);
    const $titulo = $("#nome_curso");
    const $canal = $("#nome_canal");
    $titulo.append(data.nome);
    const nome_canal =`<a href="${data.url_canal}" target="_blank">${data.nome_canal}</a>`;
    $canal.append(nome_canal);
    

    recoveryVideos(data.videos)

}

function recoveryVideos(videos){
    const $videos = $("#video");
    console.log(typeof videos);
    console.log(videos);
    console.log(videos.length);

    for(let i = 0; i < videos.length; i++){
        const video = videos[i];

        const video_title  = `<h3>${video.nome_video}</h3>`;
        $videos.append(video_title);

        const video_container = `<iframe width="853" height="480" src="${video.url_video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
        $videos.append(video_container);
        
    }
}
