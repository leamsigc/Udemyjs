window.addEventListener('DOMContentLoaded', getWeather);

const storage = new Storage();
const w_Location = storage.getLocationData();
const weather = new Weather(w_Location.city,w_Location.country);
const ui = new UI();

function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data);
            ui.displayWeather(data);
        })
        .catch(err => console.log(err));
}

//open modal 
const btnOpenModal = document.querySelector('#btn_modal');
const btnCloseModal = document.querySelector('#close_btn');

btnCloseModal.addEventListener('click', openModal);
btnOpenModal.addEventListener('click', openModal);

function openModal(){
    const modal = document.querySelector('#modal');

    modal.classList.toggle('modal_active');
}

//change location form 
const form = document.querySelector('#changeLocation');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;

    if(!city || !country) return false;
    console.log(city,country);

    //change location
    weather.changeLocation(city,country);

    getWeather();

    //save location to localStorage
    storage.setLocationData(city,country);

    openModal();
});