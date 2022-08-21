import Component from '../../../core/Component.js';

class ViewPlanner extends Component {
  render() {
    return `
    <div class="trip-planner">
      <div class="trip-planner__author">
        <div class="trip-planner__author__profile">
          <img src="/assets/images/profile-mock.png" alt="프로필사진" class="profile-img" />
        </div>
        <span class="trip-planner__author__nickname">오똑똑 Author</span>
      </div>
      <p class="trip-planner__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero aliquid incidunt. Voluptate
        mollitia consectetur sint harum eligendi in at blanditiis distinctio temporibus debitis, numquam facilis
        officiis doloribus non nisi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero aliquid incidunt. Voluptate
        mollitia consectetur sint harum eligendi in at blanditiis distinctio temporibus debitis, numquam facilis
        officiis doloribus non nisi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero aliquid incidunt. Voluptate
        mollitia consectetur sint harum eligendi in at blanditiis distinctio temporibus debitis, numquam facilis
        officiis doloribus non nisi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero aliquid incidunt. Voluptate
        mollitia consectetur sint harum eligendi in at blanditiis distinctio temporibus debitis, numquam facilis
        officiis doloribus non nisi?
      </p>
      <div class="trip-planner__info">
        <p>여행 시작일: 2022-08-15 | 2명</p>
        <p>작성일: 2022-08-25</p>
      </div>
      <div class="trip-planner__badge">
        <span><img src="/assets/images/heart-nofill.svg" alt="좋아요 뱃지" /> 66</span>
        <span><img src="/assets/images/comment.svg" alt="댓글" /> 1</span>
      </div>
    </div>
    `;
  }
}

export default ViewPlanner;
