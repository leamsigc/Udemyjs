class UI {
    constructor(){
        this.w_location = document.querySelector('.weather_location');
        this.w_desc = document.querySelector('.weather_condition');
        this.w_grades = document.querySelector('.weather_grades');
        this.w_humidity = document.querySelector('.weather_details > ul li:first-of-type span');
    }
    displayWeather(data){
        this.w_location.textContent = data.name.toUpperCase();
        this.w_desc.textContent = data.weather[0].description;
        this.w_grades.innerHTML= `${data.main.temp} &#8457;`;
        this.w_humidity.textContent = data.main.humidity ;
    }
}