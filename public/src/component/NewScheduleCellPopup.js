/* eslint-disable import/extensions */
import Component from '../core/Component.js';
import store from '../store/store.js';
import CellDatePicker from './DatePicker/CellDatePicker.js';

// store.state = {
//  localCommon: {
//   isShowModal: '',
// },
// localNewScheduleCell: {
//   selectedItineraryId: '',
//   info: {
//     type: '',
//     startTime: '',
//     endTime: '',
//     location: '',
//     memo: '',
//     todos: [],
//   },
// },
// localDatePicker: {
//   activeCalendar: '',
// },
//  tripShedule: {
//    newSceduleCellDate: Date 객체,
// }
// };

class NewScheduleCellPopup extends Component {
  render() {
    const { localNewScheduleCell, localDatePicker, tripSchedule } = store.state;
    const { type, startTime, endTime, location, memo, todos } = localNewScheduleCell.info;
    const { newScheduleCellDate, startDate, endDate, itinerary } = tripSchedule;

    const typeList = [
      { id: 'type__accomodation', value: 'accomodation', content: '숙박' },
      { id: 'type__sightseeing', value: 'sightseeing', content: '관광' },
      { id: 'type__transportation', value: 'transportation', content: '교통' },
      { id: 'type__etc', value: 'etc', content: '기타' },
    ];

    // prettier-ignore
    const timeList = [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
      '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
      '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
      '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
      '24:00',
    ];

    const [targetItinerary] = itinerary.filter(
      sch =>
        sch.date.getFullYear() === newScheduleCellDate.getFullYear() &&
        sch.date.getMonth() === newScheduleCellDate.getMonth() &&
        sch.date.getDate() === newScheduleCellDate.getDate()
    );

    const startUnabledTime = this.formatUnableTime(targetItinerary, 0);
    const endUnabledTime = this.formatUnableTime(targetItinerary, 1);
    console.log(startUnabledTime, endUnabledTime);
    const $datePicker = new CellDatePicker({
      ...localDatePicker,
      calendarId: 'newScheduleCellDate',
      inputPlaceholder: 'yyyy-mm-dd',
      labelContent: 'Select a day',
      unableType: 'term',
      date: newScheduleCellDate,
      isNot31: true,
      startDate,
      endDate,
      toggle: this.toggleDatePicker,
    }).render();

    // prettier-ignore
    return `<div class="dimmed__layer newCard">
    <div class="modal newCard__popup">
      <div class="modal__header">
        <div class="modal__header__title">새 스케쥴 추가</div>
        <button class="modal__header__close__btn" aria-label="닫기"></button>
      </div>
      <form class="newCard__popup__form">
        <div class="newCard__popup__form__container type">
          <h3 class="newCard__popup__form__title">타입</h3>
          <ul class="type__list">
          ${typeList.map(({ id, value, content }) => `<li class="type__item">
              <input id="${id}" name="type" type="radio" value="${value}" ${type === value? 'checked': ''}/>
              <label for="${id}">${content}</label>
            </li>`)
            .join('')}
          </ul>
        </div>
        <div class="newCard__popup__form__container time">
          <h3 class="newCard__popup__form__title">시간</h3>
          <div class="time__form">
            ${$datePicker}
            <div class="time__form__select">
              <label for="newCard__startTime">Start with</label>
              <select name="startTime" id="newCard__startTime" value="${startTime}">
                ${timeList.map(time => {
                  const isDisabled = startUnabledTime.includes(+time.slice(0,2));
                  return `<option value="${time}" ${startTime === time? 'selected':''} ${isDisabled? 'disabled': ''}>${time}</option>`
                }).join('')}
              </select>
            </div>
            <div class="time__form__select">
              <label for="newCard__endTime">End with</label>
              <select name="endTime" id="newCard__endTime" value="${endTime}">
                ${timeList.map(time => {
                  const st = +startTime.slice(0, 2)
                  const ct = +time.slice(0,2) 
                  const [unableFromStart] = endUnabledTime.filter(t => st + 1 < t)
                  const isDisabled = ct <= st ||  unableFromStart <= ct;
                  return `<option value="${time}" ${endTime === time? 'selected':''} ${isDisabled? 'disabled': ''}>${time}</option>`
                }).join('')}
              </select>
            </div>
          </div>
        </div>
        <div class="newCard__popup__form__container location">
          <h3 class="newCard__popup__form__title">위치</h3>
          <input type="text" name="location" class="location" autocomplete="off" value="${location.name === undefined ? '': location.name}"/>
        </div>
        <div class="newCard__popup__form__container memo">
          <h3 class="newCard__popup__form__title">메모</h3>
          <div class="memo__container">
            <div class="memo__title">
              <input type="text" class="memo-input" placeholder="메모를 입력해주세요." name="memo" value="${memo}" minLength="3" maxLength="100"/>
              <button class="memo__title__add__todo__btn" type="button" aria-label="todo 추가"></button>
            </div>
            <ul class="memo__todo__list">
            ${todos.map(
                ({ id, todo, completed }) => `<li class="memo__todo__item" data-id="${id}">
                <input type="checkbox" class="todo-chk" name="todo" id="todo${id}" ${completed ? 'checked' : ''}/>
                  <label class="memo__todo__item__chk" for="todo${id}">todo</label>
                  <input type="text" class="todo-input" value="${todo}" name="todo" placeholder="할 일을 적어주세요."/>
                <button class="memo__delete__btn" type="button" aria-label="삭제"></button>
              </li>`).join('')}
            </ul>
          </div>
        </div>
        <button class="newCard__popup__form__submit" ${type !== '' && location !== ''? '': 'disabled'}>완료</button>
      </form>
    </div>
  </div>`;
  }

