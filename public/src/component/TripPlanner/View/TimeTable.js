import Component from '../../../core/Component.js';

class TimeTable extends Component {
  render() {
    return `
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
    `;
  }
}

export default TimeTable;
