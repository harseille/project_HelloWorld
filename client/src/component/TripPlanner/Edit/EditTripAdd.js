import Component from '../../../core/Component.js';
import store from '../../../store/store.js';
import render from '../../../dom/render.js';

class EditPlanAdd extends Component {
  render() {
    return `
    <div class="itinerary-btns">
      <button class="itinerary-btns--private">나만의 일정</button>
      <button class="itinerary-btns--public">다른 사람들에게도 공유하기</button>
    </div>
    `;
  }

  async submitPrivateTripSchedule(e) {
    console.log('submitPrivateTripSchedule');
    try {
      // const { userId, nickname, profilePic } = store.state.userInfo;
      const response = await axios.post('/tripSchedule', store.state.tripSchedule);
      // const response = await axios.post('/tripSchedule', {
      //   ...store.state.tripSchedule,
      //   author: nickname,
      //   authorId: userId,
      //   authorProfilePic: profilePic,
      // });

      if (response.status === 200) {
        // console.log(store.state);
        console.log(response.data);
        console.log('성공');

        console.log('[store]:' + store.state);

        // TODO: store.state.tripSchedule 초기화
        const { tripScheduleId } = response.data;
        window.history.pushState(
          {},
          'ViewTripSchedule',
          window.location.origin + `/trip-planner-view/${tripScheduleId}`
        );
        render();
      }
    } catch (e) {
      console.error(e);
    }
  }

  addEventListener() {
    return [{ type: 'click', selector: '.itinerary-btns--private', handler: this.submitPrivateTripSchedule }];
  }
}

export default EditPlanAdd;
