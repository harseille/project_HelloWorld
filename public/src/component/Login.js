import Component from '../core/Component.js';
import render from '../dom/render.js';
import store from '../store/store.js';
import { signinSchema } from '../core/schema.js';

class Login extends Component {
  render() {
    const { email, password } = signinSchema;

    return `
    <form class="login" novalidate>
    <h2 class="login__title">log in</h2>
    <div class="input__form">
      <label for="userId">아이디</label>
      <input id="userId" type="text" name="email" value="${
        email.value
      }" placeholder="abc@email.com" autocomplete="off" required />
      <p class="input__form__errorMsg error ${!email.value || email.isValid ? '' : 'show'}">${email.error}</p>
    </div>
    <div class="input__form">
      <label for="password">비밀번호</label>
      <input id="password" type="password" name="password" value="${
        password.value
      }" placeholder="***" autocomplete="off" required />
      <p class="input__form__errorMsg error ${password.value === '' || password.isValid ? '' : 'show'}">${
      password.error
    }</p>
    </div>
    <p class="login__errorMsg error">
      아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br />
      입력하신 내용을 다시 확인해주세요.
    </p>
    <button class="submit__btn" ${signinSchema.isValid ? '' : 'disabled'}>로그인</button>
    <p class="login__signup__btn">
      <span>회원이 아니세요?</span>
      <a href="/signup" class="link-signup">회원가입하기</a>
    </p>
  </form>`;
  }

  async fetch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries([...formData.entries()]));
    try {
      // eslint-disable-next-line no-undef
      const response = await axios.post('/auth/login', Object.fromEntries([...formData.entries()]));
      if (response.status === 200) {
        // userInfo 전역에 추가
        console.log(response.data);
        store.state = {
          ...store.state,
          userInfo: response.data,
        };

        window.history.pushState({}, '/main', window.location.origin + '/main');
        render();
      }
    } catch (e) {
      alert(e);
    }
  }

  link(e) {
    e.preventDefault();
    const path = e.target.getAttribute('href');

    window.history.pushState({}, path, window.location.origin + path);
    render();
  }

  vaildate(e) {
    const { name } = e.target;

    signinSchema[name].value = e.target.value.trim();

    render();
  }

  addEventListener() {
    return [
      { type: 'submit', selector: '.login', handler: this.fetch },
      { type: 'click', selector: '.link-signup', handler: this.link },
      { type: 'keyup', selector: '.login', handler: _.throttle(this.vaildate, 400, { leading: false }) },
    ];
  }
}

export default Login;
