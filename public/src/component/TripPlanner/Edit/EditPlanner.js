import Component from '../../../core/Component.js';

class EditPlanner extends Component {
  render() {
    return `
    <div class="trip-planner">
      <div class="trip-planner__create">
        <div class="trip-planner__create__title">
          <input class="trip-planner__title" placeholder="어떤 여행인지 간단히 설명해주세요." />
        </div>
        <div class="trip-planner__create__content">
          <textarea class="trip-planner__content" placeholder="당신의 여행 스토리를 남겨보세요."></textarea>
        </div>
        <div class="trip-planner__create__option">
          <div class="trip-date trip-start-date">
            <span class="trip-date__span">여행 시작일</span>
            <button class="trip-date__btn">
              <span>2022-08-14</span>
              <img class="trip-date__btn__img" src="/assets/images/calendar-dark.svg" alt="캘린더" />
            </button>
          </div>
          <div class="trip-date trip-end-date">
            <span class="trip-date__span">여행 도착일</span>
            <button class="trip-date__btn">
              <span>2022-08-18</span>
              <img class="trip-date__btn__img" src="/assets/images/calendar-dark.svg" alt="캘린더" />
            </button>
          </div>
          <div class="trip-people"><input type="number" value="2" max="99" /><span>명</span></div>
        </div>
      </div>
    </div>
    `;
  }
}

export default EditPlanner;
