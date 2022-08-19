import Component from '../core/Component.js';
import render from '../dom/render.js';

class Signup extends Component {
  render() {
    return `<form class="login signup" novalidate>
    <h2 class="login__title">sign up</h2>
    <div class="input__form signup__id__form">
      <label for="userId">아이디</label>
      <input id="userId" type="text" name="email" placeholder="abc@email.com" autocomplete="off" required />
      <p class="input__form__errorMsg error">아이디 형식에 맞게 입력해주세요.</p>
    </div>
    <div class="input__form">
      <label for="username">이름</label>
      <input id="username" type="text" name="name" placeholder="abc@email.com" autocomplete="off" required />
      <p class="input__form__errorMsg error">이름 형식에 맞게 입력해주세요.</p>
    </div>
    <div class="input__form">
      <label for="nickname">닉네임</label>
      <input id="nickname" type="text" name="nickname" placeholder="abc@email.com" autocomplete="off" required />
      <p class="input__form__errorMsg error">닉네임 형식에 맞게 입력해주세요.</p>
    </div>
    <div class="input__form">
      <label for="password">비밀번호</label>
      <input id="password" type="password" name="password" placeholder="abc@email.com" autocomplete="off" required />
      <p class="input__form__errorMsg error">비밀번호 형식에 맞게 입력해주세요.</p>
    </div>
    <div class="input__form">
      <label for="passwordCheck">비밀번호 확인</label>
      <input
        id="passwordCheck"
        type="password"
        name="passwordCheck"
        placeholder="abc@email.com"
        autocomplete="off"
        required />
      <p class="input__form__errorMsg error show">비밀번호와 일치하지 않습니다.</p>
    </div>
    <div class="checkbox__form">
      <input id="privacy" type="checkbox" name="privacy" required />
      <label for="privacy">개인 정보 수집에 동의합니다.(필수)</label>
      <a href="#" class="checkbox__form__link">보기</a>
    </div>
    <div class="checkbox__form">
      <input id="term" type="checkbox" name="term" required />
      <label for="term">이용약관에 동의합니다.(필수)</label>
      <a href="#" class="checkbox__form__link">보기</a>
    </div>
    <p class="login__errorMsg error">위의 약관에 동의해주세요.</p>
    <button class="submit__btn" disabled>회원가입</button>
    <button class="signup__back__btn" type="button">뒤로가기</button>
  </form>`;
  }

  async fetch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post('/auth/signup', Object.fromEntries([...formData.entries()]));
      if (response.status === 200) {
        window.history.pushState({}, '/main', window.location.origin + '/main');
        render();
      }
    } catch (e) {
      alert(e);
    }
  }

  addEventListener() {
    return [{ type: 'submit', selector: '.signup', handler: this.fetch }];
  }
}

export default Signup;
