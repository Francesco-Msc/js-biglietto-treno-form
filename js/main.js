//known prices and discounts

const kmPrice = 0.21;
const underAge = 18;
const overAge = 65;
const underDiscount = 20;
const overDiscount = 40;

//get form from dom

const myForm = document.getElementById('priceCalculator');

//user input area

const kmInput = document.getElementById('kmInput');
const ageInput = document.getElementById('ageInput');

//price output

const yourPrice = document.getElementById('price')

//read the input data before submiting the form

myForm.addEventListener('submit', function(event){
    event.preventDefault();

    //transform input data into numbers

    const age = Number(ageInput.value);
    const km = Number(kmInput.value);

    //verification if km and age are not numbers if so i get an alert

    if ((isNaN (km) || isNaN(age)) || ((age < 0) || (km < 0))){
        alert('ops... qualcosa è andato storto prova ad inserire un numero valido nei campi richiesti');
    }
    
    //full price

    let price = km * kmPrice

    //discounted prices

    if (age < underAge){
        price = price - ((price * underDiscount) / 100);
    } else if (age > overAge){
        price = price - ((price * overDiscount) / 100);
    }
    
    yourPrice.innerHTML = `€ ${ price.toFixed(2)}`
    document.getElementById('priceArea').classList.remove('d-none');

    //clear input areas
    kmInput.value = '' ;
    ageInput.value = '' ;
});