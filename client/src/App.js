import Component from './core/Component.js';
import { Login, Signup } from './component/index.js';
import { route, routes } from './core/router.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    route('/', Login);
    route('/signup', Signup);
    return routes();
  }
}

export default App;
