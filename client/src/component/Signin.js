import Component from '../core/Component.js';
import render from '../dom/render.js';
import store from '../store/store.js';
import { signinSchema, validate, initValue } from '../store/authStore.js';

class Signin extends Component {
  init() {
    initValue();
    store.state = {
      localCommon: {
        ...store.state.localCommon,
        path: window.location.pathname,
      },
    };
  }

  render() {
    const { email, password, isValid, serverError } = signinSchema;

    return `
    <form class="signin only-signin" novalidate>
      <h2 class="signin__title">log in</h2>
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
        }" maxlength="12" placeholder="***" autocomplete="off" required />
        <p class="input__form__errorMsg error ${password.value === '' || password.isValid ? '' : 'show'}">${
      password.error
    }</p>
      </div>
      <p class="signin__errorMsg error ${serverError ? 'show' : ''}">
        ${serverError}
      </p>
      <button class="submit__btn" ${isValid ? '' : 'disabled'}>로그인</button>
      <p class="signin__signup__btn">
        <span>회원이 아니세요?</span>
        <a href="/signup" class="link-signup">회원가입하기</a>
      </p>
    </form>`;
  }

  async fetchSignin(e) {
    if (!e.target.classList.contains('only-signin')) return;

    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const response = await axios.post('/auth/signin', Object.fromEntries([...formData.entries()]));

      window.history.pushState({}, '/main', window.location.origin + '/main');

      store.state = {
        ...store.state,
        userInfo: response.data,
      };
    } catch (e) {
      const errorMsg = e.response.data.error;

      signinSchema.serverError = errorMsg;

      render();
    }
  }

  link(e) {
    e.preventDefault();

    const path = e.target.getAttribute('href');

    window.history.pushState({}, path, window.location.origin + path);

    render();
  }

  addEventListener() {
    return [
      { type: 'keyup', selector: '.signin', handler: _.throttle(validate, 200, { leading: false }) },
      { type: 'submit', selector: '.signin', handler: this.fetchSignin },
      { type: 'click', selector: '.link-signup', handler: this.link },
    ];
  }
}

export default Signin;
