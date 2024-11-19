var arrayProjects = [
  {
    imgURL: "assets/imgProjects/bikcraft.jpg",
    webLink: "https://hiago-maitan.github.io/Bikcraft/",
  },
  {
    imgURL: "assets/imgProjects/tela-login.PNG",
    webLink: "https://hiago-maitan.github.io/Tela-De-Login/",
  },
  {
    imgURL: "assets/imgProjects/sartori.png",
    webLink: "https://www.sartoriesquadriasrp.com.br/",
  },
  {
    imgURL: "assets/imgProjects/mi2.png",
    webLink: "https://www.localhost/mi2engenharia.com.br/",
  },
  {
    imgURL: "assets/imgProjects/formMultistep.png",
    webLink: "https://form-multistep.vercel.app/",
  },
  {
    imgURL: "assets/imgProjects/snapclima.PNG",
    webLink: "https://hiago-maitan.github.io/Snapclima/",
  },
  {
    imgURL: "assets/imgProjects/novafitos.png",
    webLink: "https://www.novafitos.com.br/",
  },
  {
    imgURL: "assets/imgProjects/viandarefeicoes.png",
    webLink: "https://www.viandarefeicoes.com.br/",
  }
];

// -- Criando as tags HTML no Javascript -- //

for (var indice = 0; indice < arrayProjects.length; indice++) {
  var projects = document.getElementById("projects");
  projects.innerHTML += `
    <a href=${arrayProjects[indice].webLink} target="_blank"><img src=${arrayProjects[indice].imgURL} alt="img-project"></a>
    `;
}
