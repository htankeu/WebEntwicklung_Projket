// Javascript Teil unserer Aufgabe
let heartIcon = document.getElementsByClassName('heart-icon');

for (let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener('click', function () { // agiert auf die elemente mit gleichem KlasseName
        heartIcon[i].classList.toggle('clicked');
    })};

// operationen um die MenuListe anzuzeigen und zu closeMenu, beim kleinen Dimensionen
const sidemenu = document.getElementById("sideMenu")

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}

//spcrip der site aniprodukt--------------------------------------------------------
let cart = document.querySelector(".cart");
let cartfield = document.querySelector(".cart-field");
let add = document.getElementsByClassName('add');


for (let but of add) {
    but.onclick = e => {
        let item = Number(cart.getAttribute('data-count') || 0); //wenn kein wert definiert ist, wird null zugewiesen
        cart.setAttribute('data-count', item + 1);          // update attribute
        cart.classList.add('on');

        //image animated to cart
        let parent = e.target.parentNode.parentNode.parentNode;
        let image = parent.querySelector('img');
        let span = document.createElement('span');
        span.className = 'image-carior';
        parent.insertBefore(span, parent.lastElementChild);
        
        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(() => {
            span.classList.remove('active');
            span.removeChild(s_image);
        }, 500);

        //copy and paste

        let clone = parent.cloneNode(true);
        clone.querySelector('.add').style.display = 'none';
        clone.querySelector('.add').removeAttribute('class');
        cartfield.appendChild(clone);

        if (clone) {
            cart.onclick = () => {
                cartfield.classList.toggle('display')
            }
        }
    }
<<<<<<< HEAD
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


=======
}
>>>>>>> 4bcd48cfdc69f5f1c789564c8d633c78ed14c13a
