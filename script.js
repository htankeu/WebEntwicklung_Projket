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

//spcrip der site aniprodukt
let cart = document.querySelector(".cart");
let cartfield = document.querySelector(".cart-field");
let add = document.getElementsByClassName('add');


for (let but of add) {
    but.onclick = e => {
        let item = Number(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', item + 1);
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
}