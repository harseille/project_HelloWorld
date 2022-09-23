import Component from '../../core/Component.js';

class MainPost extends Component {
  render() {
    const {
      tripScheduleId,
      author,
      authorProfilePic,
      title,
      summary,
      coverImg,
      content,
      likeCount,
      commentCount,
      selectedCardId,
    } = this.props;
    return `
    <li class="travel-log__item ${selectedCardId === tripScheduleId ? 'selected' : ''}" id="${tripScheduleId}">
    <a href="${'/trip-planner-view/' + tripScheduleId}" class="travel-log__link">
      <div class="travel-log__item__top-section" style="background-image: url('${coverImg}')">
        <div class="travel-log__item__user-info">
          <img class="travel-log__item__user-info__profile-pic" src="${
            authorProfilePic || '/assets/images/users/profileDefault.png'
          }" alt="${author} 님의 프로필 사진" />
          <span class="travel-log__item__user-info__nickname">${author}</span>
        </div>
        <div class="travel-log__item__main">
          <h3 class="travel-log__item__main__title">${title}</h3>
          <span class="travel-log__item__main__detail">${summary}</span>
        </div>
      </div>
      <div class="travel-log__item__bottom-section">
        <div class="travel-log__item__sub">
          <p class="travel-log__item__sub__detail">
            ${content}
          </p>
        </div>
        <div class="travel-log__item__social">
          <span class="travel-log__item__like">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.75 1C2.67925 1 1 2.86391 1 5.16351C1 7.01984 1.65625 11.4256 8.116 15.8793C8.23171 15.9582 8.36455 16 8.5 16C8.63545 16 8.76829 15.9582 8.884 15.8793C15.3438 11.4256 16 7.01984 16 5.16351C16 2.86391 14.3208 1 12.25 1C10.1792 1 8.5 3.52334 8.5 3.52334C8.5 3.52334 6.82075 1 4.75 1Z"
                fill="white"
                stroke="#9A9A9A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
          <span class="travel-log__item__like__count">${likeCount}</span>
          <span class="travel-log__item__comment">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.125 0.5H0.875L0.25 1.125V12.375L0.875 13H4V16.125L5.0675 16.5675L8.63375 13H17.125L17.75 12.375V1.125L17.125 0.5ZM16.5 11.75H8.375L7.9325 11.9325L5.25 14.6163V12.375L4.625 11.75H1.5V1.75H16.5V11.75Z"
                fill="#9A9A9A" />
            </svg>
          </span>
          <span class="travel-log__item__comment__count">${commentCount}</span>
        </div>
      </div>
    </a>
  </li>
    `;
  }
}

export default MainPost;
