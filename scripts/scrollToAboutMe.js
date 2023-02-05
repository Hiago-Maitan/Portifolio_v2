const scrollToAboutMe = () =>{
    window.scroll({
        top: 670,
        behavior:"smooth",
    });
};

document.querySelector("#menu_aboutMe").onclick = scrollToAboutMe;

const scrollToHamburgerAboutMe = () =>{
    window.scroll({
        top: 590,
        behavior:"smooth",
    });
};

document.querySelector("#menuHamburger_aboutMe").onclick = scrollToHamburgerAboutMe;

