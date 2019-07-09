'use strict'

function Router() {
  this.page = null;
}

// Router config
Router.prototype.buildDOM = function(url, parentElement) {
  switch (url) {
    case '/':
      this.generateLandingPage(parentElement);
      break;
    case '/movies':
      this.generateMoviesPage(parentElement);
      break;
    default: 
      this.generateLandingPage(parentElement);
  }
}

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
}

Router.prototype.generateMoviesPage = function(parentElement) {
  this.page = new MoviesPage(parentElement);
  this.page.generate();
}

// we set Router as a global vvble/instance, so we won't need to call router each time we render a page
var routerInstance = new Router();