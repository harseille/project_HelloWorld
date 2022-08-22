import Component from '../core/Component.js';
import render from '../dom/render.js';
import { Footer } from './index.js';

class Intro extends Component {
  render() {
    const $footer = new Footer().render();
    return `<div class="intro">
    <section class="intro__copywriter">
      <h2 class="intro__copywriter__title">
        <span>함께 만드는 여행 계획</span>
        <strong>Hello World</strong>
      </h2>
      <a href="/main" class="intro__copywriter__link">여행일지 둘러보기</a>
      ${$footer}
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
      <video autoplay loop muted title="여행 비디오">
        <source src="/assets/videos/MainMovie3.mp4" />
      </video>
    </section>
  </div>`;
  }

  link(e) {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    window.history.pushState({}, path, window.location.origin + path);
    render();
  }

  addEventListener() {
    return [{ type: 'click', selector: '.intro__copywriter__link', handler: this.link }];
  }
}
export default Intro;
