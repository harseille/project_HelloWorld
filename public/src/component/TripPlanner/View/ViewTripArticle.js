import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewTripArticle extends Component {
  render() {
    const { props } = this;
    const { state } = store;
    return `
    <article class="trip-article">
    <div class="trip-article__header">
      <div class="trip-article__header__profile">
        <img src="${state.user.profileImg}" alt="프로필사진" class="profile-img" />
      </div>
      <div class="trip-article__header__content">
        <p class="trip-article__header__content__place">${props.place}</p>
        <p class="trip-article__header__content__time">${props.time}</p>
      </div>
      <div class="trip-article__header__badge">
        <button class="edit-btn"></button>
        <button class="remove-btn"></button>
      </div>
    </div>
    <div class="trip-article__main">
      <div class="trip-article__main__img-container">
        <img src="${props.picture}" alt="${props.place} 사진" />
      </div>
      <div class="trip-article__main__content">
        ${props.content}
      </div>
    </div>
  </article>
    `;
  }
}

export default ViewTripArticle;
