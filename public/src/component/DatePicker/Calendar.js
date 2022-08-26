/* eslint-disable class-methods-use-this */
import Component from '../../core/Component.js';
import store from '../../store/store.js';

class Calendar extends Component {
  get currentYear() {
    const { currentDate } = this.props;
    return currentDate.getFullYear();
  }

  get currentMonth() {
    const { currentDate } = this.props;
    return currentDate.getMonth();
  }

  setDateClass(month, date) {
    let { startDate } = this.props;
    const { endDate, currentDate, unableType } = this.props;

    const targetCurrentDate = new Date(currentDate.getFullYear(), month, date);

    startDate = startDate || new Date();
    const _endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 31);

    if (
      startDate.getFullYear() === targetCurrentDate.getFullYear() &&
      startDate.getMonth() === targetCurrentDate.getMonth() &&
      startDate.getDate() === date
    )
      return 'start-date';

    if (
      endDate !== null &&
      endDate.getFullYear() === targetCurrentDate.getFullYear() &&
      endDate.getMonth() === targetCurrentDate.getMonth() &&
      endDate.getDate() === date
    )
      return 'end-date';

    let isUnableDate = false;

    if (unableType === 'start') {
      isUnableDate = targetCurrentDate < startDate;
    }
    if (unableType === 'end') {
      isUnableDate = targetCurrentDate > _endDate;
    }
    if (unableType === 'term') {
      isUnableDate = targetCurrentDate <= startDate || targetCurrentDate >= _endDate;
    }

    return isUnableDate ? 'unable' : '';
  }

  // TODO: 추가사항 중간 날짜
  // isTripDate(date) {
  //   const { isStartDate, startDate, endDate, startDatePickerCurrentDate, endDatePickerCurrentDate } = this.props;
  //   if (startDate === null || endDate === null) return;

  //   if (isStartDate) {
  //     const targetDate = new Date(
  //       startDatePickerCurrentDate.getFullYear(),
  //       startDatePickerCurrentDate.getMonth(),
  //       date
  //     );
  //     return startDate < targetDate && targetDate < endDate ? 'trip-date' : '';
  //   }
  //   const targetDate = new Date(endDatePickerCurrentDate.getFullYear(), endDatePickerCurrentDate.getMonth(), date);
  //   return endDate < targetDate && targetDate < endDate ? 'trip-date' : '';

  // }

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
      date =>
        `<li class="calendar__dates__item prev-month ${this.setDateClass(this.currentMonth - 1, date)}">${date}</li>`
    );
    const thisMonthDatesDOMString = thisMonthDates.map(
      date =>
        `<li class="calendar__dates__item ${
          isCurrentMonth && date === today.getDate() ? 'today' : ''
        } ${this.setDateClass(this.currentMonth, date)}">${date}</li>`
    );
    const nextMonthDatesDOMString = nextMonthDates.map(
      date =>
        `<li class="calendar__dates__item next-month ${this.setDateClass(this.currentMonth + 1, date)}">${date}</li>`
    );
    return [...prevMonthDatesDOMString, ...thisMonthDatesDOMString, ...nextMonthDatesDOMString].join('');
  }

  render() {
    const { calendarId, activeCalendar } = this.props;

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
      <div class="calendar ${activeCalendar === calendarId ? '' : 'hide'}" id=${calendarId}>
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

  clickOutOfCalender(e) {
    const {
      localDatePicker: { activeCalendar },
    } = store.state;

    if (activeCalendar && !(e.target.matches('.datePicker') || e.target.closest('.calendar') !== null)) {
      console.log('clickOutOfCalender');
      store.state = {
        ...store.state,
        localDatePicker: {
          ...store.state.localDatePicker,
          activeCalendar: '',
        },
      };
    }
  }

  updateSelectedDate(e) {
    console.log('updateSelectedDate');
    if (!e.target.classList.contains('calendar__dates__item') || e.target.classList.contains('unable')) return;

    const {
      localDatePicker: { currentDate, activeCalendar },
      tripSchedule: { startDate, endDate, tripDays, itinerary },
    } = store.state;

    const selectedDate = new Date(
      currentDate.getFullYear(),
      e.target.matches('.prev-month')
        ? currentDate.getMonth() - 1
        : e.target.matches('.next-month')
        ? currentDate.getMonth() + 1
        : currentDate.getMonth(),
      e.target.textContent
    );

    const _endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 31);

    let _itinerary = [];
    let _tripDays = 0;

    if (endDate !== null && _endDate < endDate) {
      _itinerary = Array.from({ length: 31 }, (_, i) => ({
        id: i + 1,
        country: '',
        date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i),
        cells: [],
      }));

      store.state = {
        ...store.state,
        localDatePicker: {
          currentDate: selectedDate,
          activeCalendar: '',
        },
        tripSchedule: {
          ...store.state.tripSchedule,
          [activeCalendar]: selectedDate,
          endDate: _endDate,
          tripDays: 31,
          itinerary: _itinerary,
        },
      };
    } else if (endDate !== null && activeCalendar === 'startDate' && selectedDate > endDate) {
      store.state = {
        ...store.state,
        localDatePicker: {
          currentDate: selectedDate,
          activeCalendar: '',
        },
        tripSchedule: {
          ...store.state.tripSchedule,
          startDate: selectedDate,
          endDate: selectedDate,
          tripDays: 1,
          itinerary: [
            {
              id: 1,
              country: '',
              date: selectedDate,
              cells: [],
            },
          ],
        },
      };
    } else {
      if (activeCalendar === 'startDate') {
        _tripDays = Math.floor((endDate - selectedDate) / 86400000) + 1;
        _itinerary = Array.from({ length: _tripDays }, (_, i) => ({
          id: i + 1,
          country: '',
          date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + i),
          cells: [],
        }));
      } else if (activeCalendar === 'endDate') {
        _tripDays = Math.floor((selectedDate - startDate) / 86400000) + 1;
        _itinerary = Array.from({ length: _tripDays }, (_, i) => ({
          id: i + 1,
          country: '',
          date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i),
          cells: [],
        }));
      }

      console.log(_tripDays);
      console.log(_itinerary);

      console.log();

      store.state = {
        ...store.state,
        localDatePicker: {
          currentDate: selectedDate,
          activeCalendar: '',
        },
        tripSchedule: {
          ...store.state.tripSchedule,
          [activeCalendar]: selectedDate,
          tripDays: _tripDays > 0 ? _tripDays : tripDays,
          itinerary: _tripDays > 0 ? _itinerary : itinerary,
        },
      };
      console.log(store.state.tripSchedule);
    }
  }

  updateMonth(e) {
    if (!(e.target.classList.contains('prev-month') || e.target.classList.contains('next-month'))) return;
    console.log('updateMonth');

    const {
      // tripSchedule: { startDatePickerCurrentDate, endDatePickerCurrentDate },
      localDatePicker: { currentDate },
    } = store.state;
    // const { id } = e.target.closest('.calendar');

    const delta = e.target.matches('.prev-month') ? -1 : 1;

    store.state = {
      ...store.state,
      localDatePicker: {
        ...store.state.localDatePicker,
        currentDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + delta),
      },
    };
  }

  addEventListener() {
    return [
      { type: 'click', selector: 'window', component: 'Calendar', handler: this.clickOutOfCalender },
      { type: 'click', selector: '.calendar__dates__list', handler: this.updateSelectedDate },
      { type: 'click', selector: '.calendar', handler: this.updateMonth },
    ];
  }
}

export default Calendar;
