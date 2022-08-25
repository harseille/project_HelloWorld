import Component from '../core/Component.js';
import {
  EditPlanCover,
  EditPlanner,
  EditTripTab,
  EditPlanMap,
  TimeTable,
  EditTripStroy,
  EditTripAdd,
} from './TripPlanner/Edit/index.js';
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
