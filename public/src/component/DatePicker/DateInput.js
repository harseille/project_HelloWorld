/* eslint-disable class-methods-use-this */
import Component from '../../core/Component.js';
import store from '../../store/store.js';

class DateInput extends Component {
  formattedDate(date) {
    const format = n => (n < 10 ? '0' + n : n + '');
    return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
  }

  render() {
    const { inputPlaceholder, inputId, date } = this.props;

    return `
    <input class="newTripDate datePicker" id="${inputId}" type="text" name="${inputId}" placeholder="${inputPlaceholder}" 
    ${date ? `value="${this.formattedDate(date)}"` : ''}" readonly />
    `;
  }

  toggleDatePicker(e) {
    if (!e.target.matches('.datePicker')) return;

    const { id } = e.target;

    // 출발일이 설정 되었을 때에만 도착일 설정
    if (id === 'newTripEndDate' && store.state.tripSchedule.startDate === null) return;

    const targetDate =
      e.target?.value.split('-').join(',') === '' ? new Date() : new Date(e.target?.value.split('-').join(','));

    store.state = {
      ...store.state,
      ...store.state.tripSchedule,
      localDatePicker: {
        activeCalendar: e.target.nextElementSibling.id,
        currentDate: targetDate,
      },
    };
  }

  addEventListener() {
    return [{ type: 'click', selector: '.newTrip__popup__form__input', handler: this.toggleDatePicker }];
  }
}

export default DateInput;
