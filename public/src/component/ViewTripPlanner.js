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
    const { selectedTab } = store.state;
    const $viewPlanCover = new ViewPlanCover().render();
    const $viewPlanner = new ViewPlanner().render();
    const $viewTripTab = new ViewTripTab().render();
    const $viewPlanMap = new ViewPlanMap().render();
    const $viewTripStory = new ViewTripStory().render();
    const $timeTable = new TimeTable().render();
    const $viewPlanComment = new ViewPlanComment().render();
    const $viewLikeShareBtnBox = new ViewLikeShareBtnBox().render();
    const $viewNavDay = new ViewNavDay().render();

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
