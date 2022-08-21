import Component from '../../../core/Component.js';
import ViewTripStoryItem from './ViewTripStoryItem.js';

class ViewTripStory extends Component {
  render() {
    const $viewTripStoryItem = new ViewTripStoryItem().render();

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
