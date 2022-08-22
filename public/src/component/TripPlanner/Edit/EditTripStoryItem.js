import Component from '../../../core/Component.js';
import EditTripArticle from './EditTripArticle.js';

class EditTripStoryItem extends Component {
  render() {
    const $editTripArticle = new EditTripArticle().render();

    return `
      <li class="trip-story__day-item">
        <div class="trip-story__day-content">
          <h3 class="trip-story__day-content__title">Day 1</h3>
          <p class="trip-story__day-content__summary">2022.08.15(Mon) | 베트남</p>
        </div>
        ${$editTripArticle}
      </li>
    `;
  }
}

export default EditTripStoryItem;
