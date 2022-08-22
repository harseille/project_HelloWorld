import Component from '../core/Component.js';
import { DatePicker } from './index.js';
import store from '../store/store.js';

/** Data set
 *  _store: {
    isShowModal: 'newTripSchedulePopup',
    tripSchedule: {
      activeStartDateCalendar: false,
      activeEndDateCalendar: false,
      activeSelfInputForm: false,
      tripTitle: '',
      startDate: null,
      startDatePickerCurrentDate: new Date(),
      endDate: null,
      endDatePickerCurrentDate: new Date(),
      numberOfPeople: '',
    },
  },
 */

class NewTravelLogModal extends Component {
  render() {
    const { activeSelfNumberOfPeopleInputForm, tripTitle, numberOfPeople } = this.props;

    const _datePickerStartDate = new DatePicker({ ...this.props, isStartDate: true }).render();
    const _datePickerEndDate = new DatePicker({ ...this.props, isStartDate: false }).render();

    const options = [
      { value: '1', content: '1명' },
      { value: '2', content: '2명' },
      { value: '3', content: '3명' },
      { value: '4', content: '4명' },
      { value: '5', content: '5명' },
      // { value: '6', content: '직접입력' },
    ];

    return `
    <!-- 새 일정 만들기 모달 -->
    <div class="dimmed__layer">
      <div class="modal newTrip__popup">
        <div class="modal__header">
          <div class="modal__header__title">새 일정 만들기</div>
          <button class="modal__header__close__btn" aria-label="닫기"></button>
        </div>
        <form class="newTrip__popup__form">
          <div class="newTrip__popup__form__input">
            <label for="newTripTitle" class="a11yHidden">새 일정 제목</label>
            <input class="newTripTitle" type="text" name="newTripTitle" placeholder="예 : 5박 6일 유럽여행" value="${tripTitle}"/>
          </div>
          ${_datePickerStartDate}
          ${_datePickerEndDate}
          <div class="newTrip__popup__form__select">
            <label for="selectedPeople" class="a11yHidden">인원 수</label>
            <select name="selectedPeople" id="selectedPeople">
              <optgroup>
                ${options
                  .map(
                    ({ value, content }) =>
                      `<option value="${value}" ${numberOfPeople === value ? 'selected' : ''}>${content}</option>`
                  )
                  .join('')}
                  <option value="6" ${numberOfPeople >= 6 ? 'selected' : ''}>직접입력</option>
              </optgroup>
            </select>
          </div>
          <div class="newTrip__popup__form__input self__input__form ${activeSelfNumberOfPeopleInputForm ? '' : 'hide'}">
            <label for="inputPeople" class="a11yHidden">인원 수 입력</label>
            <input class="inputPeople" id="inputPeople" type="number" name="inputPeople" placeholder="6명 이상은 직접 입력해주세요." value="${numberOfPeople}"/>
          </div>
          <button class="newTrip__popup__form__submit">새 일정 만들기</button>
        </form>
      </div>
    </div>
    `;
  }

  closeNewTravelModal(e) {
    if (e.target.matches('.modal__header__close__btn'))
      document.querySelector('.newTravelLogModal .dimmed__layer').classList.add('hide');

    if (e.target.closest('.newTrip__popup')) return;

    if (e.target.matches('.dimmed__layer')) {
      document.querySelector('.newTravelLogModal .dimmed__layer').classList.add('hide');
    }
  }

  changeSelfInputForm(e) {
    console.log(e.target.value);
    if (+e.target.value >= 6) {
      store.state = {
        ...store.state,
        tripSchedule: {
          ...store.state.tripSchedule,
          activeSelfNumberOfPeopleInputForm: true,
          numberOfPeople: +e.target.value,
        },
      };
    } else {
      store.state = {
        ...store.state,
        tripSchedule: {
          ...store.state.tripSchedule,
          activeSelfNumberOfPeopleInputForm: false,
          numberOfPeople: +e.target.value,
        },
      };
    }
  }

  inputTripTitle(e) {
    // const _tripTitle = e.target.value.replace(/^.{0,20}$/);
    store.state = {
      ...store.state,
      tripSchedule: {
        ...store.state.tripSchedule,
        tripTitle: e.target.value,
      },
    };
  }

  inputNumberOfPeople(e) {
    store.state = {
      ...store.state,
      tripSchedule: {
        ...store.state.tripSchedule,
        numberOfPeople: +e.target.value,
      },
    };
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.dimmed__layer', handler: this.closeNewTravelModal },
      { type: 'change', selector: '.newTrip__popup__form__select', handler: this.changeSelfInputForm },
      { type: 'input', selector: '.newTripTitle', handler: this.inputTripTitle },
      { type: 'input', selector: '.inputPeople', handler: this.inputNumberOfPeople },
    ];
  }
}

export default NewTravelLogModal;
