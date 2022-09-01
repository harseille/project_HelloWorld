import Component from '../../../core/Component.js';

class ViewTripArticle extends Component {
  render() {
    const {
      userId,
      authorId,
      author,
      authorProfilePic,
      cell: {
        location,
        startTime,
        article: { picture, content },
      },
    } = this.props;

    // prettier-ignore
    return `
    <article class="trip-article">
    <div class="trip-article__header">
      <div class="trip-article__header__profile">
        <img src="${authorProfilePic} || '/assets/images/users/profileDefault.png'" alt="${author} 님의 프로필사진" class="profile-img" />
      </div>
      <div class="trip-article__header__content">
        <p class="trip-article__header__content__place">${location.name}</p>
        <p class="trip-article__header__content__time">${startTime}</p>
      </div>
      ${userId === authorId 
      ?
      `<div class="trip-article__header__badge">
      ${content
        ? `
        <button class="edit-btn"></button>
        <button class="remove-btn"></button>`
        : `
        <button class="add-btn">
          <img src="/assets/images/post-add.svg" alt="포스트 작성" class="add-img" /> 포스트 작성
        </button>`
      }
      </div>`
      : ''
      } 
    </div>
    <div class="trip-article__main">
      <div class="trip-article__main__img-container">
        ${picture ? `<img src="${picture}" alt="${location.name} 사진" /> ` : ''}
      </div>
      <div class="trip-article__main__content">
        ${content || ''}
      </div>
    </div>
  </article>
    `;
  }
}

export default ViewTripArticle;
