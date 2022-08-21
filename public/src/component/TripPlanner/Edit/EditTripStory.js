import Component from '../../../core/Component.js';
import EditTripStoryItem from './EditTripStoryItem.js';

class EditTripStroy extends Component {
  render() {
    const $editTripStoryItem = new EditTripStoryItem().render();

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
