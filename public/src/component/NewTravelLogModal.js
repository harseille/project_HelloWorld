import Component from '../core/Component.js';
import { DatePicker } from './index.js';

class NewTravelLogModal extends Component {
  render() {
    const datePicker = new DatePicker().render();
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
            <input id="newTripTitle" type="text" name="newTripTitle" placeholder="예 : 5박 6일 유럽여행" />
          </div>
          <div class="newTrip__popup__form__input date__form">
            <label for="newTripStartDate" class="a11yHidden">출발 날짜</label>
            <input class="newTripDate" id="newTripStartDate" type="text" name="newTripStartDate" placeholder="출발일" readonly />
            ${datePicker}
          </div>
          <div class="newTrip__popup__form__input date__form">
            <label for="newTripEndDate" class="a11yHidden">도착 날짜</label>
            <input class="newTripDate" id="newTripEndDate" type="text" name="newTripEndDate" placeholder="도착일" readonly />
          </div>
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
          <div class="newTrip__popup__form__input self__input__form hide">
            <label for="inputPeople" class="a11yHidden">인원 수 입력</label>
            <input id="inputPeople" type="text" name="inputPeople" placeholder="6명 이상은 직접 입력해주세요." />
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

  showDatePicker(e) {
    document.querySelector('.datepicker').classList.toggle('hide');
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.dimmed__layer', handler: this.closeNewTravelModal },
      { type: 'click', selector: '.newTripDate', handler: this.showDatePicker },
    ];
  }
}

export default NewTravelLogModal;
