const scrollToProjects = () =>{
    window.scroll({
        top: 1040,
        behavior:"smooth",
    });
};

document.querySelector("#menu_projects").onclick = scrollToProjects;

