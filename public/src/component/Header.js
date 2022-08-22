import Component from '../core/Component.js';
import render from '../dom/render.js';
import { NewTravelLogModal } from './index.js';

class Header extends Component {
  render() {
    const path = window.location.pathname;
    const newTravelLogModal = new NewTravelLogModal().render();
    const navList = [
      { href: '/main', content: '여행일지' },
      { href: '#', content: '일정 만들기' },
      { href: '/login', content: '로그인' },
    ];

    // prettier-ignore
    return `
      <header class="header">
        <nav class="nav">
          <h1 class="logo"><img src="./assets/images/HelloWorldLogo.svg" alt="Hello World" /></h1>
          <ul class="nav__list">
           ${navList.map(({ href, content }) => {
            if(path === '/' && href !== '/login') return '';

            return `<li class="nav__item ${path === href ? 'active' : ''}">
            <a href="${href}" class="nav__item__link">${content}</a>
            </li>`
           }).join('')}
          </ul>
        </nav>
      </header>
      <div class="newTravelLogModal">
      ${newTravelLogModal}
      </div>
    `;
  }

  link(e) {
    if (!e.target.matches('.nav__item__link')) return;

    e.preventDefault();
    const path = e.target.getAttribute('href');

    if (path === '#') {
      document.querySelector('.newTravelLogModal .dimmed__layer').classList.remove('hide');
    } else {
      window.history.pushState({}, path, window.location.origin + path);
      render();
    }
  }

  addEventListener() {
    return [{ type: 'click', selector: '.nav__list', handler: this.link }];
  }
}

export default Header;
