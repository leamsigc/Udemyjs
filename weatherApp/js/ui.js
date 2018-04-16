class UI {
    constructor(){
        this.w_location = document.querySelector('.weather_location');
        this.w_desc = document.querySelector('.weather_condition');
        this.w_grades = document.querySelector('.weather_grades');
        this.w_humidity = document.querySelector('.weather_details > ul li:first-of-type span');
        this.w_pressure = document.querySelector('li:nth-child(2)');
        this.w_min = document.querySelector('li:nth-child(3)');
        this.w_max = document.querySelector('li:nth-child(4)');
        
    }
    displayWeather(data){
        this.w_location.textContent = data.name.toUpperCase();
        this.w_desc.textContent = data.weather[0].description.toUpperCase();
        this.w_grades.innerHTML= `${data.main.temp} &#8457;`;
        this.w_humidity.textContent = data.main.humidity ;
        this.w_pressure.textContent = `Pressure : ${data.main.pressure}`;
        this.w_min.textContent = `Temperature-Min: ${data.main.temp_min}`;
        this.w_max.textContent = `Temperature-Max: ${data.main.temp_max}`;
    }
}