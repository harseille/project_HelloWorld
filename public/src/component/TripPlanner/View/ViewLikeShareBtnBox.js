import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewLikeShareBtnBox extends Component {
  get isLI() {
    return this.props.likeCount;
  }

  render() {
    const {
      tripSchedule: { isLiked, likeCount },
    } = this.props;

    return `
    <div class="like-share-btnbox">
      <div class="like-container">
        <button class="like-btn"><img src="${
          isLiked ? '/assets/images/heart-fill.svg' : '/assets/images/heart-nofill.svg'
        }" alt="좋아요" /></button>
        <span class="like-degit">${likeCount}</span>
      </div>
      <button class="share-btn"><img src="/assets/images/share.svg" alt="공유하기" /></button>
      </div>
    `;
  }

  clickLikeBtn() {
    const {
      tripSchedule,
      tripSchedule: { isLiked, likeCount },
    } = store.state;

    store.state = {
      tripSchedule: {
        ...tripSchedule,
        isLiked: !isLiked,
        likeCount: isLiked ? likeCount - 1 : likeCount + 1,
      },
    };
  }

  addEventListener() {
    return [{ type: 'click', selector: '.like-btn', handler: this.clickLikeBtn.bind(this) }];
  }
}

export default ViewLikeShareBtnBox;
