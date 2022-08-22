import Component from '../../../core/Component.js';
import ViewTripStoryItem from './ViewTripStoryItem.js';
import store from '../../../store/store.js';

class ViewTripStory extends Component {
  render() {
    const $viewTripStoryItem = store.state.dayItem
      .map((item, idx) => new ViewTripStoryItem({ item, idx }).render())
      .join('');

    return `
    <div class="trip-story">
      <ul class="trip-story__day-list">
        ${$viewTripStoryItem}
      </ul>
    </div>
      `;
  }
}

export default ViewTripStory;
