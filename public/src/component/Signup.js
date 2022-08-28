/* eslint-disable no-undef */
import Component from '../core/Component.js';
import render from '../dom/render.js';
import store from '../store/store.js';
import { signupSchema, vaildate, isChecked, initValue } from '../store/authStore.js';

class Signup extends Component {
  render() {
    const { serverError, checked, email, password, nickname, passwordCheck, username, isValid } = signupSchema;

    return `<form class="login signup only-signup" novalidate>
    <h2 class="login__title">sign up</h2>
    <div class="input__form signup__id__form">
      <label for="userId">아이디</label>
      <input id="userId" type="text" name="email" value="${
        email.value
      }" placeholder="abc@email.com" autocomplete="off" required />
      <p class="input__form__errorMsg error ${!email.value || email.isValid ? '' : 'show'}">${email.error}</p>
      <p class="input__form__errorMsg error ${serverError ? 'show' : ''}">${serverError}</p>
    </div>
    <div class="input__form">
      <label for="username">이름</label>
      <input id="username" type="text" name="username" value="${
        username.value
      }" placeholder="둘리" autocomplete="off" required />
      <p class="input__form__errorMsg error ${!username.value || username.isValid ? '' : 'show'}">${username.error}</p>
    </div>
    <div class="input__form">
      <label for="nickname">닉네임</label>
      <input id="nickname" type="text" name="nickname" value="${
        nickname.value
      }" placeholder="nickname" autocomplete="off" required />
      <p class="input__form__errorMsg error ${!nickname.value || nickname.isValid ? '' : 'show'}">${nickname.error}</p>
    </div>
    <div class="input__form">
      <label for="password">비밀번호</label>
      <input id="password" type="password" name="password" value="${
        password.value
      }" placeholder="******" autocomplete="off" required />
      <p class="input__form__errorMsg error ${!password.value || password.isValid ? '' : 'show'}">${password.error}</p>
    </div>
    <div class="input__form">
      <label for="passwordCheck">비밀번호 확인</label>
      <input
        id="passwordCheck"
        type="password"
        name="passwordCheck"
        value="${passwordCheck.value}"
        placeholder="******"
        autocomplete="off"
        required />
      <p class="input__form__errorMsg error ${!passwordCheck.value || passwordCheck.isValid ? '' : 'show'}">${
      passwordCheck.error
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
    <!-- <p class="login__errorMsg error ${checked.isValid ? '' : 'show'}">
    ${checked.error}
    </p> -->
 
    <button class="submit__btn" ${isValid ? '' : 'disabled'}>회원가입</button>
    <button class="signup__back__btn" type="button">뒤로가기</button>
  </form>`;
  }

  async fetchSignup(e) {
    if (!e.target.classList.contains('only-signup')) return;
    console.log(e.target);
    console.log(e.target, '나는 회원가입');
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries([...formData.entries()]));
    try {
      const response = await axios.post('/auth/signup', Object.fromEntries([...formData.entries()]));

      // userInfo 전역에 추가
      store.state = {
        ...store.state,
        userInfo: response.data,
      };
      console.log('리다이렉트 일어나니?');
      window.history.pushState({}, '/main', window.location.origin + '/main');
      console.log('리다이렉트 일어나니? 222222222222222222');

      initValue();
    } catch (e) {
      const errorMsg = e.response.data.error;
      signupSchema.serverError = errorMsg;
      render();
      document.getElementById('userId').focus();
    }
  }

  addEventListener() {
    return [
      { type: 'submit', selector: '.signup', handler: this.fetchSignup },
      { type: 'change', selector: '.checkbox__form', handler: isChecked },
      { type: 'keyup', selector: '.signup', handler: _.throttle(vaildate, 400, { leading: false }) },
    ];
  }
}

export default Signup;
