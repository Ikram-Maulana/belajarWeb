import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
// eslint-disable-next-line import/no-unresolved
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});
