import Component from '../../../core/Component.js';

class ViewTripArticle extends Component {
  render() {
    const {
      author,
      authorProfilePic,
      cell: {
        location,
        startTime,
        article: { picture, content },
      },
    } = this.props;

    return `
    <article class="trip-article">
    <div class="trip-article__header">
      <div class="trip-article__header__profile">
        <img src="${authorProfilePic}" alt="${author} 님의 프로필사진" class="profile-img" />
      </div>
      <div class="trip-article__header__content">
        <p class="trip-article__header__content__place">${location.name}</p>
        <p class="trip-article__header__content__time">${startTime}</p>
      </div>
      <div class="trip-article__header__badge">
        <button class="edit-btn"></button>
        <button class="remove-btn"></button>
      </div>
    </div>
    <div class="trip-article__main">
      <div class="trip-article__main__img-container">
        ${picture ? `<img src="${picture}" alt="${location} 사진" /> ` : ''}
      </div>
      <div class="trip-article__main__content">
        ${content?.memo ? content.memo : ''}
        ${content?.todo ? content.todo : ''}
      </div>
    </div>
  </article>
    `;
  }
}

export default ViewTripArticle;
