import Component from '../../core/Component.js';
import { DateInput, Calendar } from '../index.js';
// import store from '../../store/store.js';

class DatePicker extends Component {
  render() {
    const { labelContent, inputId } = this.props;
    const _dateInput = new DateInput(this.props).render();
    const _calendar = new Calendar({ ...this.props, isNot31: false }).render();

    return `
      <div class="newTrip__popup__form__input date__form">
      <label for="${inputId}" class="a11yHidden">${labelContent}</label>
        ${_dateInput}
        ${_calendar}
      </div>`;
  }

  // addEventListener() {
  //   return [{ type: 'click', selector: '.calendar', handler: this.updateMonth }];
  // }
}

export default DatePicker;
