import Component from '../../../core/Component.js';

class ViewPlanComment extends Component {
  render() {
    const { commentCount } = this.props;
    return `
    <div class="comment" id="comment">
        <h3 class="comment__title">댓글 (${commentCount})</h3>
        <div class="comment__container">
          <div class="comment__inputbox">
            <div class="comment__inputbox__profile">
              <img src="/assets/images/users/profileDefault.png" alt="프로필사진" class="profile-img" />
            </div>
            <div class="comment__inputbox__inputform">
              <label for="comment-input" class="a11yHidden">댓글입력창</label>
              <input type="text" name="comment-input" id="comment-input" placeholder="댓글을 입력해주세요." />
            </div>
            <button class="comment__inputbox__button"></button>
          </div>
          <div class="comment__box">
            <div class="comment__box__contentbox">
              <div class="comment__box__contentbox__profile">
                <img src="/assets/images/users/profileDefault.png" alt="프로필사진" class="profile-img" />
              </div>
              <div class="comment__box__contentbox__content">
                <p class="comment__box__contentbox__content__username">
                  굿굿
                  <span class="comment__box__contentbox__content__add-time">작성시간</span>
                </p>
                <p class="comment__box__contentbox__content__main">멋져요!</p>
              </div>
            </div>
            <div class="comment__box__buttonbox">
              <button class="recomment-btn"></button>
              <button class="remove-btn"></button>
            </div>
          </div>
          <div class="comment__box">
            <div class="comment__box__contentbox recomment">
              <div class="comment__box__contentbox__profile">
                <img src="/assets/images/users/profileDefault.png" alt="프로필사진" class="profile-img" />
              </div>
              <div class="comment__box__contentbox__content">
                <p class="comment__box__contentbox__content__username">
                  세후니
                  <span class="comment__box__contentbox__content__add-time">작성시간</span>
                </p>
                <p class="comment__box__contentbox__content__main">나도 여행 가고 싶다.</p>
              </div>
            </div>
            <div class="comment__box__buttonbox">
              <button class="recomment-btn"></button>
              <button class="remove-btn"></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default ViewPlanComment;
