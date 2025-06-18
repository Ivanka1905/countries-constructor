"use strict";

function Country({ title, capital, population, area } = {}) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;

  this.showCountry = function () {
    console.log(
      `${this.title} - capital ${this.capital}. ${this.population} million of citizens, area of country - ${this.area} km²`
    );
  };
}

const ukraine = new Country({
  title: "Ukraine",
  capital: "Kyiv",
  population: "37.73",
  area: "603.628",
});
const unitedKingdom = new Country({
  title: "Great Britain",
  capital: "London",
  population: "65.68",
  area: "209.331",
});

ukraine.showCountry();
unitedKingdom.showCountry();

function getKeys(name) {
  for (let key in name) {
    if (typeof name[key] !== "function") {
      console.log(`${key}: ${name[key]}`);
    }
  }
}
getKeys(ukraine);
console.log("--------------------")
getKeys(unitedKingdom);
