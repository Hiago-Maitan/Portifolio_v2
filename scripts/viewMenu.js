const btnMobile = document.getElementById("btn-mobile")

function toggleMenu(){
    const nav = document.getElementById("nav")
    const header = document.getElementById("header")

    header.classList.toggle("active")
    nav.classList.toggle("active")

}

btnMobile.addEventListener('click', toggleMenu)