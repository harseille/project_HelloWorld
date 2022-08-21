import Component from '../../../core/Component.js';

class ViewPlanCover extends Component {
  render() {
    return `
    <div class="cover">
      <div class="cover__inner">
        <div class="cover__content">
          <h2 class="cover__content__title">다낭 갔다왔습니다낭~</h2>
          <p class="cover__content__summary">베트남ㆍ3일</p>
        </div>
        <div class="cover__buttonbox">
          <button class="edit-btn"><img src="./assets/images/post-edit.svg" alt="글 수정" /></button>
          <button class="remove-btn"><img src="/assets/images/cancel.svg" alt="글 삭제" /></button>
        </div>
      </div>
    </div>
    `;
  }

  // addEventListener() {
  //   return [{ type: 'change', selector: '.add-cover-input', handler: this.setCoverImg }];
  // }
}

export default ViewPlanCover;
