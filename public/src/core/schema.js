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
};
export { signinSchema, signupSchema };
