/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
import Component from '../../../core/Component.js';
// import myMap from '../../myMap.js';
import { initMap, moveMapCenter } from '../../myMap.js';
import store from '../../../store/store.js';
import { NewScheduleCellPopup } from '../../index.js';

class Itinerary extends Component {
  // formattedDate(date) {
  //   const format = n => (n < 10 ? '0' + n : n + '');
  //   return `${format(date?.getMonth() + 1)}.${format(date?.getDate())}.${format(date?.getDay())}`;
  // }
  init() {
    initMap();
  }

  formattedTime(time) {
    return time < 10 ? `0${time}:00` : `${time}:00`;
  }

  render() {
    const {
      localCommon: { isShowModal },
      localItinerary,
      localNewScheduleCell: {
        selectedItineraryId,
        info: { startTime },
      },
      tripSchedule: { itinerary },
    } = store.state;
    const { currentId, startId, isShowNewScheuleCellBtn } = localItinerary;
    // const _schedule = schedule.filter(sched => sched.id > startId && sched.id <= startId + 3); // 이게 있으면 앞뒤 삭제 버튼이 안 됨..
    // const setSchedule = {
    //   id: startId + 1,
    //   country: '영국',
    //   date: startDate.getDate(),
    //   day: startDate.getDay(),
    //   cells: [],
    // };

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
        ? new NewScheduleCellPopup({ formattedTime: this.formattedTime.bind(this) }).render()
        : '';
    const _schedule = itinerary.filter((_, i) => i >= startId && i < startId + 3);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // prettier-ignore
    return `
      <div id="googleMap" class="map"></div>
      <div class="carousel">
        <div class="carousel__days">
        ${
          _schedule.map(sched =>  `
            <div class="carousel__day-index" data-id=${sched.id}>

              <button class="carousel__day-index--add" data-id=${sched.id}></button>Day ${sched.id} <span>/</span> ${sched.date.getMonth()+1<10 ? '0'+(sched.date.getMonth()+1) : sched.date.getMonth()+1}.${sched.date.getDate()<10 ? '0'+sched.date.getDate() : (sched.date.getDate())} ${days[sched.date.getDay()]}      
              ${currentId === sched.id ? `
                <ul class="carousel__days__add--list">
                  <li class="carousel__days__add--item first-item prev--add--item">앞에 추가</li>
                  <li class="carousel__days__add--item next--add--item">뒤에 추가</li>
                  <li class="carousel__days__add--item delete--item">일정 삭제</li>
                </ul>
              `: ''}
              <div>${sched.country}</div>
            </div>`).join('')
        }
      </div>
      <button class="prev--btn carousel--btn">〈</button>
      <button class="next--btn carousel--btn">〉</button>
    </div>

    <!-- time table -->
    <div class="time-table">
      <ul class="time-table__times">
        ${timeList.map(time => `<li class="time-table__time-item">
          <span class="time-table__time">${time}</span>
          <span class="line"></span>
        </li>`).join('')}
      </ul>
      <div class="time-table__day-index">
      ${_schedule.map(sch => {
        const { cells, id } = sch;
        const cellTimeFromToArr = cells.map(cell => [+cell.startTime.slice(0,2), +cell.endTime.slice(0,2)])

        return `
        <ul class="time-table__day-index__blank" data-id="${id}">
          ${timeList.map((timeItem, i, self) => {
            if(i === self.length - 1) return '';

            const time = +timeItem.slice(0, 2)
            const idx = cellTimeFromToArr.findIndex(([startTime, endTime]) => startTime <= time && time < endTime)
            const isInculdedCell = idx !== -1
            const isFirstChildTime = isInculdedCell? (cells[idx].startTime === timeItem) : null;
            const isLastChildTime = isInculdedCell? 
              (this.formattedTime(+cells[idx].endTime.slice(0,2) - 1) === timeItem) : null;
            const liClass = isFirstChildTime && isLastChildTime? 'first-last': isFirstChildTime? 'first': isLastChildTime? 'last': ''
            
            // timeItem 시간이 cells의 세부 일정 시작 시간과 같으면 div.itinerary-card를 추가 
            // 세부 일정이 없는 시간이고 mouseover되었으면 button.itinerary-card--add를 추가
            return `<li data-time="${i}" class="${liClass}">
              ${isInculdedCell ? 
                `<div class="itinerary-card itinerary-card--check ${cells[idx].type}" data-id="${cells[idx].id}" draggable="true">
                  <div class="itinerary-card-emph"></div>
                  ${isFirstChildTime ? `<div class="itinerary-card--check__content">
                      <div class="itinerary-card--check__title">${cells[idx].location.name}</div>
                      <div class="itinerary-card--check__memo">${cells[idx].memo}</div>
                    </div>`: ''
                  }
                  ${isFirstChildTime? `<button class="itinerary-card--delete" aria-label="일정 삭제"></button>` : ''}
                </div>` :
                (isShowNewScheuleCellBtn && selectedItineraryId === id && startTime === timeItem && !isInculdedCell ?
                  '<button class="itinerary-card--add">+</button>': '')
                }
            </li>`
          }).join('')}
        </ul>
      `}).join('')}
      </div>
    </div>  
    ${$newScheduleCellPopup}`
  }

