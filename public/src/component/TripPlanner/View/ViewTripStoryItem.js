import Component from '../../../core/Component.js';
import ViewTripArticle from './ViewTripArticle.js';

class ViewTripStoryItem extends Component {
  render() {
    const $viewTripArticle = new ViewTripArticle().render();

    return `
      <li class="trip-story__day-item">
        <div class="trip-story__day-content">
          <h3 class="trip-story__day-content__title">Day 1</h3>
          <p class="trip-story__day-content__summary">2022.08.15(Mon) | 베트남</p>
        </div>
        ${$viewTripArticle}
      </li>
    `;
  }
}

export default ViewTripStoryItem;
