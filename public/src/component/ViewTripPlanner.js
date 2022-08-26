import Component from '../core/Component.js';
import {
  ViewPlanCover,
  ViewPlanner,
  ViewTripTab,
  ViewPlanMap,
  ViewTripStory,
  ViewPlanComment,
  ViewLikeShareBtnBox,
  ViewNavDay,
} from './TripPlanner/View/index.js';

import store from '../store/store.js';

class ViewTripPlanner extends Component {
  // async init() {
  //   const id = window.location.pathname.split('/').pop();
  //   const _tripSchedule = await axios.get('/tripSchedule/' + id);
  // store.state = store.state.tripSchedule = _tripSchedule.data;
  // }

  render() {
    const {
      state: {
        userInfo,
        localCommon: { selectedTab },
        tripSchedule,
        tripSchedule: { coverImg, title, summary, itinerary, isLiked, likeCount },
      },
    } = store;
    const $viewPlanCover = new ViewPlanCover({ coverImg, title, summary }).render();
    const $viewPlanner = new ViewPlanner({ tripSchedule }).render();
    const $viewTripTab = new ViewTripTab({ selectedTab }).render();
    const $viewPlanMap = new ViewPlanMap().render();
    const $viewTripStory = new ViewTripStory({ userInfo, itinerary }).render();
    const $viewPlanComment = new ViewPlanComment().render();
    const $viewLikeShareBtnBox = new ViewLikeShareBtnBox({ isLiked, likeCount }).render();
    const $viewNavDay = new ViewNavDay({ itinerary }).render();

    return `
      <main class="detail-main">
        ${$viewPlanCover}
        <div class="trip-container">
          ${$viewLikeShareBtnBox}
          <div class="trip-main-container">
            ${$viewPlanner}
            <div class="trip-itinerary">
              ${$viewTripTab}
              <div class="itinerary__container">
                ${selectedTab === 'chart' ? $viewPlanMap : $viewTripStory}
              </div>
              ${$viewPlanComment}
            </div>
          </div>
          ${$viewNavDay}
        </div>
      </main>
      `;
  }

  // async fetchSelectedTripSchedule(e) {
  //   const id = window.location.pathname.split('/').pop();

  //   const selectedTripSchedule = await axios.get('/tripSchedule/' + id);
  //   store.state = store.state.selectedTripSchedule = selectedTripSchedule.data;
  // }

  // addEventListener() {
  //   return [{ type: '', selector: 'window', handler: this.fetchSelectedTripSchedule }];
  // }
}

export default ViewTripPlanner;
