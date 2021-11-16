/* eslint-disable no-alert */
/* eslint-disable no-undef */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/App';
import swRegister from './utils/sw-register';
import '@fortawesome/fontawesome-free/js/all';

import './components/skip-to-content';
import './components/app-bar';
import './components/jumbotron-main';
import './components/main-content';
import './components/foo-bar';

const skipBtn = document.querySelector('.skip-link');

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('ul'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skipBtn.addEventListener('click', () => {
  document.querySelector('#maincontent').focus();
});

window.addEventListener('offline', () => {
  alert('Oops, internet disconnected. check your connection.');
});
