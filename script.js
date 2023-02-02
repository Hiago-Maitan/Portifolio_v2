var arrayProjects = [
    {
        imgURL: "../public/imgProjects/devLinks.PNG",
        webLink: "https://my-dev-links-henna.vercel.app/"
    },
    {
        imgURL: "../public/imgProjects/formMultistep.png",
        webLink: "https://fimgProjects/orm-multistep.vercel.app/"
    },
    {
        imgURL: "../public/imgProjects/habits.PNG",
        webLink: "https://himgProjects/iago-maitan.github.io/Habit_Tracker/"
    },
    {
        imgURL: "../public/imgProjects/snapclima.PNG",
        webLink: "https://himgProjects/iago-maitan.github.io/Snapclima/"
    },
    {
        imgURL: "../public/imgProjects/rocketcoffee.png",
        webLink: "https://bimgProjects/right-chimera-e4e454.netlify.app/"
    },
    {
        imgURL: "../public/imgProjects/pokeTrunfo.PNG",
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




