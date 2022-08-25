import Component from '../core/Component.js';
import store from '../store/store.js';
import { NewTravelLogModal, MypageModal } from './Header/index.js';
import render from '../dom/render.js';

class Header extends Component {
  render() {
    const isLogined = store.state?.userInfo.userId;
    const path = window.location.pathname;
    const profilePic = store.state?.userInfo.profilePic;
    const nickname = store.state?.userInfo.nickname;
    const { isShowModal } = store.state;

    const newTravelLogModal = new NewTravelLogModal(store.state).render();
    const mypageModal = new MypageModal({ isShowModal, nickname }).render();

    const navList = [
      { href: '/main', content: '여행일지', type: 'main' },
      { href: '#', content: '일정 만들기', type: 'newTripScheduleModal' },
      { href: '/login', content: '로그인', type: 'login' },
      {
        href: '#',
        content: `<img class="nav__list__profile-pic" src="${
          profilePic || '/assets/images/users/profileDefault.png'
        }" alt="${nickname}">${mypageModal}`,
        type: 'mypageModal',
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
              .map(({ href, content, type }, idx) => {
                if (path === '/intro' && href !== '/login') return '';
                if (isLogined && href === '/login') return '';
                if (!isLogined && type === 'mypageModal') return '';
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
      localCommon: {
        isShowModal: store.state.isShowModal === 'myPageModal' ? '' : 'myPageModal',
      },
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
      localCommon: {
        isShowModal: 'newTripScheduleModal',
      },
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
      localCommon: {
        isShowModal: 'newTripScheduleModal',
      },
    };
  }

  async logout(e) {
    if (e.target.textContent !== '로그아웃') return;
    try {
      const response = await axios.post('/logout', {});
      if (response.status === 200) {
        store.clearState();
      }
    } catch (e) {
      console.error(e);
    }
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.nav__list', component: 'headerNav3', handler: this.showMyPageModal },
      { type: 'mouseleave', selector: '.nav__list', component: 'headerNav3', handler: this.MyPageModal },
      { type: 'click', selector: '.nav__list', component: 'headerNav1', handler: this.showNewTripScheduleModal },
      { type: 'click', selector: '.nav__list', handler: this.link },
      { type: 'click', selector: '.nav__list', component: 'logout', handler: this.logout },
      { type: 'click', selector: '.nav__list', handler: this.activeNewTripScheduleModal },
    ];
  }
}

export default Header;
