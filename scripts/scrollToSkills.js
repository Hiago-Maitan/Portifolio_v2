const scrollToSkills = () =>{
    window.scroll({
        top: 2000,
        behavior:"smooth",
    });
};

document.querySelector("#menu_skills").onclick = scrollToSkills;

const scrollToHamburgerSkills = () =>{
    window.scroll({
        top: 4000,
        behavior:"smooth",
    });
};

document.querySelector("#menuHamburger_skills").onclick = scrollToHamburgerSkills;