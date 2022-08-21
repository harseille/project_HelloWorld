import Component from '../core/Component.js';
import render from '../dom/render.js';
import { NewTravelLogModal } from './index.js';

class Header extends Component {
  render() {
    const newTravelLogModal = new NewTravelLogModal().render();
    return `
      <header class="header">
        <nav class="nav">
          <h1 class="logo"><img src="./assets/images/HelloWorldLogo.svg" alt="Hello World" /></h1>
          <ul class="nav__list">
            <li class="nav__item"><a href="#" class="nav__item__link">여행일지</a></li>
            <li class="nav__item"><a href="#" class="nav__item__link showNewTravelLogModal">일정 만들기</a></li>
            <li class="nav__item"><a href="#" class="nav__item__link">로그인</a></li>
          </ul>
        </nav>
      </header>
      <div class="newTravelLogModal">
      ${newTravelLogModal}
      </div>
    `;
  }

  showNewTravelLogModal(e) {
    e.preventDefault();
    document.querySelector('.newTravelLogModal .dimmed__layer').classList.remove('hide');
  }

  addEventListener() {
    return [{ type: 'click', selector: '.showNewTravelLogModal', handler: this.showNewTravelLogModal }];
  }
}

export default Header;
