import Component from '../core/Component.js';
import render from '../dom/render.js';

class Login extends Component {
  render() {
    return `
    <form class="login" novalidate>
    <h2 class="login__title">log in</h2>
    <div class="input__form">
      <label for="userId">아이디</label>
      <input id="userId" type="text" name="userId" placeholder="abc@email.com" autocomplete="off" required />
      <p class="input__form__errorMsg error">아이디 형식에 맞게 입력해주세요.</p>
    </div>
    <div class="input__form">
      <label for="password">비밀번호</label>
      <input id="password" type="password" name="password" placeholder="***" autocomplete="off" required />
      <p class="input__form__errorMsg error">비밀번호 형식에 맞게 입력해주세요.</p>
    </div>
    <p class="login__errorMsg error">
      아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br />
      입력하신 내용을 다시 확인해주세요.
    </p>
    <button class="submit__btn" disabled>로그인</button>
    <p class="login__signup__btn">
      <span>회원이 아니세요?</span>
      <a href="#" class="link-signup">회원가입하기</a>
    </p>
  </form>
    `;
  }

  addEventListener() {
    const go = e => {
      e.preventDefault();
      window.history.pushState({}, '/signup', window.location.origin + '/signup');
      render();
    };
    return [{ type: 'click', selector: '.link-signup', handler: go }];
  }
}

export default Login;
