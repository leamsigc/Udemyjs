class Storage {
    constructor(){
        this.city;
        this.country;
        this.defaultCountry = 'US';
        this.defaultCity = 'Orlando';
    }

    getLocationData (){
        const city = localStorage.getItem('city');
        const country = localStorage.getItem('country');
        if(!city || !country){
            this.city = this.defaultCity;
            this.country = this.defaultCountry;
        }
        else{
            this.city = city;
            this.country = country;
        }
        return{
            city:this.city,
            country: this.country
        };
    }

    setLocationData (city,country){
       localStorage.setItem('city',city);
       localStorage.setItem('country',country);

    }
}