  formatUnableTime(itinerary, restNum) {
    const unableTime = itinerary.cells
      .map(({ startTime, endTime }) => {
        const st = +startTime.slice(0, 2);
        const gap = +endTime.slice(0, 2) - st - restNum;

        return Array.from({ length: gap }, (_, i) => st + i + restNum);
      })
      .flat();

    return [...new Set(unableTime)].sort((a, b) => a - b);
  }

  toggleDatePicker(e) {
    if (!e.target.matches('.newCard__popup .datePicker')) return;
    store.state = {
      localDatePicker: {
        ...store.state.localDatePicker,
        activeCalendar: 'newScheduleCellDate',
      },
    };
  }

  addSchedule(e) {
    e.preventDefault();
    const {
      localCommon,
      localNewScheduleCell: { info, editCellId, selectedItineraryId },
      localDatePicker,
      tripSchedule,
    } = store.state;
    const { itinerary, newScheduleCellDate } = tripSchedule;

    // body의 scroll
    document.body.style.overflow = 'auto';
    const selectedYear = newScheduleCellDate.getFullYear();
    const selectedMonth = newScheduleCellDate.getMonth();
    const selectedDate = newScheduleCellDate.getDate();

    const countryName = info.location.formatted_address.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
    const isKorea = /대한민국/.test(countryName);
    const country = isKorea ? '대한민국' : countryName;
    const id = Math.max(...itinerary.map(sche => Math.max(...sche.cells.map(s => s.id), 0, 0))) + 1;

    const changeItinerary = iti => {
      if (!editCellId) {
        return iti.date.getFullYear() === selectedYear &&
          iti.date.getMonth() === selectedMonth &&
          iti.date.getDate() === selectedDate
          ? { ...iti, country, cells: [...iti.cells, { id, ...info, article: {} }] }
          : iti;
      }

      const [{ date, cells }] = tripSchedule.itinerary.filter(iti => iti.id === selectedItineraryId);
      if (date.getFullYear() === selectedYear && date.getMonth() === selectedMonth && date.getDate() === selectedDate) {
        return iti.id === selectedItineraryId
          ? {
              ...iti,
              cells: iti.cells.map(cell => (cell.id === editCellId ? { ...cell, ...info } : cell)),
            }
          : iti;
      }
      if (iti.id === selectedItineraryId) return { ...iti, cells: cells.filter(cell => cell.id !== editCellId) };
      if (
        iti.date.getFullYear() === selectedYear &&
        iti.date.getMonth() === selectedMonth &&
        iti.date.getDate() === selectedDate
      )
        return { ...iti, cells: [...iti.cells, { id: editCellId, ...info, article: {} }] };

      return iti;
    };
    store.state = {
      localCommon: { ...localCommon, isShowModal: '' },
      tripSchedule: {
        ...tripSchedule,
        itinerary: itinerary.map(iti => changeItinerary(iti)),
      },
      localDatePicker: {
        ...localDatePicker,
        newScheduleCellDate: null,
      },
    };
  }

  closeModal(e) {
    if (!e.target.matches('.newCard.dimmed__layer') && !e.target.matches('.newCard .modal__header__close__btn')) return;

    const { localCommon } = store.state;

    // body의 scroll
    document.body.style.overflow = 'auto';

    store.state = {
      localCommon: { ...localCommon, isShowModal: '' },
    };
  }

  changeTypeNTimeNMemo(e) {
    const { name, value } = e.target;
    const { localNewScheduleCell } = store.state;
    const { info } = localNewScheduleCell;
    let { endTime } = info;

    if (name === 'startTime') {
      const { formattedTime } = this.props;
      const newTime = +value.slice(0, 2);
      // 새로 선택된 startTime > endTime 면 endTime을 startTime + 1로 설정.
      const isPassed = newTime >= +endTime.slice(0, 2);
      endTime = isPassed ? formattedTime(newTime + 1) : endTime;
    }

    // [name]이 endTime도 될 수 있으므로 가장 뒤에 [name]: value 작성.
    store.state = {
      localNewScheduleCell: {
        ...localNewScheduleCell,
        info: {
          ...info,
          endTime,
          [name]: value,
        },
      },
    };
  }

