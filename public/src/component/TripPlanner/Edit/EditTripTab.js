import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class EditTripTab extends Component {
  render() {
    const { selectedTab } = this.props;
    const tabArr = [
      {
        type: 'chart',
        content: '지도/일정표',
      },
      {
        type: 'story',
        content: '스토리',
      },
    ];
    // prettier-ignore
    return `
    <div class="trip-itinerary__tab">
      ${tabArr.map(({type, content}) =>`
      <div class="trip-itinerary__tab__${type} ${selectedTab === type ? 'selected' : ''}" data-tab = "${type}">
        ${content}
      </div>`).join('')}
    </div>
    `;
  }

  renderSelectedContent(e) {
    if (e.target.matches('.trip-itinerary__tab')) return;

    const selectedTab = e.target.dataset.tab;

    store.state = { ...store.state.localCommon, localCommon: { selectedTab } };
  }

  addEventListener() {
    return [{ type: 'click', selector: '.trip-itinerary__tab', handler: this.renderSelectedContent }];
  }
}

export default EditTripTab;
