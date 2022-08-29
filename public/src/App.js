/* eslint-disable no-undef */
import Component from './core/Component.js';
import { Header, Footer } from './component/index.js';
import { routes } from './core/router.js';
import store from './store/store.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const $header = new Header().render();
    const $main = routes();
    const $footer = new Footer().render();

    return `
      ${$header}
      ${$main}
      ${$footer}
    `;
  }

  async fetchUserInfo(e) {
    // userInfo
    try {
      const userInfo = await axios.post('/userInfo', {});
      store.state = {
        userInfo: { ...store.state.userInfo, ...userInfo.data },
      };
    } catch (e) {
    } finally {
      // Todo finally 에서 처리시 render가 두 번 됨 리팩토링 필요
      const mainTripSchedules = await axios.get('/mainTripSchedules');
      store.state = {
        tripSchedules: mainTripSchedules.data,
      };
    }
  }

  addEventListener() {
    return [{ type: 'DOMContentLoaded', selector: 'window', component: 'App', handler: this.fetchUserInfo }];
  }
}

export default App;
