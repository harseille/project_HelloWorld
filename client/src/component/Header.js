import Component from '../core/Component.js';
import store from '../store/store.js';
import { NewTravelLogModal, MypageModal } from './Header/index.js';
import render from '../dom/render.js';
import logo from '../../assets/images/HelloWorldLogo.svg';

class Header extends Component {
  render() {
    const path = window.location.pathname;

    const {
      localCommon,
      localNewTripSchedule,
      localDatePicker,
      tripSchedule,
      localCommon: { isShowModal },
      userInfo: { userId: isLogined, nickname, profilePic },
    } = store.state;

    const newTravelLogModal =
      isShowModal === 'newTripScheduleModal'
        ? new NewTravelLogModal({ localCommon, localNewTripSchedule, localDatePicker, tripSchedule }).render()
        : '';
    const mypageModal = isShowModal === 'myPageModal' ? new MypageModal({ isShowModal, nickname }).render() : '';

    const navList = [
      { href: '/main', content: '여행일지', type: 'main' },
      { href: '#', content: '일정 만들기', type: 'newTripScheduleModal' },
      { href: '/signin', content: '로그인', type: 'signin' },
      {
        href: '#',
        content: `<img class="nav__list__profile-pic" src="${
          profilePic || '/assets/images/users/profileDefault.png'
        }" alt="${nickname}">${mypageModal}`,
        type: 'myPageModal',
      },
    ];

    return `
      <header id="top"  class="header ${path === '/intro' ? 'intro__header' : ''}">
        <nav class="nav">
          <h1 class="logo">
            <a class="logo__link" href="/intro">
              <img src="${logo}" alt="HelloWorld" />
            </a>
          </h1>
          <ul class="nav__list">
            ${navList
              .map(({ href, content, type }) => {
                if (path === '/intro' && href !== '/signin') return '';
                if (isLogined && href === '/signin') return '';
                if (!isLogined && type === 'myPageModal') return '';
                return `<li id="${type}" class="nav__item ${path === href ? 'active' : ''}">
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

  hideMyPageModal(e) {
    if (store.state.localCommon.isShowModal !== 'myPageModal' || e.target.closest('#myPageModal')) return;

    store.state = {
      localCommon: {
        ...store.state.localCommon,
        isShowModal: '',
      },
    };
  }

  clickNavItem(e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__list')) return;

    const path = e.target.closest('a').getAttribute('href');
    const { id } = e.target.closest('li');

    if (path === '#') {
      if (id === 'newTripScheduleModal' && window.location.pathname === '/trip-planner-edit') return;
      if (id === 'newTripScheduleModal' && !store.state.userInfo.userId) {
        window.history.pushState({}, 'Signin', window.location.origin + '/signin');
        render();
        return;
      }

      store.state = {
        localCommon: {
          ...store.state.localCommon,
          isShowModal: id,
        },
      };
    } else {
      window.history.pushState({}, path, window.location.origin + path);
      render();
    }
  }

  async logout(e) {
    try {
      const response = await axios.post('/logout', {});
      if (response.status === 200) {
        store.clearState();
        window.history.pushState({}, 'main', window.location.origin + '/main');
        render();
      }
    } catch (e) {
      console.error(e);
    }
  }

  addEventListener() {
    return [
      { type: 'click', selector: 'window', component: 'header', handler: this.hideMyPageModal },
      { type: 'click', selector: '.nav__list', handler: this.clickNavItem },
      { type: 'click', selector: '.logout', handler: this.logout },
    ];
  }
}

export default Header;
