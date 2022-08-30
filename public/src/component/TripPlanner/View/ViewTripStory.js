import Component from '../../../core/Component.js';
import ViewTripStoryItem from './ViewTripStoryItem.js';

class ViewTripStory extends Component {
  render() {
    const { author, authorProfilePic, itinerary } = this.props;

    const $viewTripStoryItem = itinerary
      .map(item => new ViewTripStoryItem({ author, authorProfilePic, item }).render())
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
