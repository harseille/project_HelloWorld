import Component from '../../core/Component.js';
import store from '../../store/store.js';

class Calendar extends Component {
  get currentYear() {
    const { date } = this.props;
    return date.getFullYear();
  }

  get currentMonth() {
    const { date } = this.props;
    return date.getMonth();
  }

  dateDisable(month, date) {
    //   const { isStartDate, startDate, endDatePickerCurrentDate } = this.props;
    //   if (isStartDate || startDate === null) return '';
    //   // 출발일 ~ 출발일+31
    //   const targetEndDateCurrentDate = new Date(
    //     endDatePickerCurrentDate.getFullYear(),
    //     endDatePickerCurrentDate.getMonth() + month,
    //     date
    //   );
    //   const isUnableDate =
    //     targetEndDateCurrentDate >= startDate &&
    //     targetEndDateCurrentDate <= new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 31);
    //   return isUnableDate ? '' : 'unable';
  }

  isStartDate(date) {
    //   const { startDate, startDatePickerCurrentDate } = this.props;
    //   if (startDate === null) return '';
    //   return startDate.getFullYear() === startDatePickerCurrentDate.getFullYear() &&
    //     startDate.getMonth() === startDatePickerCurrentDate.getMonth() &&
    //     startDate.getDate() === date
    //     ? 'start-date'
    //     : '';
  }

  isEndDate(date) {
    //   const { endDate, endDatePickerCurrentDate } = this.props;
    //   if (endDate === null) return '';
    //   return endDate.getFullYear() === endDatePickerCurrentDate.getFullYear() &&
    //     endDate.getMonth() === endDatePickerCurrentDate.getMonth() &&
    //     endDate.getDate() === date
    //     ? 'end-date'
    //     : '';
  }

  renderCalendarGridDates() {
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

    const isCurrentMonth = this.currentYear === today.getFullYear() && this.currentMonth === today.getMonth();

    const prevMonthDatesDOMString = prevMonthDates.map(
      date => `<li class="calendar__dates__item prev-month ${this.dateDisable(-1, date)}">${date}</li>`
    );
    const thisMonthDatesDOMString = thisMonthDates.map(
      date =>
        `<li class="calendar__dates__item ${
          isCurrentMonth && date === today.getDate() ? 'today' : ''
        } ${this.dateDisable(0, date)} ${this.isStartDate(date)} ${this.isEndDate(date)}">${date}</li>`
    );
    const nextMonthDatesDOMString = nextMonthDates.map(
      date => `<li class="calendar__dates__item next-month ${this.dateDisable(1, date)}">${date}</li>`
    );
    return [...prevMonthDatesDOMString, ...thisMonthDatesDOMString, ...nextMonthDatesDOMString].join('');
  }

  render() {
    const { activeCalendar, calendarId } = this.props;
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
      <div class="calendar" id=${calendarId}>
        <div class="calendar__header">
          <strong>${MONTH_NAMES[this.currentMonth]} ${this.currentYear}</strong>
          <button class="calendar__prev__btn prev-month" type="button">이전 달</button>
          <button class="calendar__next__btn next-month" type="button">다음 달</button>
        </div>
        <div class="calendar__contents">
          <ul class="calendar__week__list">
            ${DAY_OF_THE_WEEK_NAMES.map(day => `<li class="calendar__week__item">${day}</li>`).join('')}
          </ul>
          <ul class="calendar__dates__list">
            ${this.renderCalendarGridDates()}
          </ul>
        </div>
      </div>`;
  }

  addEventListener() {
    return [
      // { type: 'click', selector: 'window', component: 'Calendar', handler: this.clickOutOfCalender },
      // { type: 'click', selector: '.calendar__dates__list', handler: this.updateSelectedDate },
      // { type: 'click', selector: '.calendar', handler: this.updateMonth },
    ];
  }
}

export default Calendar;
