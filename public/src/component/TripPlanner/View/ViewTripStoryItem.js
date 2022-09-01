import Component from '../../../core/Component.js';
import ViewTripArticle from './ViewTripArticle.js';
import { getFormattedDate } from '../../DatePicker/dateUtils.js';

class ViewTripStoryItem extends Component {
  render() {
    const {
      userId,
      authorId,
      author,
      authorProfilePic,
      item: { date, country, cells },
      idx,
    } = this.props;

    const $viewTripArticle = cells
      .map(cell => new ViewTripArticle({ userId, authorId, author, authorProfilePic, cell }).render())
      .join('');

    return `
      <li class="trip-story__day-item" id="day${idx + 1}">
        <div class="trip-story__day-content">
          <h3 class="trip-story__day-content__title">Day ${idx + 1}</h3>
          <p class="trip-story__day-content__summary">${getFormattedDate(date)} | ${country}</p>
        </div>
        ${$viewTripArticle}
      </li>
    `;
  }
}

export default ViewTripStoryItem;
