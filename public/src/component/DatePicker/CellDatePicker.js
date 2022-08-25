import Component from '../../core/Component.js';
import Calendar from './Calendar.js';

class CellDatePicker extends Component {
  formattedDate(date) {
    const format = n => (n < 10 ? '0' + n : n + '');
    return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
  }

  render() {
    const { calendarId, labelContent, inputPlaceholder, date } = this.props;
    const $calendar = new Calendar(this.props).render();
    return `<div class="time__form__input">
    <label for="${calendarId}">${labelContent}</label>
    <input id="${calendarId}" class="datePicker" type="text" name="date" placeholder="${inputPlaceholder}" value="${this.formattedDate(
      date
    )}" readOnly/>
    ${$calendar}
  </div>`;
  }

  addEventListener() {
    const { toggle } = this.props;
    return [{ type: 'click', selector: '.time__form__input input', handler: toggle }];
  }
}

export default CellDatePicker;
