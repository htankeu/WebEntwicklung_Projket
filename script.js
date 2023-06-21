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

const bestSelDiv = document.querySelector('.best')
const divImageBest = document.querySelector('.BestSeller')

const materialDiv = document.querySelector('.Material')
const divImageMaterial = document.querySelector('.Materiallen')



configDiv.addEventListener('click',()=>{
    pulldownFrage(divAnswerConfig,configDiv)
})

bestSelDiv.addEventListener('click',()=>{
    pulldownFrage(divImageBest,bestSelDiv)
})

materialDiv.addEventListener('click',()=>{
    pulldownFrage(divImageMaterial,materialDiv)
})



// function to drop-down the question auf der Home 
function pulldownFrage (place,parent){
    place.style.height = "0px"
    let chevron

    if(istChild(place,answeConfig[0])) answeConfig[0].style.visibility = "hidden"

    for(elem of chevrons){
        if(istChild(parent,elem)) chevron = elem
    }

    chevron.style.transform = "rotate(0deg)"

    if(saw %2 == 0){
        place.style.height = "150px"
        
        
        if(istChild(place,answeConfig[0])) answeConfig[0].style.visibility = "visible"

        chevron.style.transform = "rotate(180deg)"
        
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


function removeAllChild(section){
    // remove all  existed child
    rChild = section.lastElementChild

    while(rChild){
        section.removeChild(rChild)
        rChild = section.lastElementChild
    }
}






// read a JSON file to have a information of Kits elements
const kits = document.getElementsByTagName("figure")
const navColors = document.querySelector('.colors')
const colorsToChoose = navColors.getElementsByTagName("li")
const seeElem = document.querySelector('.seeElems')

const kitsTop = document.querySelector('#ktop')
const kitsShort = document.querySelector('#kshort')
const kitsSockets = document.querySelector('#kscokets')


let kitChoosed = ""
let colorChoosed = ""


for(kit of kits){
    for(child of kit.childNodes){ 
        child.addEventListener('click',(e)=>{
            removeAllChild(seeElem)

            kitChoosed = e.target.id

            for(color of colorsToChoose){

                color.addEventListener('click',(f)=>{
                    removeAllChild(seeElem)

                    colorChoosed = f.target.id
                    chooseKit(kitChoosed,colorChoosed)

                })
            }
        })
    }
}


function chooseKit(kitToChoose,color){
    fetch("data.json").then(resolve => resolve.json())
.then(data => data.forEach(element =>{
        
    if(element['part'] == kitToChoose && element['color'] == color){
         var elemDiv = document.createElement('div')
         elemDiv.classList.add('imageOfElem')
         var elemImg = document.createElement('img')
         elemImg.src = element['url']
         elemDiv.appendChild(elemImg)
         seeElem.appendChild(elemDiv)

         elemImg.addEventListener('click',(e)=>{
            if(kitToChoose == 'top') kitsTop.src = e.target.src
            else if(kitToChoose == 'short') kitsShort.src = e.target.src
            else if(kitToChoose == 'socket') kitsSockets.src = e.target.src
         })
    } 
    
}))
}

//Login Page
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Vérification des informations de connexion
    if (username === 'utilisateur' && password === 'motdepasse') {
      alert('Connexion réussie !'); // Remplacez par votre propre logique de connexion
    } else {
      alert('Identifiant ou mot de passe incorrect !'); // Remplacez par votre propre logique de connexion
    }
});


