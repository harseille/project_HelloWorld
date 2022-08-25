import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class EditTripTab extends Component {
  render() {
    const { selectedTab } = this.props;

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
    const selectedTab = e.target.dataset.tab;

    store.state = { ...store.state.localCommon, localCommon: { selectedTab } };
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.trip-itinerary__tab__chart', handler: this.renderSelectedContent },
      { type: 'click', selector: '.trip-itinerary__tab__story', handler: this.renderSelectedContent },
    ];
  }
}

export default EditTripTab;