  initAutoComplete(e) {
    // strictBounds: 쿼리가 전송될 때 자동 완성 위젯이 자동 완성 위젯의 경계 내에 있는 장소만 반환해야 함
    /* 
      field 
     -false(기본값)로 설정하면 결과가 경계 내에 포함된 장소로 편향되지만 이에 국한되지는 않습니다.
     -all: 모든 데이터 반환. 
     -addr_address : autocomplete로 나오는 value값.
     -geometry : location, viewport와 같은 google map의 정보.
     -name : 에펠탑과 같은 검색한 장소 결과값.
    */
    /* 
      types
      -반환될 예측 유형
      -establishment : 비즈니스 결과만 반환하도록 장소 자동 완성 서비스에 지시합니다.
    */
    const options = {
      fields: ['adr_address', 'formatted_address', 'geometry', 'name'],
      strictBounds: false,
      types: ['establishment'],
    };
    const autocomplete = new google.maps.places.Autocomplete(e.target, options);

    // place_changed는 Google Map API의 이벤트
    autocomplete.addListener('place_changed', () => {
      // 사용자가 선택한 장소.
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      const { localNewScheduleCell } = store.state;
      const { info } = localNewScheduleCell;

      store.state = {
        localNewScheduleCell: {
          ...localNewScheduleCell,
          info: {
            ...info,
            location: {
              ...place,
              name: e.target.value,
              latLng: { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() },
            },
          },
        },
      };

      document.querySelectorAll('.pac-container').forEach($pac => $pac.remove());
    });
  }

  addTodo() {
    const { localNewScheduleCell } = store.state;
    const { info } = localNewScheduleCell;
    const { todos } = info;

    const id = Math.max(...todos.map(todo => todo.id), 0) + 1;
    store.state = {
      localNewScheduleCell: {
        ...localNewScheduleCell,
        info: {
          ...info,
          todos: [...todos, { id, todo: '', completed: false }],
        },
      },
    };
  }

  deleteTodo(e) {
    if (!e.target.matches('.memo__delete__btn')) return;

    const { id } = e.target.closest('.memo__todo__item').dataset;
    const { localNewScheduleCell } = store.state;
    const { info } = localNewScheduleCell;
    const { todos } = info;

    store.state = {
      localNewScheduleCell: {
        ...localNewScheduleCell,
        info: {
          ...info,
          todos: todos.filter(todo => todo.id !== +id),
        },
      },
    };
  }

  changeTodo(e) {
    if (!e.target.matches('.todo-input') && !e.target.matches('.todo-chk')) return;

    const { localNewScheduleCell } = store.state;
    const { info } = localNewScheduleCell;
    const { todos } = info;
    const { id } = e.target.closest('.memo__todo__item').dataset;
    const { value } = e.target;

    const changedInfo = todo =>
      e.target.matches('.todo-input') ? { ...todo, todo: value } : { ...todo, completed: !todo.completed };

    store.state = {
      localNewScheduleCell: {
        ...localNewScheduleCell,
        info: {
          ...info,
          todos: todos.map(todo => (todo.id === +id ? changedInfo(todo) : todo)),
        },
      },
    };
  }

  preventEnterKey(e) {
    if (e.key === 'Enter') e.preventDefault();
  }

  addEventListener() {
    return [
      { type: 'submit', selector: '.newCard__popup__form', handler: this.addSchedule },
      { type: 'keydown', selector: '.newCard__popup__form input', handler: this.preventEnterKey },
      { type: 'click', selector: '.dimmed__layer.newCard', handler: this.closeModal },
      { type: 'click', selector: '.newCard .modal__header__close__btn', handler: this.closeModal },
      { type: 'change', selector: '.type__list', handler: this.changeTypeNTimeNMemo.bind(this) },
      {
        type: 'change',
        selector: '.newCard__popup__form__container .time__form__select',
        handler: this.changeTypeNTimeNMemo.bind(this),
      },
      { type: 'click', selector: '.memo__title__add__todo__btn', handler: this.addTodo },
      { type: 'click', selector: '.location', handler: this.initAutoComplete },
      { type: 'change', selector: '.memo-input', handler: this.changeTypeNTimeNMemo.bind(this) },
      { type: 'change', selector: '.memo__todo__list', handler: this.changeTodo },
      { type: 'click', selector: '.memo__todo__list', handler: this.deleteTodo },
    ];
  }
}

export default NewScheduleCellPopup;
