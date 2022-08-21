import Component from '../../../core/Component.js';

class ViewLikeShareBtnBox extends Component {
  render() {
    return `
    <div class="like-share-btnbox">
      <div class="like-container">
        <button class="like-btn"><img src="/assets/images/heart-nofill.svg" alt="좋아요" /></button>
        <span class="like-degit">68</span>
      </div>
      <button class="share-btn"><img src="/assets/images/share.svg" alt="공유하기" /></button>
    </div>
    `;
  }
}

export default ViewLikeShareBtnBox;
