import Component from '../core/Component.js';
import {
  ViewPlanCover,
  ViewPlanner,
  ViewTripTab,
  ViewPlanMap,
  TimeTable,
  ViewTripStory,
  ViewPlanComment,
  ViewLikeShareBtnBox,
  ViewNavDay,
} from './TripPlanner/View/index.js';

import store from '../store/store.js';

class ViewTripPlanner extends Component {
  render() {
    const {
      state: {
        userInfo,
        tripSchedule,
        localCommon: { selectedTab },
        tripSchedule: { coverImg, title, summary, itinerary, isLiked, likeCount },
      },
    } = store;
    const $viewPlanCover = new ViewPlanCover({ coverImg, title, summary }).render();
    const $viewPlanner = new ViewPlanner({ userInfo, tripSchedule }).render();
    const $viewTripTab = new ViewTripTab({ selectedTab }).render();
    // const $viewPlanMap = new ViewPlanMap(state).render();
    const $viewTripStory = new ViewTripStory({ userInfo, itinerary }).render();
    const $timeTable = new TimeTable().render();
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
                ${selectedTab === 'chart' ? $timeTable : $viewTripStory}
              </div>
              ${$viewPlanComment}
            </div>
          </div>
          ${$viewNavDay}
        </div>
      </main>
      `;
  }
}

export default ViewTripPlanner;
