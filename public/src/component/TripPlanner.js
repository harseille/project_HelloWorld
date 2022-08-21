import render from '../dom/render.js';
import Component from '../core/Component.js';

class TripPlanner extends Component {
  render() {
    return `
  <main class="detail-main">
  <!-- * cover 사진 및 post 수정 삭제-->
  <div class="cover">
    <div class="cover__inner">
      <div class="cover__content">
        <h2 class="cover__content__title">다낭 갔다왔습니다낭~</h2>
        <p class="cover__content__summary">베트남ㆍ3일</p>
      </div>
      <div class="cover__buttonbox">
      <label for="file">
        <div class="add-cover-btn"><img src="./assets/images/camera.svg" alt="커버사진 추가" /></div>
        <input type="file" name="file" id="file" class="add-cover-input" accept="image/*"/>
      </label>  
        <!--  <button class="edit-btn"><img src="./assets/images/post-edit.svg" alt="글 수정" /></button>
        <button class="remove-btn"><img src="/assets/images/cancel.svg" alt="글 삭제" /></button> -->
      </div>
    </div>
  </div>
  <!-- * sticky용 컨테이너 -->
  <div class="trip-container">
    <!-- * 왼쪽 좋아요, 공유 버튼 -->
    <div class="like-share-btnbox">
      <div class="like-container">
        <button class="like-btn"><img src="/assets/images/heart-nofill.svg" alt="좋아요" /></button>
        <span class="like-degit">68</span>
      </div>
      <button class="share-btn"><img src="/assets/images/share.svg" alt="공유하기" /></button>
    </div>
    <!-- * sticky용 메인 컨테이너 -->
    <div class="trip-main-container">
      <!-- * trip-planner생성 시 -->
      <form class="trip-planner">
        <div class="trip-planner__create">
          <div class="trip-planner__create__title">
            <input class="trip-planner__title" placeholder="어떤 여행인지 간단히 설명해주세요." />
          </div>
          <div class="trip-planner__create__content">
            <textarea class="trip-planner__content" placeholder="당신의 여행 스토리를 남겨보세요."></textarea>
          </div>
          <div class="trip-planner__create__option">
            <div class="trip-date trip-start-date">
              <span class="trip-date__span">여행 시작일</span>
              <button class="trip-date__btn">
                <span>2022-08-14</span>
                <img class="trip-date__btn__img" src="/assets/images/calendar-dark.svg" alt="캘린더" />
              </button>
            </div>
            <div class="trip-date trip-end-date">
              <span class="trip-date__span">여행 도착일</span>
              <button class="trip-date__btn">
                <span>2022-08-18</span>
                <img class="trip-date__btn__img" src="/assets/images/calendar-dark.svg" alt="캘린더" />
              </button>
            </div>
            <div class="trip-people"><input type="number" value="2" max="99" /><span>명</span></div>
          </div>
        </div>
      </form>
      <!-- * 탭 포함 메인 (지도/일정표, 스토리) -->
      <div class="trip-itinerary">
        <!-- * 탭 -->
        <div class="trip-itinerary__tab">
          <div class="trip-itinerary__tab__chart selected">지도/일정표</div>
          <div class="trip-itinerary__tab__story">스토리</div>
        </div>
        <!-- * 지도/일정표 -->
        <!-- start of container -->
      <div class="itinerary__container">
        <!-- google map -->
        <div class="map"></div>
        <!-- carousel -->
        <div class="carousel">
          <div class="carousel__days">
            <div class="carousel__day-index">
              <button class="carousel__day-index--add">+</button>Day1.08.14 Sat
              <div>영국</div>
            </div>
            <div class="carousel__day-index">
              <button class="carousel__day-index--add">+</button>Day2.08.18 Sun
              <div>프랑스</div>
            </div>
            <div class="carousel__day-index">
              <button class="carousel__day-index--add">+</button>Day3.08.25 Mon
              <div>이탈리아</div>
            </div>
            <div class="carousel__day-index">
              <button class="carousel__day-index--add">+</button>Day3.08.30 Mon
              <div>아이슬란드</div>
            </div>
          </div>
          <button class="prev--btn carousel--btn">〈</button>
          <button class="next--btn carousel--btn">〉</button>
          
          <ul class="carousel__days__add--list">
            <li class="carousel__days__add--item first-item">앞에 추가</li>
            <li class="carousel__days__add--item">뒤에 추가</li>
            <li class="carousel__days__add--item">일정 삭제</li>
          </ul>
          

        </div>

        <!-- time table -->
        <div class="time-table">
          <ul class="time-table__times">
            <li class="time-table__time-item">
              <span class="time-table__time">00:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">01:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">02:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">03:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">04:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">05:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">06:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">07:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">08:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">09:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">10:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">11:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">12:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">13:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">14:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">15:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">16:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">17:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">18:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">19:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">20:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">21:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">22:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">23:00</span>
              <span class="line"></span>
            </li>
            <li class="time-table__time-item">
              <span class="time-table__time">24:00</span>
              <span class="line"></span>
            </li>
          </ul>
          <div class="time-table__day-index">
            <ul class="time-table__day-index__blank">
              <li>
                <div class="itinerary-card itinerary-card--check">
                  <div class="itinerary-card-emph"></div>
                  <div class="itinerary-card--check__content">
                    <div class="itinerary-card--check__title">
                      히드로 공항
                    </div>
                    <div class="itinerary-card--check__memo">
                      공항 도착해서 유심칩 찾기
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="itinerary-card">
                  <button class="itinerary-card--add">+</button>
                </div>
              </li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
              <li><div class="itinerary-card"></li>
            </ul>
            <ul class="time-table__day-index__blank">
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
            </ul>
            <ul class="time-table__day-index__blank">
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
              <li>
                <span class="time"></span>
                <span class="line"></span>
              </li>
            </ul>
          </div>
        </div>

        <!-- private & public button -->
        <div class="itinerary-btns">
          <button class="itinerary-btns--private">나만의 일정</button>
          <button class="itinerary-btns--public">다른 사람들에게도 공유하기</button>
        </div>
        
      </div>
      <!-- end of container -->
        <!-- * 스토리 -->
        <div class="trip-story">
          <ul class="trip-story__day-list">
            <li class="trip-story__day-item">
              <div class="trip-story__day-content">
                <h3 class="trip-story__day-content__title">Day 1</h3>
                <p class="trip-story__day-content__summary">2022.08.14(Sun) | 베트남</p>
              </div>
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
              <article class="trip-article">
                <div class="trip-article__header">
                  <div class="trip-article__header__profile">
                    <img src="/assets/images/profile-mock.png" alt="프로필사진" class="profile-img" />
                  </div>
                  <div class="trip-article__header__content">
                    <p class="trip-article__header__content__place">호이안 마을</p>
                    <p class="trip-article__header__content__time">오후 10:00</p>
                  </div>
                  <div class="trip-article__header__badge">
                    <button class="add-btn">
                      <img src="/assets/images/post-add.svg" alt="포스트 작성" class="add-img" /> 포스트 작성
                    </button>
                  </div>
                </div>
              </article>
            </li>
            <li class="trip-story__day-item">
              <div class="trip-story__day-content">
                <h3 class="trip-story__day-content__title">Day 2</h3>
                <p class="trip-story__day-content__summary">2022.08.15(Mon) | 베트남</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- *댓글 -->
      <div class="comment">
        <h3 class="comment__title">댓글 (25)</h3>
        <div class="comment__container">
          <div class="comment__inputbox">
            <div class="comment__inputbox__profile">
              <img src="/assets/images/profile-mock.png" alt="프로필사진" class="profile-img" />
            </div>
            <div class="comment__inputbox__inputform">
              <label for="comment-input" class="a11yHidden">댓글입력창</label>
              <input type="text" name="comment-input" id="comment-input" placeholder="댓글을 입력해주세요." />
            </div>
            <button class="comment__inputbox__button"></button>
          </div>
          <div class="comment__box">
            <div class="comment__box__contentbox">
              <div class="comment__box__contentbox__profile">
                <img src="/assets/images/profile-mock.png" alt="프로필사진" class="profile-img" />
              </div>
              <div class="comment__box__contentbox__content">
                <p class="comment__box__contentbox__content__username">
                  이름
                  <span class="comment__box__contentbox__content__add-time">작성시간</span>
                </p>
                <p class="comment__box__contentbox__content__main">댓글내용</p>
              </div>
            </div>
            <div class="comment__box__buttonbox">
              <button class="recomment-btn"></button>
              <button class="remove-btn"></button>
            </div>
          </div>
          <div class="comment__inputbox recomment">
            <div class="comment__inputbox__profile">
              <img src="/assets/images/profile-mock.png" alt="프로필사진" class="profile-img" />
            </div>
            <div class="comment__inputbox__inputform">
              <label for="comment-input" class="a11yHidden">댓글입력창</label>
              <input type="text" name="comment-input" id="comment-input" placeholder="댓글을 입력해주세요." />
            </div>
            <button class="comment__inputbox__button"></button>
          </div>
          <div class="comment__box">
            <div class="comment__box__contentbox recomment">
              <div class="comment__box__contentbox__profile">
                <img src="/assets/images/profile-mock.png" alt="프로필사진" class="profile-img" />
              </div>
              <div class="comment__box__contentbox__content">
                <p class="comment__box__contentbox__content__username">
                  이름
                  <span class="comment__box__contentbox__content__add-time">작성시간</span>
                </p>
                <p class="comment__box__contentbox__content__main">댓글내용</p>
              </div>
            </div>
            <div class="comment__box__buttonbox">
              <button class="recomment-btn"></button>
              <button class="remove-btn"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- * 오른쪽 스크롤 네비 -->
    <div class="nav-day">
      <ul class="nav-day__list">
        <li class="nav-day__item active"><a href="">Top</a></li>
        <li class="nav-day__item"><a href="">Day 1</a></li>
        <li class="nav-day__item"><a href="">Day 2</a></li>
        <li class="nav-day__item"><a href="">Day 3</a></li>
        <li class="nav-day__item"><a href="">댓글</a></li>
      </ul>
    </div>
  </div>
</main>
  `;
  }

