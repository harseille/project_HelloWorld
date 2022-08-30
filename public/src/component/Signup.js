/* eslint-disable no-undef */
import Component from '../core/Component.js';
import render from '../dom/render.js';
import store from '../store/store.js';
import { signupSchema, validate, isChecked, initValue } from '../store/authStore.js';

class Signup extends Component {
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
    const { email, password, passwordCheck, username, nickname, checked, serverError, isValid } = signupSchema;

    return `
    <form class="signin signup only-signup" novalidate>
      <h2 class="signin__title">sign up</h2>
      <div class="input__form signup__id__form">
        <label for="userId">아이디</label>
        <input id="userId" type="text" name="email" value="${
          email.value
        }" placeholder="abc@email.com" autocomplete="off" required />
        <p class="input__form__errorMsg error ${!email.value || email.isValid ? '' : 'show'}">${email.error}</p>
        <p class="input__form__errorMsg error ${serverError ? 'show' : ''}">${serverError}</p>
      </div>
      <div class="input__form">
      <label for="password">비밀번호</label>
      <input id="password" type="password" name="password" value="${
        password.value
      }" maxlength="12" placeholder="******" autocomplete="off" required />
      <p class="input__form__errorMsg error ${!password.value || password.isValid ? '' : 'show'}">${password.error}</p>
    </div>
    <div class="input__form">
      <label for="passwordCheck">비밀번호 확인</label>
      <input
        id="passwordCheck"
        type="password"
        name="passwordCheck"
        value="${passwordCheck.value}"
        maxlength="12"
        placeholder="******"
        autocomplete="off"
        required />
      <p class="input__form__errorMsg error ${!passwordCheck.value || passwordCheck.isValid ? '' : 'show'}">${
      passwordCheck.error
    }</p>
    </div>
      <div class="input__form">
        <label for="username">이름</label>
        <input id="username" type="text" name="username" value="${
          username.value
        }" maxlength="12" placeholder="둘리" autocomplete="off" required />
        <p class="input__form__errorMsg error ${!username.value || username.isValid ? '' : 'show'}">${
      username.error
    }</p>
      </div>
      <div class="input__form">
        <label for="nickname">닉네임</label>
        <input id="nickname" type="text" name="nickname" value="${
          nickname.value
        }" maxlength="12" placeholder="nickname" autocomplete="off" required />
        <p class="input__form__errorMsg error ${!nickname.value || nickname.isValid ? '' : 'show'}">${
      nickname.error
    }</p>
      </div>
     
      <div class="checkbox__form">
        <input id="privacy" ${checked.privacy ? 'checked' : ''} type="checkbox" name="privacy" required />
        <label for="privacy" >개인 정보 수집에 동의합니다.(필수)</label>
        <a href="#" class="checkbox__form__link">보기</a>
      </div>
      <div class="checkbox__form">
        <input id="term" ${checked.term ? 'checked' : ''} type="checkbox" name="term" required />
        <label for="term">이용약관에 동의합니다.(필수)</label> 
        <a href="#" class="checkbox__form__link">보기</a>
      </div>
      <button class="submit__btn" ${isValid ? '' : 'disabled'}>회원가입</button>
      <button class="signup__back__btn" type="button">뒤로가기</button>
    </form>`;
  }

  async fetchSignup(e) {
    if (!e.target.classList.contains('only-signup')) return;

    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const response = await axios.post('/auth/signup', Object.fromEntries([...formData.entries()]));

      store.state = {
        ...store.state,
        userInfo: response.data,
      };

      window.history.pushState({}, '/main', window.location.origin + '/main');
      render();
    } catch (e) {
      const errorMsg = e.response.data.error;
      signupSchema.serverError = errorMsg;

      render();
      document.getElementById('userId').focus();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  backHistory() {
    window.history.back();
  }

  addEventListener() {
    return [
      { type: 'keyup', selector: '.signup', handler: _.throttle(validate, 200, { leading: false }) },
      { type: 'change', selector: '.checkbox__form', handler: isChecked },
      { type: 'submit', selector: '.signup', handler: this.fetchSignup },
      { type: 'click', selector: '.signup__back__btn', handler: this.backHistory },
    ];
  }
}

export default Signup;
