import Component from '../../../core/Component.js';

class ViewTripArticle extends Component {
  render() {
    return `
    <article class="trip-article">
    <div class="trip-article__header">
      <div class="trip-article__header__profile">
        <img src="/assets/images/profile-mock.png" alt="프로필사진" class="profile-img" />
      </div>
      <div class="trip-article__header__content">
        <p class="trip-article__header__content__place">다낭 국제 공항</p>
        <p class="trip-article__header__content__time">오후 08:00</p>
      </div>
      <div class="trip-article__header__badge">
        <button class="edit-btn"></button>
        <button class="remove-btn"></button>
      </div>
    </div>
    <div class="trip-article__main">
      <div class="trip-article__main__img-container">
        <img src="" alt="" />
      </div>
      <div class="trip-article__main__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel
        nulla labore placeat debitis, ipsam velit eos molestiae beatae ullam quod exercitationem vero
        soluta, nihil odio quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        autem officia mollitia vel nulla labore placeat debitis, ipsam velit eos molestiae beatae
        ullam quod exercitationem vero soluta, nihil odio quo.
      </div>
    </div>
  </article>
    `;
  }
}

export default ViewTripArticle;
