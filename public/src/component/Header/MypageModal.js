import Component from '../../core/Component.js';

class MypageModal extends Component {
  render() {
    const { isShowModal } = this.props;

    const myPageLink = [
      {
        className: 'mypage',
        href: '/mypage',
        content: '마이페이지 >',
      },
      {
        className: 'logout',
        href: '#',
        content: '로그아웃',
      },
    ];

    return `
    <div class="my-page-modal ${isShowModal === 'myPageModal' ? '' : 'hide'}">
      <ul class="my-page-modal__list">
      ${myPageLink
        .map(
          ({ className, href, content }) => `
        <li class="my-page-modal__item">
          <a href="${href}" class="my-page-modal__link ${className}">${content}</a>
        </li>`
        )
        .join('')}
      </ul>
    </div>
    `;
  }
}

export default MypageModal;
