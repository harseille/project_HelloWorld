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
    const { activeSelfInputForm, tripTitle, numberOfPeople } = this.props;

    const _datePickerStartDate = new DatePicker({ ...this.props, isStartDate: true }).render();
    const _datePickerEndDate = new DatePicker({ ...this.props, isStartDate: false }).render();

    return `
    <!-- 새 일정 만들기 모달 -->
    <div class="dimmed__layer hide">
      <div class="modal newTrip__popup">
        <div class="modal__header">
          <div class="modal__header__title">새 일정 만들기</div>
          <button class="modal__header__close__btn" aria-label="닫기"></button>
        </div>
        <form class="newTrip__popup__form">
          <div class="newTrip__popup__form__input">
            <label for="newTripTitle" class="a11yHidden">새 일정 제목</label>
            <input id="newTripTitle" type="text" name="newTripTitle" placeholder="예 : 5박 6일 유럽여행" value="${tripTitle}"/>
          </div>
          ${_datePickerStartDate}
          ${_datePickerEndDate}
          <div class="newTrip__popup__form__select">
            <label for="selectedPeople" class="a11yHidden">인원 수</label>
            <select name="selectedPeople" id="selectedPeople">
              <optgroup>
                <option value="1" selected>1명</option>
                <option value="2">2명</option>
                <option value="3">3명</option>
                <option value="4">4명</option>
                <option value="5">5명</option>
                <option value="6">직접입력</option>
              </optgroup>
            </select>
          </div>
          <div class="newTrip__popup__form__input self__input__form ${activeSelfInputForm ? '' : 'hide'}">
            <label for="inputPeople" class="a11yHidden">인원 수 입력</label>
            <input id="inputPeople" type="text" name="inputPeople" placeholder="6명 이상은 직접 입력해주세요." value="${numberOfPeople}"/>
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

  showSelfInputForm(e) {
    console.log(e.target);
    if (e.target.value !== 6) return;
    console.log(123);
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.dimmed__layer', handler: this.closeNewTravelModal },
      { type: 'click', selector: '.newTrip__popup__form__select', handler: this.showSelfInputForm },
    ];
  }
}

export default NewTravelLogModal;
