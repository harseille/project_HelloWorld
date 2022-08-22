import Component from '../../core/Component.js';
import store from '../../store/store.js';

class DateInput extends Component {
  formattedDate(date) {
    const format = n => (n < 10 ? '0' + n : n + '');
    return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
  }

  render() {
    const { isStartDate, startDate, endDate } = this.props;

    return `
      ${
        isStartDate
          ? `<input class="newTripDate datePicker" id="newTripStartDate" type="text" name="newTripStartDate" placeholder="출발일" value="${
              startDate ? this.formattedDate(startDate) : ''
            }"readonly />`
          : `<input class="newTripDate datePicker" id="newTripEndDate" type="text" name="newTripEndDate" placeholder="도착일" value="${
              endDate ? this.formattedDate(endDate) : ''
            }"readonly />`
      }
    `;
  }

  toggleDatePicker(e) {
    if (!e.target.matches('.datePicker')) return;

    const { id } = e.target;

    if (id === 'newTripEndDate' && store.state.tripSchedule.startDate === null) return;

    store.state = {
      ...store.state,
      tripSchedule: {
        ...store.state.tripSchedule,
        activeStartDateCalendar: id === 'newTripStartDate',
        activeEndDateCalendar: id === 'newTripEndDate',
      },
    };
  }

  addEventListener() {
    return [{ type: 'click', selector: '.newTrip__popup__form__input', handler: this.toggleDatePicker }];
  }
}

export default DateInput;
