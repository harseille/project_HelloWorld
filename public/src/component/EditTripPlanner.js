import Component from '../core/Component.js';
import { EditPlanCover } from './TripPlanner/Edit/index.js';
import EditPlanner from './TripPlanner/Edit/EditPlanner.js';
import EditTripTab from './TripPlanner/Edit/EditTripTab.js';
import EditPlanMap from './TripPlanner/Edit/EditPlanMap.js';
import TimeTable from './TripPlanner/Edit/TimeTable.js';
import EditTripStroy from './TripPlanner/Edit/EditTripStory.js';
import EditTripAdd from './TripPlanner/Edit/EditTripAdd.js';
import store from '../store/store.js';

class EditTripPlanner extends Component {
  render() {
    const {
      state,
      state: { selectedTab },
    } = store;

    const $editPlanCover = new EditPlanCover(state).render();
    const $editPlanner = new EditPlanner(state).render();
    const $editTripTab = new EditTripTab(state).render();
    const $editPlanMap = new EditPlanMap().render();
    const $timeTable = new TimeTable().render();
    const $editTripStroy = new EditTripStroy(state).render();
    const $editTripAdd = new EditTripAdd().render();

    return `
      <main class="detail-main">
        ${$editPlanCover}
        <div class="trip-container">
          <div class="trip-main-container">
            ${$editPlanner}
            <div class="trip-itinerary">
              ${$editTripTab}
              <div class="itinerary__container">
                ${selectedTab === 'chart' ? $editPlanMap + $timeTable : $editTripStroy}
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
