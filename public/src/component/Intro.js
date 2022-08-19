import Component from '../core/Component.js';

class Intro extends Component {
  render() {
    return `<div class="intro">
    <header class="header">
      <nav class="nav">
        <h1 class="logo"><img src="./assets/images/HelloWorldLogo.svg" alt="Hello World" /></h1>
        <ul class="nav__list">
          <li class="nav__item"><a href="" class="nav__item__link">로그인</a></li>
        </ul>
      </nav>
    </header>
    <section class="intro__copywriter">
      <h2 class="intro__copywriter__title">
        <span>함께 만드는 여행 계획</span>
        <strong>Hello World</strong>
      </h2>
      <a href="#" class="intro__copywriter__link">여행일지 둘러보기</a>
      <footer class="footer">
        <small class="footer__copyright">&copy; HelloWorld. All rights reserved.</small>
      </footer>
    </section>
    <section class="intro__service">
      <h2 class="a11yHidden">서비스 이용자 및 여행일지 수, 비디오</h2>
      <div class="intro__service__info">
        <dl>
          <dt>여행일지</dt>
          <dd>93</dd>
        </dl>
        <dl>
          <dt>이용자 수</dt>
          <dd>117,432</dd>
        </dl>
      </div>
      <video autoplay muted title="여행 비디오">
        <source src="/assets/videos/MainMovie3.mp4" />
      </video>
    </section>
  </div>`;
  }
}
export default Intro;
