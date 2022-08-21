import Component from '../core/Component.js';
import store from '../store/store.js';

class DatePicker extends Component {
  get currentYear() {
    return store.state.currentDate.getFullYear();
  }

  get currentMonth() {
    return store.state.currentDate.getMonth();
  }

  renderCalendarGridDates() {
    const { currentDate } = store.state;
    const today = new Date();

    const thisMonthFirstday = new Date(this.currentYear, this.currentMonth, 1).getDay(); // 1
    // 이번달의 마지막의 요일
    const nextMonthLastDay = new Date(this.currentYear, this.currentMonth + 1, 0).getDay();
    // 이번달의 마지막 날
    const thisMonthLastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    // 이전달의 마지막 날
    const prevMonthLastDate = new Date(this.currentYear, this.currentMonth, 0).getDate();

    const prevMonthDates = Array.from({ length: thisMonthFirstday })
      .map((_, index) => prevMonthLastDate - index)
      .reverse();

    const thisMonthDates = Array.from({ length: thisMonthLastDate }).map((_, index) => index + 1);

    const nextMonthDates = Array.from({ length: 6 - nextMonthLastDay }).map((_, index) => index + 1);

    const isToday = currentDate.year === today.year && currentDate.month === today.month;

    const prevMonthDatesDOMString = prevMonthDates.map(
      date => `<li class="datepicker__dates__item prev-month">${date}</li>`
    );
    const thisMonthDatesDOMString = thisMonthDates.map(
      date => ` <li class="datepicker__dates__item ${isToday && date === today.date ? 'today' : ''}">${date}</li>`
    );
    const nextMonthDatesDOMString = nextMonthDates.map(
      date => `<li class="datepicker__dates__item next-month">${date}</li>`
    );
    return [...prevMonthDatesDOMString, ...thisMonthDatesDOMString, ...nextMonthDatesDOMString].join('');
  }

  render() {
    store.state = { currentDate: new Date() };

    const MONTH_NAMES = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const DAY_OF_THE_WEEK_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

    return `
      <div class="datepicker hide">
        <div class="datepicker__header">
          <strong>${MONTH_NAMES[this.currentMonth]} ${this.currentYear}</strong>
          <button class="datepicker__prev__btn">이전 달</button>
          <button class="datepicker__next__btn">다음 달</button>
        </div>
        <div class="datepicker__contents">
          <ul class="datepicker__week__list">
            ${DAY_OF_THE_WEEK_NAMES.map(day => `<li class="datepicker__week__item">${day}</li>`).join('')}
          </ul>
          <ul class="datepicker__dates__list">
            ${this.renderCalendarGridDates()}
          </ul>
        </div>
      </div>`;
  }
}

export default DatePicker;
