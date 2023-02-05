const scrollToAboutMe = () =>{
    window.scroll({
        top: 670,
        behavior:"smooth",
    });
};

document.querySelector("#menu_aboutMe").onclick = scrollToAboutMe;

