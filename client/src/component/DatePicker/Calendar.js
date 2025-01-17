/* eslint-disable class-methods-use-this */
import Component from '../../core/Component.js';
import store from '../../store/store.js';
import { getMoveDate, convertDateStringToDate } from './dateUtils.js';

class Calendar extends Component {
  get currentYear() {
    const { currentDate } = this.props;
    const _currentDate = typeof currentDate === 'string' ? new Date(currentDate) : currentDate;
    return _currentDate.getFullYear();
  }

  get currentMonth() {
    const { currentDate } = this.props;
    const _currentDate = typeof currentDate === 'string' ? new Date(currentDate) : currentDate;
    return _currentDate.getMonth();
  }

  setDateClass(month, date) {
    let { startDate } = this.props;
    const { endDate, currentDate, unableType, isNot31 } = this.props;

    const _currentDate = typeof currentDate === 'string' ? new Date(currentDate) : currentDate;
    const targetCurrentDate = new Date(_currentDate.getFullYear(), month, date);

    startDate = startDate || new Date();

    let _startDate = startDate;
    let _endDate = endDate;

    if (typeof _startDate === 'string') {
      _startDate = new Date(_startDate);
    }
    if (typeof _endDate === 'string') {
      _endDate = new Date(_endDate);
    }

    const startDateAfter31 = isNot31
      ? _endDate
      : // : new Date(_startDate.getFullYear(), _startDate.getMonth(), _startDate.getDate() + 31);
        getMoveDate(_startDate, 31);

    if (
      _startDate.getFullYear() === targetCurrentDate.getFullYear() &&
      _startDate.getMonth() === targetCurrentDate.getMonth() &&
      _startDate.getDate() === date
    )
      return 'start-date';

    if (
      _endDate !== null &&
      _endDate.getFullYear() === targetCurrentDate.getFullYear() &&
      _endDate.getMonth() === targetCurrentDate.getMonth() &&
      _endDate.getDate() === date
    )
      return 'end-date';

    let isUnableDate = false;

    if (unableType === 'start') {
      isUnableDate = targetCurrentDate < _startDate;
    }
    if (unableType === 'end') {
      isUnableDate = targetCurrentDate > startDateAfter31;
    }
    if (unableType === 'term') {
      isUnableDate = targetCurrentDate <= _startDate || targetCurrentDate >= startDateAfter31;
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
        localDatePicker: {
          ...store.state.localDatePicker,
          activeCalendar: '',
        },
      };
    }
  }

  updateSelectedDate(e) {
    if (!e.target.classList.contains('calendar__dates__item') || e.target.classList.contains('unable')) return;
    console.log('updateSelectedDate');

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

    // const _endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 31);
    const endDatePlus31 = getMoveDate(selectedDate, 31);
    const _startDate = convertDateStringToDate(startDate);
    const _endDate = convertDateStringToDate(endDate);

    let _itinerary = [];
    let _tripDays = 0;

    // 31일치
    if (_endDate !== null && endDatePlus31 < _endDate) {
      // TODO: cells 정보 살리기

      _itinerary = Array.from({ length: 31 }, (_, i) => ({
        id: i + 1,
        country: '',
        date: getMoveDate(selectedDate, i),
        cells: [],
      })).map(dayPlan => {
        const itineraryIndex = store.state.tripSchedule.itinerary.findIndex(
          ({ date }) => convertDateStringToDate(date).toDateString() === dayPlan.date.toDateString()
        );
        console.log(itineraryIndex);
        return itineraryIndex !== -1
          ? { ...dayPlan, cells: store.state.tripSchedule.itinerary[itineraryIndex].cells }
          : dayPlan;
      });

      console.log(selectedDate);
      console.log(_itinerary);

      store.state = {
        localDatePicker: {
          currentDate: selectedDate,
          activeCalendar: '',
        },
        tripSchedule: {
          ...store.state.tripSchedule,
          [activeCalendar]: selectedDate,
          endDate: endDatePlus31,
          tripDays: 31,
          itinerary: _itinerary,
        },
      };
      // 시작일로 맞추기
    } else if (_endDate !== null && activeCalendar === 'startDate' && selectedDate > _endDate) {
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
      // 일반
    } else {
      if (activeCalendar === 'startDate') {
        _tripDays = Math.floor((_endDate - selectedDate) / 86400000) + 1;
        _itinerary = Array.from({ length: _tripDays }, (_, i) => ({
          id: i + 1,
          country: '',
          date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + i),
          cells: [],
        })).map(dayPlan => {
          const itineraryIndex = store.state.tripSchedule.itinerary.findIndex(
            ({ date }) => convertDateStringToDate(date).toDateString() === dayPlan.date.toDateString()
          );

          return itineraryIndex !== -1
            ? { ...dayPlan, cells: store.state.tripSchedule.itinerary[itineraryIndex].cells }
            : dayPlan;
        });
      } else if (activeCalendar === 'endDate') {
        _tripDays = Math.floor((selectedDate - _startDate) / 86400000) + 1;
        _itinerary = Array.from({ length: _tripDays + 1 }, (_, i) => ({
          id: i + 1,
          country: '',
          date: new Date(_startDate.getFullYear(), _startDate.getMonth(), _startDate.getDate() + i),
          cells: [],
        })).map(dayPlan => {
          console.log(dayPlan);
          const itineraryIndex = store.state.tripSchedule.itinerary.findIndex(
            ({ date }) => convertDateStringToDate(date).toDateString() === dayPlan.date.toDateString()
          );
          console.log(itineraryIndex);
          return itineraryIndex !== -1
            ? { ...dayPlan, cells: store.state.tripSchedule.itinerary[itineraryIndex].cells }
            : dayPlan;
        });
      }

      _itinerary.map(dayPlan => {
        const itineraryIndex = store.state.tripSchedule.itinerary.findIndex(({ date }) => date === dayPlan.date);
        console.log(itineraryIndex);
        return itineraryIndex !== -1
          ? { ...dayPlan, cells: store.state.tripSchedule.itinerary[itineraryIndex].cells }
          : dayPlan;
      });

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
    }
    console.log(store.state);
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
