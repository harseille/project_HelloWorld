import Component from '../../../core/Component.js';

class ViewPlanMap extends Component {
  render() {
    return `
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
    `;
  }
}

export default ViewPlanMap;
