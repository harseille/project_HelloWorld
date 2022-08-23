import Component from '../../core/Component.js';
import DateInput from './DateInput.js';
import Calendar from './Calendar.js';
//  {
//  calendarId: '',
//  activeCalendar: '',
//  inputPlaceholder: '' ,
//  labelContent: '',
//  date: ''
//  }

class DatePicker extends Component {
  render() {
    const { labelContent } = this.props;

    const _dateInput = new DateInput(this.props).render();
    const _calendar = new Calendar(this.props).render();

    return `
      <div class="newTrip__popup__form__input date__form">
        <label for="{newTripStartDate" class="a11yHidden">${labelContent}</label>
        ${_dateInput}
        ${_calendar}
      </div>`;
  }
}

export default DatePicker;
