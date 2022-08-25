/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
import Component from '../core/Component.js';
import myMap from './myMap.js';
import store from '../store/store.js';
import { NewScheduleCellPopup } from './index.js';

class Itinerary extends Component {
  // formattedDate(date) {
  //   const format = n => (n < 10 ? '0' + n : n + '');
  //   return `${format(date?.getMonth() + 1)}.${format(date?.getDate())}.${format(date?.getDay())}`;
  // }
  init() {
    const { startDate, endDate, itinerary } = store.state.tripSchedule;
    let middleDays = startDate - endDate;
    let id = 1;
    // 기본 셋
    let initSchedule = {
      id,
      country: '',
      date: startDate.getDate(),
      day: startDate.getDay(),
      cells: [],
    };

    if (itinerary.length === 0) {
      store.state = {
        tripSchedule: {
          itinerary: initSchedule,
        },
      };
    }

    if (id < middleDays) id += 1;
  }

  render() {
    const {
      localCommon: { isShowModal },
      localItinerary,
      localNewScheduleCell: {
        selectedScheduleId,
        info: { startTime },
      },
      tripSchedule: { itinerary },
    } = store.state;
    const { currentId, startId, isShowNewScheuleCellBtn } = localItinerary;
    const $newScheduleCellPopup = isShowModal === 'newScheduleCellPopup' ? new NewScheduleCellPopup().render() : '';
    // const _schedule = schedule.filter(sched => sched.id > startId && sched.id <= startId + 3); // 이게 있으면 앞뒤 삭제 버튼이 안 됨..
    // const setSchedule = {
    //   id: startId + 1,
    //   country: '영국',
    //   date: startDate.getDate(),
    //   day: startDate.getDay(),
    //   cells: [],
    // };

    const _schedule = itinerary.filter((_, i) => i >= startId && i < startId + 3);

    const timeList = [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00',
      '24:00',
    ];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // prettier-ignore
    return `
    <div class="itinerary__container">
      <!-- google map -->
      <div id="googleMap" class="map"></div>
       
      <!-- carousel -->
      <div class="carousel">
        <div class="carousel__days">
        ${
          _schedule.map(sched =>  `
            <div class="carousel__day-index" data-id=${sched.id}>
              <button class="carousel__day-index--add" data-id=${sched.id}>+</button>Day${sched.id}<span>/</span> ${sched.date.getMonth()<10 ? '0'+sched.date.getMonth() : sched.date.getMonth()}.${sched.date.getDate()<10 ? '0'+sched.date.getDate() : sched.date.getDate()} ${sched.day}
              
              
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

      <!--<ul class="carousel__days__add--list" style="display:none">
        <li class="carousel__days__add--item first-item prev--add--item">앞에 추가</li>
        <li class="carousel__days__add--item next--add--item">뒤에 추가</li>
        <li class="carousel__days__add--item delete--item">일정 삭제</li>
      </ul> -->

    </div>

    <!-- time table -->
    <div class="time-table">
      <ul class="time-table__times">
        <li class="time-table__time-item">
          <span class="time-table__time">00:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">01:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">02:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">03:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">04:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">05:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">06:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">07:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">08:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">09:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">10:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">11:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">12:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">13:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">14:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">15:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">16:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">17:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">18:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">19:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">20:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">21:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">22:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">23:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">24:00</span>
          <span class="line"></span>
        </li>
      </ul>
      <div class="time-table__day-index">
      ${_schedule.map(sch => {
        const { cells, id } = sch
        const cellStartTimeArr = cells.map(cell => cell.startTime);

        return `
        <ul class="time-table__day-index__blank" data-id="${id}">
          ${timeList.map((timeItem, i) => {
            const idx = cellStartTimeArr.indexOf(timeItem)
            const isInculdedCell = idx !== -1
            let timeGap = 62;

            // 시간에 따른 item 높이 조절
            if(isInculdedCell){
              const cellStartTime = +cells[idx].startTime.slice(0,2)
              const cellEndTime = +cells[idx].endTime.slice(0,2)
              timeGap *= cellEndTime - cellStartTime
            }
            
            // timeItem 시간이 cells의 세부 일정 시작 시간과 같으면 div.itinerary-card를 추가 
            // 세부 일정이 없는 시간이고 mouseover되었으면 button.itinerary-card--add를 추가
            return `<li data-time="${i}">
              ${isInculdedCell ? 
                `<div class="itinerary-card itinerary-card--check ${cells[idx].type}" data-id="${cells[idx].id}" draggable="true" style="height:${timeGap}px;">
                  <div class="itinerary-card-emph"></div>
                  <div class="itinerary-card--check__content">
                    <div class="itinerary-card--check__title">
                      ${cells[idx].location.name}
                    </div>
                    <div class="itinerary-card--check__memo">
                      ${cells[idx].memo}
                    </div>
                  </div>
                </div>` :
                (isShowNewScheuleCellBtn && selectedScheduleId === id && startTime === timeItem ?'<button class="itinerary-card--add">+</button>': '')
                }
            </li>`
          }).join('')}
        </ul>
      `}).join('')}
      </div>
    </div>

    <!-- private & public button -->
    <div class="itinerary-btns">
      <button class="itinerary-btns--private">나만의 일정</button>
      <button class="itinerary-btns--public">다른 사람들에게도 공유하기</button>
      </div>
      
      </div>${$newScheduleCellPopup}`
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
        itinerary: restItems,
      },
    };
  }

  addScheduleBefore(e) {
    if (!e.target.classList.contains('prev--add--item')) return;

    // store.state = {
    //   itinerary: {
    //     schedule: [],
    //     currentId: ''
    //   }
    // }
    const { tripSchedule } = store.state;
    const { itinerary } = tripSchedule;
    const id = +e.target.closest('.carousel__day-index').dataset.id;

    const idx = itinerary.findIndex(sched => sched.id === id);

    // 앞에 추가 로직
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
        itinerary: [
          ...beforeArr,
          { id: 5, country: '스페인', date: new Date('2022-08-14'), day: 'Sat', cells: [] },
          ...afterArr,
        ],
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
    const { localCommon, localItinerary, localNewScheduleCell, tripSchedule } = store.state;
    const { selectedScheduleId, info } = localNewScheduleCell;
    const { itinerary } = tripSchedule;
    const { date } = itinerary.filter(sch => sch.id === selectedScheduleId)[0];

    store.state = {
      localCommon: {
        ...localCommon,
        isShowModal: 'newScheduleCellPopup',
      },
      localItinerary: {
        ...localItinerary,
        isShowNewScheuleCellBtn: false,
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

  mouseoverTimetable(e) {
    if (!e.target.closest('.time-table__day-index__blank') || !e.target.closest('.time-table__day-index__blank li'))
      return;

    const newScheduleId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const newTime = +e.target.closest('.time-table__day-index__blank li').dataset.time;

    const newStartTime = newTime < 10 ? `0${newTime}:00` : `${newTime}:00`;
    const newEndTime = newTime + 1 < 10 ? `0${newTime + 1}:00` : `${newTime + 1}:00`;
    const { localItinerary, localNewScheduleCell } = store.state;
    const {
      selectedScheduleId,
      info: { startTime },
    } = localNewScheduleCell;

    // console.log('newScheduleId=' + newScheduleId);
    // console.log('selectedScheduleId=' + selectedScheduleId);
    // console.log('startTime=' + startTime);
    // console.log('newStartTime=' + newStartTime);

    if (newScheduleId === selectedScheduleId && startTime === newStartTime) return;

    store.state = {
      localItinerary: {
        ...localItinerary,
        isShowNewScheuleCellBtn: true,
      },
      localNewScheduleCell: {
        ...localNewScheduleCell,
        selectedScheduleId: newScheduleId,
        info: {
          ...localNewScheduleCell.info,
          startTime: newStartTime,
          endTime: newEndTime,
        },
      },
    };
  }

  mouseoutTimetable(e) {
    if (e.target.matches('.time-table')) {
      const { localNewScheduleCell, localItinerary } = store.state;
      store.state = {
        localItinerary: {
          ...localItinerary,
          isShowNewScheuleCellBtn: false,
        },
        localNewScheduleCell: {
          ...localNewScheduleCell,
          selectedScheduleId: '',
          info: {
            ...localNewScheduleCell.info,
            startTime: '',
            endTime: '',
          },
        },
      };
    }
  }

  dragCard(e) {
    const { id } = e.target.closest('.itinerary-card').dataset;
    store.state = {
      localItinerary: {
        ...store.state.localItinerary,
        dragTarget: +id,
      },
    };
  }

  dragoverCard(e) {
    if (!e.target.closest('.time-table__day-index__blank li')) return;
    e.preventDefault();
  }

  dropCard(e) {
    const {
      localItinerary: { dragTarget },
    } = store.state;
    if (e.target === dragTarget || !e.target.closest('.time-table__day-index__blank li')) return;

    const newScheduleId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const newTime = +e.target.closest('.time-table__day-index__blank li').dataset.time;
    const newStartTime = newTime < 10 ? `0${newTime}:00` : `${newTime}:00`;
    const newEndTime = newTime + 1 < 10 ? `0${newTime + 1}:00` : `${newTime + 1}:00`;

    const {
      localItinerary,
      tripSchedule,
      localNewScheduleCell: { selectedScheduleId },
    } = store.state;
    const { itinerary } = tripSchedule;

    const _schedule = itinerary.filter(sch => sch.id === selectedScheduleId)[0].cells;
    const target = {
      ..._schedule.filter(cell => cell.id === dragTarget)[0],
      startTime: newStartTime,
      endTime: newEndTime,
    };
    const rest = _schedule.filter(cell => cell.id !== dragTarget);
    console.log(dragTarget, selectedScheduleId, newScheduleId);
    if (selectedScheduleId === newScheduleId) {
      store.state = {
        localItinerary: {
          ...localItinerary,
          dragTarget: '',
        },
        tripSchedule: {
          ...tripSchedule,
          itinerary: itinerary.map(sch => {
            if (sch.id === selectedScheduleId) {
              return {
                ...sch,
                cells: sch.cells.map(cell => {
                  if (cell.id === dragTarget) return { ...cell, startTime: newStartTime, endTime: newEndTime };
                  return cell;
                }),
              };
            }

            return sch;
          }),
        },
      };
    } else {
      store.state = {
        localItinerary: {
          ...localItinerary,
          dragTarget: '',
        },
        tripSchedule: {
          ...tripSchedule,
          itinerary: itinerary.map(sch => {
            if (sch.id === selectedScheduleId) {
              return { ...sch, cells: rest };
            }

            if (sch.id === newScheduleId) {
              return { ...sch, cells: [...sch.cells, target] };
            }

            return sch;
          }),
        },
      };
    }
  }

  addEventListener() {
    return [
      { type: 'DOMContentLoaded', selector: 'window', component: 'myMap', handler: myMap },
      { type: 'click', selector: '.next--btn', component: 'next--btn', handler: this.nextBtnsController },
      { type: 'click', selector: '.prev--btn', component: 'prev--btn', handler: this.prevBtnsController },
      { type: 'click', selector: '.carousel__day-index--add', handler: this.buttonHandler },
      { type: 'click', selector: '.itinerary-card--add', handler: this.openNewCellModal },
      { type: 'dragstart', selector: '.time-table__day-index__blank li', handler: this.dragCard },
      { type: 'dragover', selector: '.time-table__day-index__blank li', handler: this.dragoverCard },
      { type: 'drop', selector: '.time-table__day-index__blank li', handler: this.dropCard },
      { type: 'mouseover', selector: '.time-table', handler: this.mouseoverTimetable },
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
