import Component from '../core/Component.js';
import EditPlanCover from './TripPlanner/Edit/EditPlanCover.js';
import EditPlanner from './TripPlanner/Edit/EditPlanner.js';
import EditTripTab from './TripPlanner/Edit/EditTripTab.js';
import EditPlanMap from './TripPlanner/Edit/EditPlanMap.js';
import TimeTable from './TripPlanner/Edit/TimeTable.js';
import EditTripStroy from './TripPlanner/Edit/EditTripStory.js';
import EditTripAdd from './TripPlanner/Edit/EditTripAdd.js';
import store from '../store/store.js';

class EditTripPlanner extends Component {
  render() {
    const { selectedTab } = store.state;
    const $editPlanCover = new EditPlanCover().render();
    const $editPlanner = new EditPlanner().render();
    const $editTripTab = new EditTripTab().render();
    const $editPlanMap = new EditPlanMap().render();
    const $timeTable = new TimeTable().render();
    // const $editTripStroy = new EditTripStroy().render();
    const $editTripAdd = new EditTripAdd().render();
    const test = selectedTab;
    return `
      <main class="detail-main">
        ${$editPlanCover}
        <div class="trip-container">
          <div class="trip-main-container">
            ${$editPlanner}
            <div class="trip-itinerary">
              ${$editTripTab}
              <div class="itinerary__container">
                ${selectedTab === 'chart' ? $editPlanMap + $timeTable : new EditTripStroy().render()}
              </div>
              ${$editTripAdd}
            </div>
          </div>
        </div>
      </main>
      `;
  }
}

export default EditTripPlanner;
