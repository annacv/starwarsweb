'use strict'

function main() {
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var rootElement = document.querySelector('#root');
  var links = [
    { name: 'Home',
      url: '/'
    },
    { name: 'Movies',
      url: '/movies'
    },
  ];

  generateLayout();
  generateNavbar();
  addListenersToNavbar();
  activateRouter();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }

  function addListenersToNavbar() {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', changePage);
    })
  }

  function changePage(event) {
    var url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutInstance.main);
  }

  // we create a singletone, a unique instance to be able to use it along all project (so here we call the global var defined in Router.js)
  function activateRouter() {
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  }
};

window.addEventListener('load', main);