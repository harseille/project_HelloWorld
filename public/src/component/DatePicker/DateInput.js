import Component from '../../core/Component.js';
import store from '../../store/store.js';

class DateInput extends Component {
  formattedDate(date) {
    const format = n => (n < 10 ? '0' + n : n + '');
    return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
  }

  render() {
    const { inputPlaceholder, calendarId, date } = this.props;

    return `
    <input class="newTripDate datePicker" id="${calendarId}" type="text" name="${calendarId}" placeholder="${inputPlaceholder}"
    ${date ? `value="${this.formattedDate(date)}"` : ''}" readonly />
    `;
  }

  toggleDatePicker(e) {
    if (!e.target.matches('.datePicker')) return;

    const { id } = e.target;
    const {
      tripSchedule: { activeStartDateCalendar, activeEndDateCalendar },
    } = store.state;

    // 출발일이 설정 되었을 때에만 도착일 설정
    if (id === 'newTripEndDate' && store.state.tripSchedule.startDate === null) return;
    console.log('toggleDatePicker');

    store.state = {
      ...store.state,
      tripSchedule: {
        ...store.state.tripSchedule,
        activeStartDateCalendar: id === 'newTripStartDate' && !activeStartDateCalendar,
        activeEndDateCalendar: id === 'newTripEndDate' && !activeEndDateCalendar,
      },
    };
  }

  addEventListener() {
    return [{ type: 'click', selector: '.newTrip__popup__form__input', handler: this.toggleDatePicker }];
  }
}

export default DateInput;
