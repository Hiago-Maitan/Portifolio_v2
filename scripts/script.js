var arrayProjects = [
    {
        imgURL: "../assets/devLinks.PNG",
        webLink: "https://my-dev-links-henna.vercel.app/"
    },
    {
        imgURL: "../assets/formMultistep.png",
        webLink: "https://form-multistep.vercel.app/"
    },
    {
        imgURL: "../assets/habits.PNG",
        webLink: "https://hiago-maitan.github.io/Habit_Tracker/"
    },
    {
        imgURL: "../assets/snapclima.PNG",
        webLink: "https://hiago-maitan.github.io/Snapclima/"
    },
    {
        imgURL: "../assets/rocketcoffee.png",
        webLink: "https://bright-chimera-e4e454.netlify.app/"
    },
    {
        imgURL: "../assets/pokeTrunfo.PNG",
        webLink: "https://hiago-maitan.github.io/Super_PokeTrunfo/"
    },
]

// -- Criando as tags HTML no Javascript -- //

for (var indice = 0; indice < arrayProjects.length; indice++) {
    var projects = document.getElementById("projects")
    projects.innerHTML += `
    <a href=${arrayProjects[indice].webLink} target="_blank"><img src=${arrayProjects[indice].imgURL} alt="img-project"></a>
    `
}

// for (var indice = 0; indice < arrayProjects.length; indice++) {
//     var aLinkProject = document.getElementById("aLinkProject")
//     var imgProject = document.getElementById("imgProject")
//     aLinkProject.href += `${arrayProjects[indice].webLink}`
//     imgProject.src += `${arrayProjects[indice].imgURL}`
// }




