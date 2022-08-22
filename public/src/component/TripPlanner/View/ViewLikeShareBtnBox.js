import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewLikeShareBtnBox extends Component {
  render() {
    return `
    <div class="like-share-btnbox">
      <div class="like-container">
        <button class="like-btn"><img src="${
          store.state.isLiked ? '/assets/images/heart-fill.svg' : '/assets/images/heart-nofill.svg'
        }" alt="좋아요" /></button>
        <span class="like-degit">${store.state.likeCount}</span>
      </div>
      <button class="share-btn"><img src="/assets/images/share.svg" alt="공유하기" /></button>
    </div>
    `;
  }

  clickLikeBtn() {
    store.state = {
      isLiked: !store.state.isLiked,
      likeCount: store.state.isLiked ? store.state.likeCount - 1 : store.state.likeCount + 1,
    };
    // const likeImg = document.querySelector('.like-btn img');
    // if (likeImg.getAttribute('src') === '/assets/images/heart-nofill.svg')
    //   likeImg.setAttribute('src', '/assets/images/heart-fill.svg');
    // else if (likeImg.getAttribute('src') === '/assets/images/heart-fill.svg')
    //   likeImg.setAttribute('src', '/assets/images/heart-nofill.svg');
  }

  addEventListener() {
    return [{ type: 'click', selector: '.like-btn', handler: this.clickLikeBtn }];
  }
}

export default ViewLikeShareBtnBox;
