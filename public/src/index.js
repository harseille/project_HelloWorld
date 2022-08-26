import render from './dom/render.js';
import App from './App.js';
import observer from './dom/observer.js';

render(App, document.querySelector('#root'));
window.addEventListener('popstate', () => render());

observer();
