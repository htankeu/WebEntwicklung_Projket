// Javascript Teil unserer Aufgabe
let saw = 0

// operationen um die MenuListe anzuzeigen und zu closeMenu, beim kleinen Dimensionen
const sidemenu = document.getElementById("sideMenu")

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}


// script to frage
const chevrons = document.getElementsByClassName('icon-chevron')    //all icon chevron in each Div

const configDiv = document.querySelector('.config')
const divAnswerConfig = document.querySelector('.textvon')
const answeConfig = divAnswerConfig.getElementsByTagName('p')

chevrons.innerHtml



configDiv.addEventListener('click',()=>{
    pulldownFrage(divAnswerConfig,configDiv)
})



// function to drop-down the question auf der Home 
function pulldownFrage (place,parent){
    place.style.height = "0px"
    let chevron

    if(istChild(place,answeConfig[0])) answeConfig[0].style.visibility = "hidden"

    for(elem of chevrons){
        if(istChild(parent,elem)) chevron = elem
    }

    chevron.innerHtml = '<i class="fa-solid fa-chevron-down"></i>'

    if(saw %2 == 0){
        place.style.height = "150px"
        
        if(istChild(place,answeConfig[0])) answeConfig[0].style.visibility = "visible"
        
        chevron.innerHtml = '<i class="fa-solid fa-chevron-up"></i>'
    }
    saw+=1
}


// function to know if a element is a child of another
function istChild(parent, child){
    let node = child.parentNode

    while(node != null){
        if(node == parent) return true

        node = node.parentNode
    }
    return false
}