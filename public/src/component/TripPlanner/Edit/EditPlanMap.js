/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
import Component from '../../../core/Component.js';
// import myMap from '../../myMap.js';
import { initMap } from '../../myMap.js';
import store from '../../../store/store.js';
import { NewScheduleCellPopup } from '../../index.js';

class Itinerary extends Component {
  // formattedDate(date) {
  //   const format = n => (n < 10 ? '0' + n : n + '');
  //   return `${format(date?.getMonth() + 1)}.${format(date?.getDate())}.${format(date?.getDay())}`;
  // }

  formattedTime(time) {
    return;
    time < 10 ? `0${time}:00` : `0${time}:00`;
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

    const $newScheduleCellPopup = isShowModal === 'newScheduleCellPopup' ? new NewScheduleCellPopup().render() : '';
    const _schedule = itinerary.filter((_, i) => i >= startId && i < startId + 3);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // prettier-ignore
    return `
    <div class="itinerary__container">
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

      <!--<ul class="carousel__days__add--list" style="display:none">
        <li class="carousel__days__add--item first-item prev--add--item">앞에 추가</li>
        <li class="carousel__days__add--item next--add--item">뒤에 추가</li>
        <li class="carousel__days__add--item delete--item">일정 삭제</li>
      </ul> -->

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
                (isShowNewScheuleCellBtn && selectedScheduleId === id && startTime === timeItem && !isInculdedCell ?
                  '<button class="itinerary-card--add">+</button>': '')
                }
            </li>`
          }).join('')}
        </ul>
      `}).join('')}
      </div>
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
        ...store.state.tripSchedule,
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
    const { localCommon, localNewScheduleCell, localItinerary, tripSchedule } = store.state;
    const { selectedScheduleId, info } = localNewScheduleCell;
    const { itinerary } = tripSchedule;
    const { date } = itinerary.filter(sch => sch.id === selectedScheduleId)[0];

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

    if (localItinerary.dragTarget || (newScheduleId === selectedScheduleId && startTime === newStartTime)) return;

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

  deleteCard(e) {
    const { id } = e.target.closest('.itinerary-card').dataset;
  }

  dragCard(e) {
    e.dataTransfer.dropEffect = 'move';
    const { id } = e.target.closest('.itinerary-card').dataset;
    console.log('dragCard=' + id);
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

    console.log('dropCard=' + dragTarget);

    const {
      localItinerary,
      tripSchedule,
      localNewScheduleCell: { selectedScheduleId },
    } = store.state;
    const { itinerary } = tripSchedule;

    const dropScheduleId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const dropTime = +e.target.closest('.time-table__day-index__blank li').dataset.time;

    const _itinerary = itinerary.filter(sch => sch.id === selectedScheduleId)[0].cells;
    const restSchedule = _itinerary.filter(cell => cell.id !== dragTarget);
    let targetItinerary = _itinerary.filter(cell => cell.id === dragTarget)[0];
    let { startTime, endTime } = targetItinerary;

    const targetTimeGap = +endTime.slice(0, 2) - +startTime.slice(0, 2);

    startTime = dropTime < 10 ? `0${dropTime}:00` : `${dropTime}:00`;
    endTime = dropTime + targetTimeGap < 10 ? `0${dropTime + targetTimeGap}:00` : `${dropTime + targetTimeGap}:00`;

    const changeTime = new Array(targetTimeGap).fill(1).map((_, i) => dropTime + i);
    const unableTime = restSchedule.map(cell => [+cell.startTime.slice(0, 2), +cell.endTime.slice(0, 2)]);
    const isAvailable = changeTime
      .map(t => unableTime.findIndex(([start, end]) => start <= t && t < end))
      .filter(val => val !== -1).length;

    if (isAvailable) {
      store.state = {
        localItinerary: {
          ...localItinerary,
          dragTarget: '',
        },
      };
      return;
    }

    targetItinerary = {
      ...targetItinerary,
      startTime,
      endTime,
    };

    const changeShedule = sch => {
      if (sch.id === selectedScheduleId) {
        return {
          ...sch,
          cells:
            selectedScheduleId === dropScheduleId
              ? sch.cells.map(cell => (cell.id === dragTarget ? targetItinerary : cell))
              : restSchedule,
        };
      }

      if (sch.id === dropScheduleId) {
        return { ...sch, cells: [...sch.cells, targetItinerary] };
      }

      return sch;
    };
    // console.log(dragTarget, selectedScheduleId, dropScheduleId);
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
      { type: 'DOMContentLoaded', selector: 'window', component: 'myMap', handler: initMap('editPlanSchedule') },
      { type: 'click', selector: '.next--btn', component: 'next--btn', handler: this.nextBtnsController },
      { type: 'click', selector: '.prev--btn', component: 'prev--btn', handler: this.prevBtnsController },
      { type: 'click', selector: '.carousel__day-index--add', handler: this.buttonHandler },
      { type: 'click', selector: '.itinerary-card--add', handler: this.openNewCellModal },
      { type: 'dragstart', selector: '.time-table__day-index__blank li', handler: this.dragCard },
      { type: 'dragover', selector: '.time-table__day-index__blank li', handler: this.dragoverCard },
      { type: 'drop', selector: '.time-table__day-index__blank li', handler: this.dropCard },
      { type: 'click', selector: '.itinerary-card--delete', handler: this.deleteCard },
      { type: 'mouseover', selector: '.time-table', handler: this.mouseoverTimetable },
      { type: 'mouseout', selector: 'window', component: 'editPlanMap', handler: this.mouseoutTimetable },
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
