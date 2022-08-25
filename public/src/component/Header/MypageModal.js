import Component from '../../core/Component.js';

class MypageModal extends Component {
  render() {
    const myPageLink = [
      {
        href: '/mypage',
        content: '마이페이지',
      },
      {
        href: '#',
        content: '로그아웃',
      },
    ];

    return `
    <div class="my-page-modal">
      <ul class="my-page-modal__list">
      ${myPageLink.map(
        ({ href, content }) => `
        <li class="my-page-modal__item">
          <a href="${href}" class="my-page-modal__link">${content}</a>
        </li>`
      )}
      </ul>
    </div>
    `;
  }
}

export default MypageModal;
