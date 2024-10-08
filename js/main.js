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

//asigned variables

let age;
let km;
let price;

//read the input data before submiting the form

myForm.addEventListener('submit', function(event){
    event.preventDefault();

    //transform input data into numbers
    age = Number(ageInput.value);
    km = Number(kmInput.value);

    //price calcolations
    if (!isNaN (km)){                //verification if km is a number
        price = km * kmPrice         //full price
    } else{
        alert('ops... qualcosa è andato storto prova ad inserire un numero nei campi richiesti')
    }

    //discounted prices
    if (!isNaN(age)){                                           //verification if age is a number
        if (age < underAge){                                    //discount under 18
            price = price - ((price * underDiscount) / 100);
        } else if (age > overAge){                              //discount over 65
            price = price - ((price * overDiscount) / 100);
        }
        console.log(`€ ${ price.toFixed(2)}`);
    } else{
        
    }
    
    //clear input areas
    kmInput.value = '' ;
    ageInput.value = '' ;
});
