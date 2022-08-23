import Component from '../../../core/Component.js';

class EditTripArticle extends Component {
  render() {
    const {
      userInfo: { profilePic, nickname },
      cell: { location, startTime },
    } = this.props;

    return `
      <article class="trip-article">
        <div class="trip-article__header">
          <div class="trip-article__header__profile">
            <img src="${profilePic}" alt="${nickname} 님의 프로필사진" class="profile-img" />
          </div>
          <div class="trip-article__header__content">
            <p class="trip-article__header__content__place">${location}</p>
            <p class="trip-article__header__content__time">${startTime}</p>
          </div>
          <div class="trip-article__header__badge">
            <button class="add-btn">
              <img src="/assets/images/post-add.svg" alt="포스트 작성" class="add-img" /> 포스트 작성
            </button>
          </div>
        </div>
      </article>
    `;
  }
}

export default EditTripArticle;
