import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewTripTab extends Component {
  render() {
    const { selectedTab } = store.state;
    return `
    <div class="trip-itinerary__tab">
      <div class="trip-itinerary__tab__chart ${
        selectedTab === 'chart' ? 'selected' : ''
      }" data-tab = "chart">지도/일정표</div>
      <div class="trip-itinerary__tab__story ${
        selectedTab === 'story' ? 'selected' : ''
      }" data-tab = "story">스토리</div>
    </div>
    `;
  }

  renderSelectedContent(e) {
    store.state = { selectedTab: e.target.dataset.tab };
  }

  addEventListener() {
    return [{ type: 'click', selector: '.trip-itinerary__tab', handler: this.renderSelectedContent }];
  }
}

export default ViewTripTab;