  renderSelectedContent(e) {
    [...document.querySelector('.trip-itinerary__tab').children].forEach(tab => {
      tab.classList.toggle('selected', e.target === tab);
    });
    if (e.target.classList.contains('trip-itinerary__tab__chart')) {
      document.querySelector('.itinerary__container').style.display = 'block';
      document.querySelector('.comment').style.display = 'none';
      document.querySelector('.trip-story').style.display = 'none';
    }
    if (e.target.classList.contains('trip-itinerary__tab__story')) {
      document.querySelector('.itinerary__container').style.display = 'none';
      document.querySelector('.comment').style.display = 'block';
      document.querySelector('.trip-story').style.display = 'block';
    }
  }

  checkNumOfWord(e, min, max) {
    const word = e.target.value;
    if (word.length < min || word.length > max) {
      console.log('글자수 맞춰');
    }
  }

  setCoverImg(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = e => {
      console.log(e.target.result);
      document.querySelector('.cover').style.background = `url(${e.target.result}) no-repeat center`;
    };
  }

  addEventListener() {
    return [
      { type: 'change', selector: '.add-cover-input', handler: this.setCoverImg },
      { type: 'keydown', selector: '.trip-planner__title', handler: e => this.checkNumOfWord(e, 3, 20) },
      { type: 'keydown', selector: '.trip-planner__content', handler: e => this.checkNumOfWord(e, 10, 200) },
      { type: 'click', selector: '.trip-itinerary__tab__chart', handler: this.renderSelectedContent },
      { type: 'click', selector: '.trip-itinerary__tab__story', handler: this.renderSelectedContent },
    ];
  }
}

export default TripPlanner;
