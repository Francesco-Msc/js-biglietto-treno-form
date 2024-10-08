//get form from dom
const myForm = document.getElementById('priceCalculator');

//user input area

const kmInput = document.getElementById('kmInput');
const ageInput = document.getElementById('ageInput');

//asigned variables

let age;
let km;

//read the input data before submiting the form

myForm.addEventListener('submit', function(event){
    event.preventDefault();

    //transform input data into numbers
    age = Number(ageInput.value);
    km = Number(kmInput.value);
    
    //clear input areas
    kmInput.value = '' ;
    ageInput.value = '' ;
});
