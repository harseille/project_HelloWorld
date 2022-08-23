import Component from '../../core/Component.js';
import store from '../../store/store.js';

class DateInput extends Component {
  formattedDate(date) {
    const format = n => (n < 10 ? '0' + n : n + '');
    return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
  }

  render() {
    const { inputPlaceholder, calendarId, date } = this.props;

    // prettier-ignore
    return `<input 
      class="newTripDate datePicker" 
      id="${calendarId}" 
      type="text"
      name="${calendarId}" 
      placeholder="${inputPlaceholder}"
      value="${this.formattedDate(date)}"
      readonly 
    />`;
  }

  toggleDatePicker(e) {
    if (!e.target.matches('.datePicker')) return;

    const { id } = e.target;

    // if (id === 'newTripEndDate' && store.state.tripSchedule.startDate === null) return;

    store.state = {
      ...store.state,
      calendar: {
        ...store.state.calendar,
        activeCalendar: id,
      },
    };
  }

  addEventListener() {
    return [{ type: 'click', selector: '.newTrip__popup__form__input', handler: this.toggleDatePicker }];
  }
}

export default DateInput;
