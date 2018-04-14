class Weather{
    constructor(city,state){
        this.city = city;
        this.state = state;

        this.apiKey = '768f10c39b6e09ced044affa134a08c6';
    }

    //get weather
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=imperial`);
        const responseData = await response.json();

        return responseData;
    }
}
