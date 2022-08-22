import Component from '../../../core/Component.js';
import ViewTripArticle from './ViewTripArticle.js';

class ViewTripStoryItem extends Component {
  render() {
    const { item, idx } = this.props;
    const $viewTripArticle = item.articles.map(article => new ViewTripArticle(article).render()).join('');

    return `
      <li class="trip-story__day-item" id="day${idx + 1}">
        <div class="trip-story__day-content">
          <h3 class="trip-story__day-content__title">Day ${idx + 1}</h3>
          <p class="trip-story__day-content__summary">${item.date} | ${item.country}</p>
        </div>
        ${$viewTripArticle}
      </li>
    `;
  }
}

export default ViewTripStoryItem;
