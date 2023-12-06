var arrayProjects = [
  {
    imgURL: "../assets/imgProjects/bikcraft.jpg",
    webLink: "https://hiago-maitan.github.io/Bikcraft/",
  },
  {
    imgURL: "../assets/imgProjects/tela-login.PNG",
    webLink: "https://hiago-maitan.github.io/Tela-De-Login/",
  },
  {
    imgURL: "../assets/imgProjects/adacoffee.PNG",
    webLink: "https://hiago-maitan.github.io/AdaCoffee/",
  },
  {
    imgURL: "../assets/imgProjects/devLinks.PNG",
    webLink: "https://my-dev-links-henna.vercel.app/",
  },
  {
    imgURL: "../assets/imgProjects/formMultistep.png",
    webLink: "https://form-multistep.vercel.app/",
  },
  {
    imgURL: "../assets/imgProjects/snapclima.PNG",
    webLink: "https://hiago-maitan.github.io/Snapclima/",
  }
];

// -- Criando as tags HTML no Javascript -- //

for (var indice = 0; indice < arrayProjects.length; indice++) {
  var projects = document.getElementById("projects");
  projects.innerHTML += `
    <a href=${arrayProjects[indice].webLink} target="_blank"><img src=${arrayProjects[indice].imgURL} alt="img-project"></a>
    `;
}
