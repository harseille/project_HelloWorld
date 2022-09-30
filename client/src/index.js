import render from './dom/render.js';
import App from './App.js';

console.log('start');
render(App, document.querySelector('#root'));
window.addEventListener('popstate', () => render());