  nextBtnsController() {
    const { localItinerary, tripSchedule } = store.state;
    const { itinerary } = tripSchedule;
    let { startId } = localItinerary;

    if (itinerary.length > 31) {
      alert('더이상 생성하지 맙시다');
      return;
    }
    if (itinerary.length === startId + 3) {
      alert('마지막 입니다.');
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

  prevBtnsController() {
    const { localItinerary } = store.state;
    let { startId } = localItinerary;

    if (startId === 0) {
      alert('첫번째 여행일 입니다');
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

  buttonHandler(e) {
    const { localItinerary } = store.state;
    if (e.target.matches('.carousel__day-index--add')) {
      store.state = { localItinerary: { ...localItinerary, currentId: +e.target.dataset.id } };
      console.log(store.state.localItinerary);
      return;
    }
    if (!e.target.closest('.carousel__days__add--list')) {
      store.state = { localItinerary: { ...localItinerary, currentId: '' } };
    }
  }

  deleteSchedule(e) {
    const {
      localItinerary,
      tripSchedule: { itinerary },
    } = store.state;

    if (!e.target.classList.contains('delete--item')) return;

    const restItems = itinerary.filter(sched => sched.id !== +e.target.closest('.carousel__day-index').dataset.id);

    console.log(restItems);
    store.state = {
      localItinerary: {
        ...localItinerary,
        currentId: '',
      },
      tripSchedule: {
        ...store.state.tripSchedule,
        itinerary: restItems,
      },
    };
  }

  addScheduleBefore(e) {
    if (!e.target.classList.contains('prev--add--item')) return;

    const { tripSchedule } = store.state;
    const { itinerary } = tripSchedule;
    const id = +e.target.closest('.carousel__day-index').dataset.id;

    const idx = itinerary.findIndex(sched => sched.id === id);

    const beforeArr = itinerary.filter((_, i) => i < idx); // id = 0
    const afterArr = itinerary.filter((_, i) => i >= idx);
    // const beforeArr = itinerary.slice(0, idx); // id = 0
    // const afterArr = itinerary.slice(idx);

    console.log(id);
    console.log(beforeArr);
    console.log(afterArr);
    store.state = {
      localItinerary: {
        ...store.state.localItinerary,
        currentId: '',
      },
      tripSchedule: {
        ...store.state.tripSchedule,
        itinerary: [...beforeArr, { id, country: '', date: new Date('2022-08-14'), cells: [] }, ...afterArr],
      },
    };
  }

  addScheduleAfter(e) {
    console.log('addScheduleAfter');
    if (!e.target.classList.contains('next--add--item')) return;
    const { itinerary } = store.state.tripSchedule;
    const id = +e.target.closest('.carousel__day-index').dataset.id;

    // 뒤에 추가 로직
    // const beforeArr = itinerary.filter((_, i) => i <= id); // id = 0
    // const afterArr = itinerary.filter((_, i) => i > id);

    // index 찾기
    let idx;
    itinerary.forEach((sched, i) => {
      if (sched.id === id) idx = i;
    });
    const beforeArr = itinerary.filter((_, i) => i <= idx); // id = 0
    const afterArr = itinerary.filter((_, i) => i > idx);

    // console.log(e.target.closest('.carousel__day-index'));
    // console.log(id);
    // console.log(beforeArr);
    // console.log(afterArr);
    store.state = {
      tripSchedule: {
        ...store.state.tripSchedule,
        itinerary: [
          ...beforeArr,
          { id: 5, country: '스페인', date: new Date('2022-08-14'), day: 'Sat', cells: [] },
          ...afterArr,
        ],
      },
      localItinerary: {
        ...store.state.localItinerary,
        currentId: '',
      },
    };
  }

  openNewCellModal() {
    const { localCommon, localNewScheduleCell, localDatePicker, localItinerary, tripSchedule } = store.state;
    const { selectedItineraryId, info } = localNewScheduleCell;
    const { itinerary } = tripSchedule;
    const { date } = itinerary.filter(sch => sch.id === selectedItineraryId)[0];

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
        info: {
          ...info,
          type: '',
          location: '',
          memo: '',
          todos: [],
        },
      },
      tripSchedule: {
        ...tripSchedule,
        newScheduleCellDate: date,
      },
    };
  }

  openEditModal(e) {
    if (e.target.matches('.time-table__day-index__blank .itinerary-card--delete')) return;
    const { localCommon, localNewScheduleCell, localDatePicker, tripSchedule } = store.state;
    const { itinerary } = tripSchedule;

    const selectedItineraryId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const editCellId = +e.target.closest('.itinerary-card').dataset.id;

    const { date, cells } = itinerary.filter(sch => sch.id === selectedItineraryId)[0];
    const [{ id, article, ...info }] = cells.filter(cell => cell.id === editCellId);

    document.body.style.overflow = 'hidden';

    store.state = {
      localCommon: {
        ...localCommon,
        isShowModal: 'newScheduleCellPopup',
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
      !e.target.closest('.time-table__day-index__blank') ||
      !e.target.closest('.time-table__day-index__blank li')
    )
      return;

    const { id } = e.target.closest('.time-table__day-index__blank').dataset;
    const { time } = e.target.closest('.time-table__day-index__blank li').dataset;

    const newStartTime = this.formattedTime(+time);
    const newEndTime = this.formattedTime(+time + 1);
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
    const { localNewScheduleCell, localItinerary } = store.state;
    if (
      localItinerary.isShowNewScheuleCellBtn &&
      !(
        e.target.matches('.time-table__day-index__blank li') ||
        e.target.matches('.time-table__day-index__blank li button')
      )
    ) {
      console.log('mouseout');
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
    console.log(id, selectedItineraryId);

    store.state = {
      tripSchedule: {
        ...tripSchedule,
        itinerary: itinerary.map(sch =>
          sch.id === selectedItineraryId ? { ...sch, cells: sch.cells.filter(cell => cell.id !== +id) } : sch
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

    const [{ cells }] = itinerary.filter(sch => sch.id === selectedItineraryId);
    const restItinerary = cells.filter(cell => cell.id !== dragTarget);
    let [targetItinerary] = cells.filter(cell => cell.id === dragTarget);
    let { startTime, endTime } = targetItinerary;

    const targetTimeGap = +endTime.slice(0, 2) - +startTime.slice(0, 2);
    endTime = dropTime + targetTimeGap;
    startTime = this.formattedTime(dropTime);
    endTime = endTime > 24 ? 24 : this.formattedTime(endTime);

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
    const changeShedule = sch => {
      if (sch.id === selectedItineraryId) {
        return {
          ...sch,
          cells:
            selectedItineraryId === dropScheduleId
              ? sch.cells.map(cell => (cell.id === dragTarget ? targetItinerary : cell))
              : restItinerary,
        };
      }

      if (sch.id === dropScheduleId) {
        return { ...sch, cells: [...sch.cells, targetItinerary] };
      }

      return sch;
    };
    // console.log(dragTarget, selectedItineraryId, dropScheduleId);
    store.state = {
      localItinerary: {
        ...localItinerary,
        dragTarget: '',
      },
      tripSchedule: {
        ...tripSchedule,
        itinerary: itinerary.map(sch => changeShedule(sch)),
      },
    };
  }

  addEventListener() {
    return [
      // { type: 'DOMContentLoaded', selector: 'window', component: 'myMap', handler: myMap },
      // { type: 'DOMContentLoaded', selector: 'window', component: 'myMap', handler: initMap('editPlanSchedule') },
      { type: 'DOMContentLoaded', selector: 'window', component: 'myMap', handler: initMap },
      { type: 'click', selector: '.next--btn', component: 'next--btn', handler: this.nextBtnsController },
      { type: 'click', selector: '.prev--btn', component: 'prev--btn', handler: this.prevBtnsController },
      { type: 'click', selector: '.carousel__day-index--add', handler: this.buttonHandler },
      { type: 'click', selector: '.itinerary-card--add', handler: this.openNewCellModal },
      { type: 'click', selector: '.itinerary-card', handler: moveMapCenter },
      { type: 'dblclick', selector: '.itinerary-card', handler: this.openEditModal },
      { type: 'click', selector: '.itinerary-card--delete', handler: this.deleteCard },
      { type: 'dragstart', selector: '.time-table__day-index__blank li', handler: this.dragCard },
      { type: 'dragover', selector: '.time-table__day-index__blank li', handler: this.dragoverCard },
      { type: 'drop', selector: '.time-table__day-index__blank li', handler: this.dropCard.bind(this) },
      { type: 'mouseover', selector: '.time-table', handler: this.mouseoverTimetable.bind(this) },
      { type: 'mouseout', selector: '.time-table', handler: this.mouseoutTimetable },
      {
        type: 'click',
        selector: '.carousel__days__add--list',
        component: 'next--add--item',
        handler: this.addScheduleAfter,
      },
      {
        type: 'click',
        selector: '.carousel__days__add--list',
        component: 'prev--add--item',
        handler: this.addScheduleBefore,
      },
      {
        type: 'click',
        selector: '.carousel__days__add--list',
        component: 'delete--item',
        handler: this.deleteSchedule,
      },
    ];
  }
}

export default Itinerary;
