import Component from '../../core/Component.js';
import Calendar from './Calendar.js';
import { getFormattedDate } from './dateUtils.js';

class CellDatePicker extends Component {
  render() {
    const { calendarId, labelContent, inputPlaceholder, date } = this.props;
    const $calendar = new Calendar(this.props).render();
    return `<div class="time__form__input">
    <label for="${calendarId}">${labelContent}</label>
    <input id="${calendarId}" class="datePicker" type="text" name="date" placeholder="${inputPlaceholder}" value="${getFormattedDate(
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
