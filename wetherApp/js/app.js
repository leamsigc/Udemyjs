window.addEventListener('DOMContentLoaded',() => {
    const weather = new Weather('miami','usa');
    const ui = new UI;

weather.getWeather()
    .then(data => {
        console.log(data);
        ui.displayWeather(data);
    })
    .catch(err => console.log(err));
});