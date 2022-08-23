import Component from '../../../core/Component.js';
import EditTripStoryItem from './EditTripStoryItem.js';

class EditTripStroy extends Component {
  render() {
    const {
      userInfo,
      tripSchedule: {
        itinerary: { schedule },
      },
    } = this.props;

    const $editTripStoryItem = schedule.map(item => new EditTripStoryItem({ userInfo, item }).render()).join('');

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
