import Component from '../../../core/Component.js';

class ViewTripTab extends Component {
  render() {
    return `
    <div class="trip-itinerary__tab">
      <div class="trip-itinerary__tab__chart selected">지도/일정표</div>
      <div class="trip-itinerary__tab__story">스토리</div>
    </div>
    `;
  }
}

export default ViewTripTab;
