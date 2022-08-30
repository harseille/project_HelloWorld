import Component from '../core/Component.js';
import store from '../store/store.js';
import MainPost from './Main/MainPost.js';

class Main extends Component {
  async init() {
    try {
      // Todo 새로고침 시 필터된 카드로 랜더되게 쿼리로 바꾸기
      const query = window.location.search;

      const mainTripSchedules = await axios.get(`/mainTripSchedules${query}`);
      store.state = {
        localCommon: {
          ...store.state.localCommon,
          path: window.location.pathname,
        },
        tripSchedules: [...mainTripSchedules.data],
      };
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { selectedCardId } = store.state.localMain;

    return `
    <div class="main">
    <section class="hot-topic">
      <div class="hot-topic__header">
        <h2 class="hot-topic__title">핫 토픽</h2>
        <ul class="hot-topic__hashtag__list">
          <li class="hot-topic__hashtag__item">#눈</li>
          <li class="hot-topic__hashtag__item">#축제</li>
        </ul>
        <ul class="hot-topic__nav">
          <li class="hot-topic__nav__item"><div class="hot-topic__nav__item__circle checked"></div></li>
          <li class="hot-topic__nav__item"><div class="hot-topic__nav__item__circle"></div></li>
          <li class="hot-topic__nav__item"><div class="hot-topic__nav__item__circle"></div></li>
        </ul>
      </div>
      <div class="hot-topic__body">
        <ul class="hot-topic__list">
          <li class="hot-topic__item">
            <a href="" class="hot-topic__link">
              <div class="hot-topic__item__thumbnail">
                <span class="hot-topic__item__thumbnail__icon">
                  <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.8805 17.5405C28.4518 18.7412 28.4518 21.1072 26.8805 22.3079L4.8215 39.1641C2.84732 40.6726 -1.84746e-06 39.2649 -1.73885e-06 36.7803L-2.65242e-07 3.06802C-1.56637e-07 0.583446 2.84732 -0.824252 4.8215 0.684298L26.8805 17.5405Z"
                      fill="#EEEEEE" />
                  </svg>
                </span>
                <video
                  class="hot-topic__item__thumbnail__video"
                  src="/assets/videos/videothumbnail2.mp4"
                  autoplay="true"
                  loop="true"
                  muted="true"></video>
              </div>
              <div class="hot-topic__item__detail">
                <h3 class="hot-topic__item__detail__title">인기여행지 1위</h3>
                <p class="hot-topic__item__detail__desc">인기여행지 1위 설명 들어가면 된다아아아아아아아아아</p>
              </div>
            </a>
          </li>
          <li class="hot-topic__item">
            <a href="" class="hot-topic__link">
              <div class="hot-topic__item__thumbnail">
                <span class="hot-topic__item__thumbnail__icon">
                  <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.8805 17.5405C28.4518 18.7412 28.4518 21.1072 26.8805 22.3079L4.8215 39.1641C2.84732 40.6726 -1.84746e-06 39.2649 -1.73885e-06 36.7803L-2.65242e-07 3.06802C-1.56637e-07 0.583446 2.84732 -0.824252 4.8215 0.684298L26.8805 17.5405Z"
                      fill="#EEEEEE" />
                  </svg>
                </span>
                <video class="hot-topic__item__thumbnail__video" src="/assets/videos/MainMovie1.mp4"></video>
              </div>
              <div class="hot-topic__item__detail">
                <h3 class="hot-topic__item__detail__title">인기여행지 1위</h3>
                <p class="hot-topic__item__detail__desc">인기여행지 1위 설명 들어가면 된다아아아아아아아아아</p>
              </div>
            </a>
          </li>
          <li class="hot-topic__item">
            <a href="" class="hot-topic__link">
              <div class="hot-topic__item__thumbnail">
                <span class="hot-topic__item__thumbnail__icon">
                  <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M26.8805 17.5405C28.4518 18.7412 28.4518 21.1072 26.8805 22.3079L4.8215 39.1641C2.84732 40.6726 -1.84746e-06 39.2649 -1.73885e-06 36.7803L-2.65242e-07 3.06802C-1.56637e-07 0.583446 2.84732 -0.824252 4.8215 0.684298L26.8805 17.5405Z"
                      fill="#EEEEEE" />
                  </svg>
                </span>
                <video class="hot-topic__item__thumbnail__video" src="/assets/videos/MainMovie2.mp4"></video>
              </div>
              <div class="hot-topic__item__detail">
                <h3 class="hot-topic__item__detail__title">인기여행지 1위</h3>
                <p class="hot-topic__item__detail__desc">인기여행지 1위 설명 들어가면 된다아아아아아아아아아</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="travel-log">
      <div class="travel-log__header">
        <h2 class="travel-log__title">여행 일지</h2>
      </div>
      <form action="" class="travel-log__form">
        <select class="travel-log__form__dropdown" name="travel-log__form__dropdown" id="cars">
          <option value="title">제목</option>
          <option value="country">국가</option>
          <option value="city">도시</option>
        </select>
        <input class="travel-log__form__input" type="text" placeholder="검색어를 입력해주세요." />
        <button class="travel-log__form__button--submit" type="submit">검색</button>
      </form>
      <div class="travel-log__body">
        <ul class="travel-log__list">
          ${store.state.tripSchedules.map(schedule => new MainPost({ ...schedule, selectedCardId }).render()).join('')}
        </ul>
      </div>
    </section>
  </div>`;
  }

  changeToTripScheduleView(e) {
    if (!e.target.closest('.travel-log__item')) return;
    e.preventDefault();
    const path = e.target.closest('.travel-log__link').getAttribute('href');

    window.history.pushState({}, path, window.location.origin + path);

    store.state = {
      localMain: {
        ...store.state.localMain,
        selectedCardId: e.target.closest('li').id,
      },
    };
  }

  async filterToTripScheduleView(e) {
    e.preventDefault();

    if (!e.target.classList.contains('travel-log__form')) return;

    const searchCategory = e.target.querySelector('.travel-log__form__dropdown').value;
    const searchValue = e.target.querySelector('.travel-log__form__input').value;

    // const filteredMainTripSchedules = await axios.get(`/mainTripSchedules/${searchCategory}/${searchValue}`);
    const filteredMainTripSchedules = await axios.get('/mainTripSchedules', {
      params: {
        category: searchCategory,
        value: searchValue,
      },
    });
    window.history.pushState(
      {},
      'MainFitler',
      window.location.origin + `/main?category=${searchCategory}&value=${searchValue}`
    );

    store.state = {
      tripSchedules: filteredMainTripSchedules.data,
    };
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.travel-log__item', handler: this.changeToTripScheduleView },
      { type: 'submit', selector: '.travel-log__form', handler: this.filterToTripScheduleView },
    ];
  }
}

export default Main;
