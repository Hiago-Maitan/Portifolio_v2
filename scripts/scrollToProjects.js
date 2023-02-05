const scrollToProjects = () =>{
    window.scroll({
        top: 1040,
        behavior:"smooth",
    });
};

document.querySelector("#menu_projects").onclick = scrollToProjects;

const scrollToHamburgerProjects = () =>{
    window.scroll({
        top: 1190,
        behavior:"smooth",
    });
};

document.querySelector("#menuHamburger_projects").onclick = scrollToHamburgerProjects;

