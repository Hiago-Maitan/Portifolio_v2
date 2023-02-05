const scrollToSkills = () =>{
    window.scroll({
        top: 2000,
        behavior:"smooth",
    });
};

document.querySelector("#menu_skills").onclick = scrollToSkills;