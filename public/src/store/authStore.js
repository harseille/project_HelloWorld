import render from '../dom/render.js';

const signinSchema = {
  email: {
    value: '',
    get isValid() {
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value);
    },
    error: '이메일 형식에 맞게 입력해 주세요.',
  },
  password: {
    value: '',
    get isValid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    error: '영문 또는 숫자를 6~12자 입력하세요.',
  },
  get isValid() {
    return this.email.isValid && this.password.isValid;
  },
  serverError: '',
};

const signupSchema = {
  ...signinSchema,
  // username : value가 ''일 때, 두 글자 이하일 때,숫자가 아닐 때,특수문자가 아닐 때,한글만
  username: {
    value: '',
    get isValid() {
      return /^[가-힣]{2,}$/.test(this.value);
    },
    error: '이름 형식에 맞게 입력해주세요.',
  },
  nickname: {
    value: '',
    get isValid() {
      return !!this.value;
    },
    error: '닉네임 형식에 맞게 입력해주세요.',
  },
  passwordCheck: {
    value: '',
    get isValid() {
      return signupSchema.password.value === this.value;
    },
    error: '비밀번호 형식에 맞게 입력해주세요.',
  },

  get isValid() {
    return (
      this.email.isValid &&
      this.password.isValid &&
      this.passwordCheck.isValid &&
      this.nickname.isValid &&
      this.username.isValid &&
      this.checked.isValid
    );
    // 체크박스 클릭 조건에 따라  => change 이벤트가 발생하는 시점에서 state 관리,
  },
  checked: {
    privacy: false,
    term: false,
    error: '위의 약관에 동의해주세요.',
    get isValid() {
      return signupSchema.checked.privacy && signupSchema.checked.term;
    },
  },
  serverError: '',
};

const isChecked = e => {
  const { name } = e.target;
  signupSchema.checked[name] = e.target.checked;

  render();
};

const vaildate = e => {
  const { name } = e.target;

  signupSchema[name].value = e.target.value;
  if (name === 'email') {
    signupSchema.serverError = '';
  }

  render();
};

const initValue = () => {
  signinSchema.email.value = '';
  signinSchema.password.value = '';
  signinSchema.serverError = '';
  signupSchema.username.value = '';
  signupSchema.nickname.value = '';
  signupSchema.passwordCheck.value = '';
  signupSchema.checked.privacy = false;
  signupSchema.checked.term = false;
  signupSchema.serverError = '';
};

export { signinSchema, signupSchema, vaildate, initValue, isChecked };
