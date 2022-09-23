import Component from '../../../core/Component.js';
import EditTripStoryItem from './EditTripStoryItem.js';

class EditTripStroy extends Component {
  render() {
    const { userInfo, itinerary } = this.props;

    const $editTripStoryItem = itinerary
      .map((item, idx) => new EditTripStoryItem({ userInfo, item, idx }).render())
      .join('');

    return `
    <div class="trip-story">
      <ul class="trip-story__day-list">
        ${$editTripStoryItem}
      </ul>
    </div>
      `;
  }
}

export default EditTripStroy;
