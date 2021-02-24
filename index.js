let formBtn = document.getElementById("close-form");
let form = document.getElementsByClassName("form");


formBtn.onclick = function toggler() {
    if (formBtn.innerText === 'X') {
        formBtn.innerText = '+';
        form[0].classList.toggle('hide')

    }
    else {
        form[0].classList.toggle('hide')
        formBtn.innerText = 'X'
    }
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
let emailList = [];

function validateForm() {
    if (!nameInput.value && !emailInput.value)
    {
        nameInput.style.border = "2px solid red";
        emailInput.style.border = "2px solid red";
        alert("Please enter your name and email")
    }

    else if (!nameInput.value)
    {
        nameInput.style.border = "2px solid red";
        alert("Please enter your name")
    }

    else if (!emailInput.value)
    {
        emailInput.style.border = "2px solid red";
        alert("Please enter your email")
    }

    else 
    {
        emailList.push({name:nameInput, email:emailInput})
        displayThankYou()
    }

}

form[0].addEventListener('submit', function(event) {
    event.preventDefault()
    validateForm()
})

const formContainer = document.getElementsByClassName('form-container');

function displayThankYou() {
    formContainer[0].innerText = "Thank you for subscribing!";
    setTimeout(function() {formContainer[0].style.display = 'none'}, 3000)
}

nameInput.addEventListener('change', function() {nameInput.style.border = 'none'});
emailInput.addEventListener('change', function() {emailInput.style.border = 'none'})

let cart = document.createElement('div');
let main = document.getElementsByTagName('main');

let cartItems = 0;

function addToCart() {
    if (cartItems === 0) 
    {
        cartItems = 1;
        cart.setAttribute("class", "cart-display")
        cart.innerText = "Your Cart: 1 item"
        main[0].appendChild(cart)
    }

    else
    {
        cartItems += 1;

        cart.innerText = `Your Cart: ${cartItems}`
    }
}