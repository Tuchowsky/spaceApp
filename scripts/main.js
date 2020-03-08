const input = document.querySelector('.space__input');
const button = document.querySelector('.space__button');
const url = 'https://images-api.nasa.gov/search?q=';
let inputValue = '';
//pobranie elemntu z HTML do ktorego bedziemy wstrzykiwać responce

button.addEventListener('click', onButtonClick);

function onButtonClick(event) {
    event.preventDefault();
    inputValue = input.value;
    input.value = '';


    $.ajax({
        type: 'GET',
        url: url + inputValue,
        success: function (response) {


            //przypisanie response do zmiennej
            console.log(response.collection.items)
            //operatory += badz -=
            //element.innerHTML += '<img src="' + zmiennaZobrazkiem + '" alt="zdjecie" />'
        },
        error: function (error) {
            console.log(error);
        }
    });
    console.log(inputValue);
    // event.target.innerHTML = 'jestem z JSa';

}
