import Component from '../../core/Component.js';
import { DateInput, Calendar } from '../index.js';
// import store from '../../store/store.js';

class DatePicker extends Component {
  render() {
    const { isStartDate } = this.props;

    const _dateInput = new DateInput(this.props).render();
    const _calendar = new Calendar(this.props).render();

    return `
      <div class="newTrip__popup__form__input date__form">
      ${
        isStartDate
          ? `<label for="{newTripStartDate" class="a11yHidden">출발 날짜</label>`
          : `<label for="{newTripStartDate" class="a11yHidden">도착 날짜</label>`
      }
        ${_dateInput}
        ${_calendar}
      </div>`;
  }

  // addEventListener() {
  //   return [{ type: 'click', selector: '.calendar', handler: this.updateMonth }];
  // }
}

export default DatePicker;
