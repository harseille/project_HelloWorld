/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
import Component from '../../../core/Component.js';
import store from '../../../store/store.js';
import { initMap, moveMapCenter } from '../../myMap.js';
import { NewScheduleCellPopup } from '../../index.js';
import {
  getFormattedTime,
  getFormattedDateMMDDDAY,
  convertDateStringToDate,
  getMoveDate,
} from '../../DatePicker/dateUtils.js';

class Itinerary extends Component {
  init() {
    initMap('tripSchedule');
  }

  render() {
    const {
      localCommon: { isShowModal },
      localItinerary: { currentId, startId, isShowNewScheuleCellBtn },
      localNewScheduleCell: {
        selectedItineraryId,
        info: { startTime },
      },
      tripSchedule: { itinerary },
    } = store.state;

    // prettier-ignore
    const timeList = [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
      '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
      '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
      '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
      '24:00',
    ];

    const $newScheduleCellPopup =
      isShowModal === 'newScheduleCellPopup'
        ? new NewScheduleCellPopup({ formattedTime: getFormattedTime }).render()
        : '';
    const _schedule = itinerary.filter((_, i) => i >= startId && i < startId + 3);

    // prettier-ignore
    return `
      <div id="googleMap" class="map"></div>
      <div class="carousel">
        <div class="carousel__days">
        ${_schedule
          .map(
            sched => `
              <div class="carousel__day-index" data-id=${sched.id}>
                <button class="carousel__day-index--add" data-id=${sched.id}></button>
                Day ${(sched.date - itinerary[0].date) / 86400000 + 1}
                <span>/</span> 
                ${getFormattedDateMMDDDAY(sched.date)}  
                ${currentId === sched.id
                ? `
                <ul class="carousel__days__add--list">
                  <li class="carousel__days__add--item first-item prev--add--item" data-controller="prev">앞에 추가</li>
                  <li class="carousel__days__add--item next--add--item" data-controller="next">뒤에 추가</li>
                  <li class="carousel__days__add--item delete--item" data-controller="delete">일정 삭제</li>
                </ul>
                `
                : ''
                }
              <div>${sched.country}</div>
            </div>`).join('')}
        </div>
        <button class="prev--btn carousel--btn">〈</button>
        <button class="next--btn carousel--btn">〉</button>
      </div>
      <div class="time-table">
        <ul class="time-table__times">
          ${timeList.map(time => `
          <li class="time-table__time-item">
            <span class="time-table__time">${time}</span>
            <span class="line"></span>
          </li>`).join('')}
        </ul>
        <div class="time-table__day-index">
        ${_schedule.map(sched => {
          const { cells, id } = sched;
          const cellTimeFromToArr = cells.map(cell => [+cell.startTime.slice(0, 2), +cell.endTime.slice(0, 2)]);
          
          return `
          <ul class="time-table__day-index__blank" data-id="${id}" 
            style="${store.state.localItinerary.newBgColor === id 
              ? 'background: rgba(200, 200, 200, 0.5);' 
              : ''}">
            ${timeList.map((timeItem, i, self) => {
              if (i === self.length - 1) return '';

              const time = +timeItem.slice(0, 2);
              const idx = cellTimeFromToArr.findIndex(([startTime, endTime]) => startTime <= time && time < endTime);
              const isInculdedCell = idx !== -1;
              const isFirstChildTime = isInculdedCell ? cells[idx].startTime === timeItem : null;
              const isLastChildTime = isInculdedCell
                ? getFormattedTime(+cells[idx].endTime.slice(0, 2) - 1) === timeItem : null;
              const liClass = isFirstChildTime && isLastChildTime
                  ? 'first-last' : isFirstChildTime
                  ? 'first' : isLastChildTime
                  ? 'last' : '';
              // timeItem 시간이 cells의 세부 일정 시작 시간과 같으면 div.itinerary-card를 추가
              // 세부 일정이 없는 시간이고 mouseover되었으면 button.itinerary-card--add를 추가
            return `
            <li data-time="${i}" class="${liClass}">
              ${isInculdedCell
                ? `
                <div class="itinerary-card itinerary-card--check ${cells[idx].type}" data-id="${cells[idx].id}" draggable="true">
                  <div class="itinerary-card-emph"></div>
                  ${isFirstChildTime
                    ? `
                    <div class="itinerary-card--check__content">
                      <div class="itinerary-card--check__title">${cells[idx].location.name}</div>
                      <div class="itinerary-card--check__memo">${cells[idx].memo}</div>
                    </div>
                    <button class="itinerary-card--delete" aria-label="일정 삭제"></button>`
                    : ''
                  }
                </div>`
                : isShowNewScheuleCellBtn && selectedItineraryId === id && startTime === timeItem && !isInculdedCell
                  ? '<button class="itinerary-card--add">+</button>'
                  : ''
              }
            </li>`}).join('')}
          </ul>
        `}).join('')}
        </div>
      </div>  
      ${$newScheduleCellPopup}`;
  }

  movePrevItinerary() {
    const { localItinerary } = store.state;
    let { startId } = localItinerary;

    if (startId === 0) {
      alert('이전 여행 일정이 없습니다.');
      return;
    }
    startId -= 1;

    store.state = {
      localItinerary: {
        ...localItinerary,
        startId,
      },
    };
  }

  moveNextItinerary() {
    const {
      localItinerary,
      tripSchedule: { itinerary },
    } = store.state;
    let { startId } = localItinerary;

    if (itinerary.length === startId + 3) {
      alert('이후 여행 일정이 없습니다.');
      return;
    }

    startId += 1;

    store.state = {
      localItinerary: {
        ...localItinerary,
        startId,
      },
    };
  }

  toggleItineraryPopup(e) {
    if (store.state.localCommon.isShowModal !== '') return;

    let currentId = '';

    if (e.target.matches('.carousel__day-index--add')) currentId = +e.target.dataset.id;
    else if (!e.target.closest('.carousel__days__add--list')) currentId = '';

    store.state = { localItinerary: { ...store.state.localItinerary, currentId } };
  }

  editItinerary(e) {
    if (!e.target.closest('.carousel__days__add--list')) return;

    const {
      tripSchedule,
      localItinerary,
      tripSchedule: { itinerary },
    } = store.state;
    const { controller } = e.target.dataset;
    const pointId = +e.target.closest('.carousel__day-index').dataset.id;

    const idx = itinerary.findIndex(sched => sched.id === pointId);
    const endDate = convertDateStringToDate(tripSchedule.endDate);
    const date = convertDateStringToDate(itinerary.find(sched => sched.id === pointId).date);
    const newId = controller === 'delete' ? '' : Math.max(...itinerary.map(iti => iti.id), 0) + 1;

    // endDate, newId 는 delete일 때만 필요없음
    let conditionBefore = '';
    let conditionAfter = '';

    if (controller === 'prev') {
      conditionBefore = (i, idx) => i < idx;
      conditionAfter = (i, idx) => i >= idx;
    }
    if (controller === 'next') {
      conditionBefore = (i, idx) => i <= idx;
      conditionAfter = (i, idx) => i > idx;
    }
    if (controller === 'delete') {
      conditionBefore = (i, idx) => i < idx;
      conditionAfter = (i, idx) => i > idx;
    }

    const beforeArr = itinerary.filter((_, i) => conditionBefore(i, idx));
    const afterArr = itinerary.filter((_, i) => conditionAfter(i, idx));

    const newItinerary = () => {
      if (controller === 'prev') {
        // prettier-ignore
        return [...beforeArr, {
          id: Math.max(...itinerary.map(iti => iti.id), 0) + 1,
          country: '',
          date,
          cells: [],
        },...afterArr.map((arr, i) => ({...arr, date: getMoveDate(date, i + 1) }))];
      }
      if (controller === 'next') {
        // prettier-ignore
        return [...beforeArr,{
            id: newId,
            country: '',
            date: getMoveDate(date, 1),
            cells: [],
          },...afterArr.map((arr, i) => ({ ...arr, date: getMoveDate(date, i + 2) }))];
      }
      if (controller === 'delete') {
        return [...beforeArr, ...afterArr.map((arr, i) => ({ ...arr, date: getMoveDate(date, i) }))];
      }
    };
    store.state = {
      localItinerary: {
        ...localItinerary,
        currentId: '',
        newBgColor: newId,
      },
      tripSchedule: {
        ...store.state.tripSchedule,
        endDate: controller === 'delete' ? endDate : getMoveDate(endDate, 1),
        itinerary: newItinerary(),
      },
    };
  }

  openCellModal(e) {
    if (e.target.matches('.time-table__day-index__blank .itinerary-card--delete')) return;
    const { localCommon, localNewScheduleCell, localItinerary, localDatePicker, tripSchedule } = store.state;
    const { itinerary } = tripSchedule;

    const selectedItineraryId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const [{ date, cells }] = itinerary.filter(sched => sched.id === selectedItineraryId);
    let editCellId = -1;
    let info = {
      ...localNewScheduleCell.info,
      type: '',
      location: '',
      memo: '',
      todos: [],
    };

    if (!e.target.classList.contains('itinerary-card--add')) {
      editCellId = +e.target.closest('.itinerary-card').dataset.id;
      info = cells.filter(cell => cell.id === editCellId).shift();
    }

    document.body.style.overflow = 'hidden';

    store.state = {
      localCommon: {
        ...localCommon,
        isShowModal: 'newScheduleCellPopup',
      },
      localItinerary: {
        ...localItinerary,
        isShowNewScheuleCellBtn: false,
      },
      localDatePicker: {
        ...localDatePicker,
        currentDate: date,
      },
      localNewScheduleCell: {
        ...localNewScheduleCell,
        editCellId,
        selectedItineraryId,
        info,
      },
      tripSchedule: {
        ...tripSchedule,
        newScheduleCellDate: date,
      },
    };
  }

  mouseoverTimetable(e) {
    const { localItinerary, localNewScheduleCell } = store.state;

    if (
      localItinerary.dragTarget ||
      e.target.closest('.time-table__day-index__blank .itinerary-card') ||
      !e.target.closest('.time-table__day-index__blank li')
    )
      return;

    const { id } = e.target.closest('.time-table__day-index__blank').dataset;
    const { time } = e.target.closest('.time-table__day-index__blank li').dataset;

    const newStartTime = getFormattedTime(+time);
    const newEndTime = getFormattedTime(+time + 1);
    const {
      selectedItineraryId,
      info: { startTime },
    } = localNewScheduleCell;

    if (+id === selectedItineraryId && startTime === newStartTime) return;

    store.state = {
      localItinerary: {
        ...localItinerary,
        isShowNewScheuleCellBtn: true,
      },
      localNewScheduleCell: {
        ...localNewScheduleCell,
        selectedItineraryId: +id,
        info: {
          ...localNewScheduleCell.info,
          startTime: newStartTime,
          endTime: newEndTime,
        },
      },
    };
  }

  mouseoutTimetable(e) {
    const { localCommon, localNewScheduleCell, localItinerary } = store.state;
    if (localCommon.isShowModal !== '') return;
    if (!localItinerary.isShowNewScheuleCellBtn) return;

    // if (!e.target.matches('.time-table') || e.target.matches('.itinerary-btns') || e.target.matches('.trip-container')) {
    if (
      !(
        e.target.matches('.time-table__day-index__blank li') ||
        e.target.matches('.time-table__day-index__blank li button')
      )
    ) {
      console.log('mouseout');
      // console.log(e.target);
      store.state = {
        localItinerary: {
          ...localItinerary,
          isShowNewScheuleCellBtn: false,
        },
        localNewScheduleCell: {
          ...localNewScheduleCell,
          selectedItineraryId: '',
          info: {
            ...localNewScheduleCell.info,
            startTime: '',
            endTime: '',
          },
        },
      };
    }
  }

  deleteCard(e) {
    console.log('deleteCard');
    const {
      tripSchedule,
      tripSchedule: { itinerary },
    } = store.state;
    const { id } = e.target.closest('.itinerary-card').dataset;
    const selectedItineraryId = +e.target.closest('.time-table__day-index__blank').dataset.id;

    store.state = {
      tripSchedule: {
        ...tripSchedule,
        itinerary: itinerary.map(sched =>
          sched.id === selectedItineraryId ? { ...sched, cells: sched.cells.filter(cell => cell.id !== +id) } : sched
        ),
      },
    };
  }

  dragCard(e) {
    e.dataTransfer.dropEffect = 'move';
    const selectedItineraryId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const dragTarget = +e.target.closest('.itinerary-card').dataset.id;

    store.state = {
      localItinerary: {
        ...store.state.localItinerary,
        dragTarget,
      },
      localNewScheduleCell: {
        ...store.state.localNewScheduleCell,
        selectedItineraryId,
      },
    };
  }

  dragoverCard(e) {
    if (!e.target.closest('.time-table__day-index__blank li')) return;
    e.preventDefault();
  }

  dropCard(e) {
    const {
      localItinerary,
      localItinerary: { dragTarget },
    } = store.state;

    if (e.target === dragTarget || !e.target.closest('.time-table__day-index__blank li')) {
      store.state = {
        localItinerary: {
          ...localItinerary,
          dragTarget: '',
        },
      };
      return;
    }

    const {
      tripSchedule,
      localNewScheduleCell: { selectedItineraryId },
    } = store.state;
    const { itinerary } = tripSchedule;

    const dropScheduleId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const dropTime = +e.target.closest('.time-table__day-index__blank li').dataset.time;

    const [{ cells }] = itinerary.filter(sched => sched.id === selectedItineraryId);
    const restItinerary = cells.filter(cell => cell.id !== dragTarget);
    let [targetItinerary] = cells.filter(cell => cell.id === dragTarget);
    let { startTime, endTime } = targetItinerary;

    const targetTimeGap = +endTime.slice(0, 2) - +startTime.slice(0, 2);
    endTime = dropTime + targetTimeGap;
    startTime = getFormattedTime(dropTime);
    endTime = endTime > 24 ? 24 : getFormattedTime(endTime);

    const changeTime = new Array(targetTimeGap).fill(1).map((_, i) => dropTime + i);
    const unableTime = restItinerary.map(cell => [+cell.startTime.slice(0, 2), +cell.endTime.slice(0, 2)]);
    const isAvailable = changeTime
      .map(time => unableTime.findIndex(([start, end]) => start <= time && time < end))
      .filter(val => val !== -1).length;

    // DND로 옮길 수 있는지 확인.
    if (isAvailable) {
      store.state = {
        localItinerary: {
          ...localItinerary,
          dragTarget: '',
        },
      };
      return;
    }

    // 바뀐 itinerary 객체 미리 할당
    targetItinerary = {
      ...targetItinerary,
      startTime,
      endTime,
    };

    // 스케쥴 체인지
    const changeShedule = sched => {
      if (sched.id === selectedItineraryId) {
        return {
          ...sched,
          cells:
            selectedItineraryId === dropScheduleId
              ? sched.cells.map(cell => (cell.id === dragTarget ? targetItinerary : cell))
              : restItinerary,
        };
      }

      if (sched.id === dropScheduleId) {
        return { ...sched, cells: [...sched.cells, targetItinerary] };
      }

      return sched;
    };
    // console.log(dragTarget, selectedItineraryId, dropScheduleId);
    store.state = {
      localItinerary: {
        ...localItinerary,
        dragTarget: '',
      },
      tripSchedule: {
        ...tripSchedule,
        itinerary: itinerary.map(sched => changeShedule(sched)),
      },
    };
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.prev--btn', component: 'prev--btn', handler: this.movePrevItinerary },
      { type: 'click', selector: '.next--btn', component: 'next--btn', handler: this.moveNextItinerary },
      { type: 'click', selector: 'window', handler: this.toggleItineraryPopup },
      { type: 'click', selector: '.itinerary-card--add', handler: this.openCellModal },
      { type: 'click', selector: '.itinerary-card', handler: moveMapCenter },
      { type: 'dblclick', selector: '.itinerary-card', handler: this.openCellModal },
      { type: 'click', selector: '.itinerary-card--delete', handler: this.deleteCard },
      { type: 'dragstart', selector: '.time-table__day-index__blank li', handler: this.dragCard },
      { type: 'dragover', selector: '.time-table__day-index__blank li', handler: this.dragoverCard },
      { type: 'drop', selector: '.time-table__day-index__blank li', handler: this.dropCard.bind(this) },
      { type: 'mouseover', selector: '.time-table', handler: this.mouseoverTimetable.bind(this) },
      { type: 'mouseout', selector: 'window', handler: this.mouseoutTimetable },
      {
        type: 'click',
        selector: '.carousel__days__add--list',
        handler: this.editItinerary,
      },
    ];
  }
}

export default Itinerary;
