import Component from '../../../core/Component.js';
import ViewTripStoryItem from './ViewTripStoryItem.js';

class ViewTripStory extends Component {
  render() {
    const {
      userInfo,
      tripSchedule: {
        itinerary: { schedule },
      },
    } = this.props;

    const $viewTripStoryItem = schedule.map(item => new ViewTripStoryItem({ userInfo, item }).render()).join('');

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
