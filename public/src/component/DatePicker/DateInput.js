/* eslint-disable class-methods-use-this */
import Component from '../../core/Component.js';
import store from '../../store/store.js';
import { getFormattedDate } from './dateUtils.js';

class DateInput extends Component {
  render() {
    const { inputPlaceholder, inputId, date } = this.props;

    return `
    <input class="newTripDate datePicker" id="${inputId}" type="text" name="${inputId}" placeholder="${inputPlaceholder}" 
    ${date ? `value="${getFormattedDate(date)}"` : ''}" readonly />
    `;
  }

  toggleDatePicker(e) {
    if (!e.target.matches('.datePicker')) return;
    console.log('toggleDatePicker');

    const { id } = e.target;

    // 출발일이 설정 되었을 때에만 도착일 설정
    if (id === 'newTripEndDate' && store.state.tripSchedule.startDate === null) return;

    // Date 객체로 변환
    const targetDate =
      e.target?.value.split('-').join(',') === '' ? new Date() : new Date(e.target?.value.split('-').join(','));

    store.state = {
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
