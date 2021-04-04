// 'use strict';
import View from './App/CreatorFunctions/View.js';
import App from './App.js';
window.onload = () => {
  //This will render application to the div#root on index.html
  View.render(App(), 'root');
};
