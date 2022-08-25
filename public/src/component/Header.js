import Component from '../core/Component.js';
import store from '../store/store.js';
import { NewTravelLogModal, MypageModal } from './Header/index.js';
import render from '../dom/render.js';

class Header extends Component {
  render() {
    const newTravelLogModal = new NewTravelLogModal(store.state).render();
    const mypageModal = new MypageModal(store.state).render();

    const isLogined = store.state?.userInfo.userId;
    const path = window.location.pathname;
    const profilePic = store.state?.userInfo.profilePic;
    const navList = [
      { href: '/main', content: '여행일지' },
      { href: '#', content: '일정 만들기' },
      { href: '/login', content: '로그인' },
      {
        href: '#',
        content: `<img class="travel-log__item__user-info__profile-pic" src="${
          profilePic || '/assets/images/users/profileDefault.png'
        }" alt="${store.state?.userInfo.nickname}">${mypageModal}`,
      },
    ];

    return `
      <header id="top"  class="header ${path === '/intro' ? 'intro__header' : ''}">
        <nav class="nav">
          <h1 class="logo">
            <a class="logo__link" href="/intro">
              <img src="./assets/images/HelloWorldLogo.svg" alt="HelloWorld" />
            </a>
          </h1>
          <ul class="nav__list">
            ${navList
              .map(({ href, content }, idx) => {
                if (path === '/intro' && href !== '/login') return '';
                if (isLogined && href === '/login') return '';
                return `<li id="headerNav${idx}" class="nav__item ${path === href ? 'active' : ''}">
            <a href="${href}" class="nav__item__link">${content}</a>
            </li>`;
              })
              .join('')}
          </ul>
        </nav>
      </header>
      <div class="newTravelLogModal">
        ${newTravelLogModal}
      </div>
    `;
  }

  showMyPageModal(e) {
    if (e.target.closest('li').id !== 'headerNav3') return;

    store.state = {
      ...store.state,
      isShowModal: store.state.isShowModal === 'myPageModal' ? '' : 'myPageModal',
    };
  }

  hideMyPageModal(e) {
    if (store.state.isShowModal !== 'myPageModal') return;
    console.log(e.target);
  }

  showNewTripScheduleModal(e) {
    if (e.target.closest('li').id !== 'headerNav1') return;

    store.state = {
      ...store.state,
      isShowModal: 'newTripScheduleModal',
    };
  }

  link(e) {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    if (!path || path === '#') return;

    window.history.pushState({}, path, window.location.origin + path);
    render();
  }

  activeNewTripScheduleModal(e) {
    // tripSchedule 상태 초기화
    // tripSchedule 모달을 보여줘야 한다.

    store.state = {
      ...store.state,
      isShowModal: 'newTripScheduleModal',
    };
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.nav__list', component: 'headerNav3', handler: this.showMyPageModal },
      { type: 'mouseleave', selector: '.nav__list', component: 'headerNav3', handler: this.MyPageModal },
      { type: 'click', selector: '.nav__list', component: 'headerNav1', handler: this.showNewTripScheduleModal },
      { type: 'click', selector: '.nav__list', handler: this.link },
      { type: 'click', selector: '.nav__list', handler: this.logout },
      { type: 'click', selector: '.nav__list', handler: this.activeNewTripScheduleModal },
    ];
  }
}

export default Header;
