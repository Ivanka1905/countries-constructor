'use strict';

function Country(title, capital, population, area) {
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;

    this.showCountry = function() {
        return `${title} - capital ${capital}. ${population} million of citizens, area of country - ${area} km²`
    }
};

const ua = new Country('Ukraine', 'Kyiv', '37.73', '603.628');
const uk = new Country('Great Britain', 'London', '65.68', '209.331')
console.log(ua)
console.log(uk)

function getKeysAndValues(country) {
    for(let key in country) {
      if (typeof country[key] === 'function') 
        return country[key]
    }
    
}
console.log(typeof ua.showCountry)
getKeysAndValues(ua)
for (const key in ua) {
     console.log(`${key}: ${ua[key]}`)
        
}
