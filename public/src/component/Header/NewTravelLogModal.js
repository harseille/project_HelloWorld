import Component from '../../core/Component.js';
import { DatePicker } from '../index.js';
import store from '../../store/store.js';
import render from '../../dom/render.js';

class NewTravelLogModal extends Component {
  render() {
    const {
      localCommon: { isShowModal },
      localNewTripSchedule: { isFilledAllModalInput, isActiveSelfNumberOfPeopleInputForm },
      tripSchedule: { title, numberOfPeople, startDate, endDate },
    } = this.props;

    const startDatePickerProps = {
      ...this.props.tripSchedule,
      ...this.props.localDatePicker,
      inputId: 'newTripStartDate',
      calendarId: 'startDate',
      inputPlaceholder: '출발일',
      labelContent: '출발 날짜',
      date: startDate,
      startDate,
      endDate,
      unableType: 'none',
    };
    const endDatePickerProps = {
      ...this.props.tripSchedule,
      ...this.props.localDatePicker,
      inputId: 'newTripEndDate',
      calendarId: 'endDate',
      inputPlaceholder: '도착일',
      labelContent: '도착 날짜',
      date: endDate,
      startDate,
      endDate,
      unableType: 'term',
    };

    const _datePickerStartDate = new DatePicker(startDatePickerProps).render();
    const _datePickerEndDate = new DatePicker(endDatePickerProps).render();

    const options = [
      { value: '0', content: '여행인원을 선택 해주세요.' },
      { value: '1', content: '1명' },
      { value: '2', content: '2명' },
      { value: '3', content: '3명' },
      { value: '4', content: '4명' },
      { value: '5', content: '5명' },
    ];

    return `
    <!-- 새 일정 만들기 모달 -->
    <div class="dimmed__layer ${isShowModal === 'newTripScheduleModal' ? '' : 'hide'}">
      <div class="modal newTrip__popup">
        <div class="modal__header">
          <div class="modal__header__title">새 일정 만들기</div>
          <button class="modal__header__close__btn" aria-label="닫기"></button>
        </div>
        <form class="newTrip__popup__form">
          <div class="newTrip__popup__form__input">
            <label for="newTripTitle" class="a11yHidden">새 일정 제목</label>
            <input class="newTripTitle" type="text" name="newTripTitle" placeholder="예 : 5박 6일 하와이 여행" value="${title}" pattern=".{3,50}" required/>
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
                      `<option value="${value}" ${numberOfPeople === +value ? 'selected' : ''}>${content}</option>`
                  )
                  .join('')}
                <option value="6" ${numberOfPeople >= 6 ? 'selected' : ''}>직접입력</option>
              </optgroup>
            </select>
          </div>
          <div class="newTrip__popup__form__input self__input__form ${
            isActiveSelfNumberOfPeopleInputForm ? '' : 'hide'
          }">
            <label for="inputPeople" class="a11yHidden">인원 수 입력</label>
            <input class="inputPeople" id="inputPeople" type="number" name="inputPeople" placeholder="6명 이상은 직접 입력해주세요." value="${numberOfPeople}"/>
          </div>
          <button class="newTrip__popup__form__submit ${isFilledAllModalInput ? 'active' : ''}" type="button" ${
      isFilledAllModalInput ? '' : 'disabled'
    }>새 일정 만들기</button>
        </form>
      </div>
    </div>
    `;
  }

  closeNewTripScheduleModal(e) {
    console.log('closeNewTripScheduleModal');
    if (e.target.matches('.modal__header__close__btn') || e.target.matches('.dimmed__layer'))
      store.state = {
        ...store.state,
        localCommon: {
          ...store.state.localCommon,
          isShowModal: '',
        },
        localNewTripSchedule: {
          isFilledAllModalInput: false,
          isActiveSelfNumberOfPeopleInputForm: false,
        },
        localDatePicker: {
          activeCalendar: '',
          currentDate: new Date(),
        },
        tripSchedule: {
          ...store.state.tripSchedule,
          title: '',
          startDate: null,
          endDate: null,
          numberOfPeople: '',
        },
      };
  }

  inputTitle(e) {
    store.state = {
      ...store.state,
      tripSchedule: {
        ...store.state.tripSchedule,
        title: e.target.value,
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

  changeSelfInputForm(e) {
    console.log('changeSelfInputForm');
    const isActive = +e.target.value >= 6;

    store.state = {
      ...store.state,
      localNewTripSchedule: {
        isActiveSelfNumberOfPeopleInputForm: isActive,
      },
      tripSchedule: {
        ...store.state.tripSchedule,
        numberOfPeople: +e.target.value,
      },
    };
  }

  validateInputFill() {
    const {
      tripSchedule: { title, startDate, endDate },
    } = store.state;

    const isAllFilled = !!(title && startDate && endDate);
    store.state = {
      ...store.state,
      localNewTripSchedule: {
        ...store.state.localNewTripSchedule,
        isFilledAllModalInput: isAllFilled,
      },
    };
  }

  submitTripSchedule(e) {
    console.log('submitTripSchedule');

    const {
      tripSchedule: { startDate, endDate },
    } = store.state;

    const _tripDays = Math.floor((endDate - startDate) / 86400000) + 1;

    const _itinerary = Array.from({ length: _tripDays }, (_, i) => ({
      id: i + 1,
      country: '',
      date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i),
      cells: [],
    }));
    store.state = {
      ...store.state,
      localCommon: {
        ...store.state.localCommon,
        selectedTab: 'chart',
      },
      tripSchedule: {
        ...store.state.tripSchedule,
        tripDays: _tripDays,
        itinerary: _itinerary,
      },
    };

    // edit 페이지로 이동
    window.history.pushState({}, 'EditTripSchedule', window.location.origin + '/trip-planner-edit');
    render();
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.dimmed__layer', handler: this.closeNewTripScheduleModal },
      { type: 'change', selector: '.newTripTitle', handler: this.inputTitle },
      { type: 'change', selector: '.inputPeople', handler: this.inputNumberOfPeople },
      { type: 'change', selector: '.newTrip__popup__form__select', handler: this.changeSelfInputForm },
      { type: 'change', selector: '.newTrip__popup__form', handler: this.validateInputFill },
      { type: 'click', selector: '.newTrip__popup__form__submit', handler: this.submitTripSchedule },
    ];
  }
}

export default NewTravelLogModal;
