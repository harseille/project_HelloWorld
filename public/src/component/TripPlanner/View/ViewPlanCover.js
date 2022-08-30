import Component from '../../../core/Component.js';
import render from '../../../dom/render.js';
import store from '../../../store/store.js';

class ViewPlanCover extends Component {
  render() {
    const { userId, authorId, coverImg, title, summary } = this.props;

    return `
    <div class="cover" style="background-image: url('${coverImg}')">
      <div class="cover__inner">
        <div class="cover__content">
          <h2 class="cover__content__title">${title}</h2>
          <p class="cover__content__summary">${summary}</p>
        </div>
        ${
          userId === authorId
            ? `<div class="cover__buttonbox">
            <button class="edit-btn"><img src="/assets/images/post-edit.svg" alt="글 수정" /></button>
            <button class="remove-btn"><img src="/assets/images/cancel.svg" alt="글 삭제" /></button>
          </div>`
            : ''
        }
      </div>
    </div>`;
  }

  goEditMode(e) {
    // const tripScheduleId = window.location.pathname.split('/').pop();
    const goConfirm = confirm('일정을 수정하시겠습니까?');
    if (goConfirm) {
      // window.history.pushState({}, 'EditTripSchedule', window.location.origin + '/trip-planner-edit/' + tripScheduleId);
      window.history.pushState({}, 'EditTripSchedule', window.location.origin + '/trip-planner-edit');

      const { viewTripSchedule } = store.state;
      store.state = {
        tripSchedule: viewTripSchedule,
      };
    }
  }

  deleteTripSchedule(e) {
    const deleteConfirm = confirm('일정을 삭제하시겠습니까?');
    if (deleteConfirm) {
      // Todo 해당 일정 state 삭제 기능 추가 필요
      window.history.pushState({}, 'Main', window.location.origin + '/main');
      render();
    }
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.edit-btn', component: 'ViewPlanCover', handler: this.goEditMode },
      { type: 'click', selector: '.remove-btn', component: 'ViewPlanCover', handler: this.deleteTripSchedule },
    ];
  }
}

export default ViewPlanCover;
