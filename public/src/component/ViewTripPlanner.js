import Component from '../core/Component.js';
import ViewPlanCover from './TripPlanner/View/ViewPlanCover.js';
import ViewPlanner from './TripPlanner/View/ViewPlanner.js';
import ViewTripTab from './TripPlanner/View/ViewTripTab.js';
import ViewPlanMap from './TripPlanner/View/ViewPlanMap.js';
import TimeTable from './TripPlanner/View/TimeTable.js';
import ViewTripStory from './TripPlanner/View/ViewTripStory.js';
import ViewPlanComment from './TripPlanner/View/ViewPlanComment.js';
import ViewLikeShareBtnBox from './TripPlanner/View/ViewLikeShareBtnBox.js';
import ViewNavDay from './TripPlanner/View/ViewNavDay.js';
import store from '../store/store.js';

class ViewTripPlanner extends Component {
  render() {
    const {
      state,
      state: { selectedTab },
    } = store;
    const $viewPlanCover = new ViewPlanCover(state).render();
    const $viewPlanner = new ViewPlanner(state).render();
    const $viewTripTab = new ViewTripTab(state).render();
    const $viewPlanMap = new ViewPlanMap(state).render();
    const $viewTripStory = new ViewTripStory(state).render();
    const $timeTable = new TimeTable().render();
    const $viewPlanComment = new ViewPlanComment().render();
    const $viewLikeShareBtnBox = new ViewLikeShareBtnBox(state).render();
    const $viewNavDay = new ViewNavDay(state).render();

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
                ${selectedTab === 'chart' ? $viewPlanMap + $timeTable : $viewTripStory}
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
