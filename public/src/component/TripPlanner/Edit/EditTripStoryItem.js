import Component from '../../../core/Component.js';
import EditTripArticle from './EditTripArticle.js';

class EditTripStoryItem extends Component {
  render() {
    const {
      userInfo,
      item: { id, date, day, country, cells },
    } = this.props;

    const $editTripArticle = cells.map(cell => new EditTripArticle({ userInfo, cell }).render()).join('');

    return `
      <li class="trip-story__day-item">
        <div class="trip-story__day-content">
          <h3 class="trip-story__day-content__title">Day ${id}</h3>
          <p class="trip-story__day-content__summary">${date}(${day}) | ${country}</p>
        </div>
        ${$editTripArticle}
      </li>
    `;
  }
}

export default EditTripStoryItem;
