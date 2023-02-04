function viewMenu() {
    var menuList = document.getElementById("menuList");
    // menuList.style.display = 'block'
    if (menuList.style.display == 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
}