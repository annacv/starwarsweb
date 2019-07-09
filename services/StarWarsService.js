'use strict'

function StarWarsService() {
  this.baseURL = 'https://swapi.co/api/';
}

StarWarsService.prototype.getAllMovies = async function() {
  var response = await fetch(`${this.baseURL}films`);
  var data = await response.json();
  return data.results;
}

// service also declared as a singleton var
var starWarsServiceInstance = new StarWarsService();

