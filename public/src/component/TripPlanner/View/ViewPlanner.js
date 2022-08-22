import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewPlanner extends Component {
  render() {
    const { state } = store;
    return `
    <div class="trip-planner">
      <div class="trip-planner__author">
        <div class="trip-planner__author__profile">
          <img src='${state.user.profileImg}' alt="프로필사진" class="profile-img" />
        </div>
        <span class="trip-planner__author__nickname">${state.user.nickname}</span>
      </div>
      <p class="trip-planner__content">
        ${state.content}
      </p>
      <div class="trip-planner__info">
        <p>여행 시작일: ${state.startDate} | ${state.people}명</p>
        <p>작성일: ${state.endDate}</p>
      </div>
      <div class="trip-planner__badge">
        <span><img src="/assets/images/heart-nofill.svg" alt="좋아요 뱃지" /> ${state.likeCount}</span>
        <span><img src="/assets/images/comment.svg" alt="댓글" />${state.commentCount}</span>
      </div>
    </div>
    `;
  }
}

export default ViewPlanner;
