import render from './dom/render.js';
import App from './App.js';

console.log(1);
render(App, document.querySelector('#root'));
console.log(2);
window.addEventListener('popstate', () => render());
console.log(3);
