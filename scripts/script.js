var arrayProjects = [
    {
        imgURL: "../public/devLinks.PNG",
        webLink: "https://my-dev-links-henna.vercel.app/"
    },
    {
        imgURL: "../public/formMultistep.png",
        webLink: "https://form-multistep.vercel.app/"
    },
    {
        imgURL: "../public/habits.PNG",
        webLink: "https://hiago-maitan.github.io/Habit_Tracker/"
    },
    {
        imgURL: "../public/snapclima.PNG",
        webLink: "https://hiago-maitan.github.io/Snapclima/"
    },
    {
        imgURL: "../public/rocketcoffee.png",
        webLink: "https://bright-chimera-e4e454.netlify.app/"
    },
    {
        imgURL: "../public/pokeTrunfo.PNG",
        webLink: "https://hiago-maitan.github.io/Super_PokeTrunfo/"
    },
]

// -- Criando as tags HTML no Javascript -- //

for (var indice = 0; indice < arrayProjects.length; indice++) {
    var projects = document.getElementById("projects")
    projects.innerHTML += `
    <a href=${arrayProjects[indice].webLink}><img src=${arrayProjects[indice].imgURL} alt="img-project"></a>
    `
}

// for (var indice = 0; indice < arrayProjects.length; indice++) {
//     var aLinkProject = document.getElementById("aLinkProject")
//     var imgProject = document.getElementById("imgProject")
//     aLinkProject.href += `${arrayProjects[indice].webLink}`
//     imgProject.src += `${arrayProjects[indice].imgURL}`
// }




