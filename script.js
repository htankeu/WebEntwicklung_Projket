// Javascript Teil unserer Aufgabe


// operationen um die MenuListe anzuzeigen und zu closeMenu, beim kleinen Dimensionen
const sidemenu = document.getElementById("sideMenu")

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}