import Component from './core/Component.js';
import { Header, Footer } from './component/index.js';
import { routes } from './core/router.js';

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
}

export default App;
