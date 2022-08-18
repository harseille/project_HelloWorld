import Component from './core/Component.js';
import { Login, Signup } from './component/index.js';
import { routes } from './core/router.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this);
    return routes();
  }
}

export default App;
