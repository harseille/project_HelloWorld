import Component from '../../../core/Component.js';
import store from '../../../store/store.js';
import { NewScheduleCellPopup } from '../../index.js';

class ViewPlanMap extends Component {
  render() {
    const { isShowModal, isShowNewScheuleCellBtn, tripSchedule } = store.state;
    const { currentId, schedule, startId } = store.state.itinerary;
    const { startDate, endDate } = store.state.tripSchedule;
    const $newScheduleCellPopup = isShowModal === 'newScheduleCellPopup' ? new NewScheduleCellPopup().render() : '';

    // const selectedDate = () => {
    //   let newScheduel = [
    //     {id:schedule.id, country:schedule.country, date: startDate}
    //   ]
    // }
    // console.log(startDate);

    const _schedule = schedule.filter((_, i) => i >= startId && i < startId + 3);
    // eslint-disable-next-line prefer-const

    // const _schedule = [startDate, ...middleDates, endDate].filter((_, i) => i >= startId && i < startId + 3);
    const {
      scheduleId,
      info: { startTime },
    } = store.state.newScheduleCell;
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
            Day ${sched.id} <span>/</span> ${sched.date} ${sched.day}
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
        const {cells} = sch
        return `
        <ul class="time-table__day-index__blank" data-id="${sch.id}">
          ${timeList.map((time, i) => {
            const cellStartTime = cells.map(cell => cell.startTime);
            const idx = cellStartTime.indexOf(time)
            
            return `<li data-time="${i}">
              ${idx === -1 ? (isShowNewScheuleCellBtn && scheduleId === sch.id && startTime === time?'<button class="itinerary-card--add">+</button>': ''): `<div class="itinerary-card itinerary-card--check ${cells[idx].type}" draggable="true">
              <div class="itinerary-card-emph"></div>
              <div class="itinerary-card--check__content">
                <div class="itinerary-card--check__title">
                  ${cells[idx].location.name}
                </div>
                <div class="itinerary-card--check__memo">
                  ${cells[idx].memo}
                </div>`}
            </li>`
          }).join('')}
        </ul>
      `
      }).join('')}
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
    const { itinerary } = store.state;
    const { schedule } = itinerary;
    let { startId } = itinerary;

    if (schedule.length > 31) {
      alert('더이상 생성하지 맙시다');
      return;
    }
    if (schedule.length === startId + 3) {
      alert('마지막 입니다.');
      return;
    }
    startId += 1;

    store.state = {
      itinerary: {
        ...itinerary,
        startId,
      },
    };
  }

  prevBtnsController() {
    const { itinerary } = store.state;
    let { startId } = itinerary;

    if (startId === 0) {
      alert('첫번째 여행일 입니다');
      return;
    }
    startId -= 1;

    store.state = {
      itinerary: {
        ...itinerary,
        startId,
      },
    };
  }

  buttonHandler(e) {
    const { itinerary } = store.state;
    if (e.target.matches('.carousel__day-index--add')) {
      store.state = { itinerary: { ...itinerary, currentId: +e.target.dataset.id } };
      console.log(store.state.itinerary);
      return;
    }
    if (!e.target.closest('.carousel__days__add--list')) {
      store.state = { itinerary: { ...itinerary, currentId: '' } };
    }
  }

  deleteSchedule(e) {
    const {
      itinerary,
      itinerary: { schedule },
    } = store.state;

    if (!e.target.classList.contains('delete--item')) return;

    const restItems = schedule.filter(sched => sched.id !== +e.target.closest('.carousel__day-index').dataset.id);

    console.log(restItems);
    store.state = {
      itinerary: {
        ...itinerary,
        currentId: '',
        schedule: restItems,
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
    const { itinerary } = store.state;
    const { schedule } = itinerary;
    const id = +e.target.closest('.carousel__day-index').dataset.id;

    const idx = schedule.findIndex(sched => sched.id === id);

    // 앞에 추가 로직
    const beforeArr = schedule.filter((_, i) => i < idx); // id = 0
    const afterArr = schedule.filter((_, i) => i >= idx);
    // const beforeArr = schedule.slice(0, idx); // id = 0
    // const afterArr = schedule.slice(idx);

    console.log(id);
    console.log(beforeArr);
    console.log(afterArr);
    store.state = {
      itinerary: {
        ...itinerary,
        currentId: '',
        schedule: [...beforeArr, { id: 5, country: '스페인', date: '08.14', day: 'Sat', cells: [] }, ...afterArr],
      },
    };
  }

  addScheduleAfter(e) {
    if (!e.target.classList.contains('next--add--item')) return;
    const { itinerary } = store.state;
    const { schedule } = itinerary;
    const id = +e.target.closest('.carousel__day-index').dataset.id;

    // 뒤에 추가 로직
    // const beforeArr = schedule.filter((_, i) => i <= id); // id = 0
    // const afterArr = schedule.filter((_, i) => i > id);

    // index 찾기
    let idx;
    schedule.forEach((sched, i) => {
      if (sched.id === id) idx = i;
    });
    const beforeArr = schedule.filter((_, i) => i <= idx); // id = 0
    const afterArr = schedule.filter((_, i) => i > idx);

    console.log(e.target.closest('.carousel__day-index'));
    console.log(id);
    console.log(beforeArr);
    console.log(afterArr);
    store.state = {
      itinerary: {
        ...itinerary,
        currentId: '',
        schedule: [...beforeArr, { id: 5, country: '스페인', date: '08.14', day: 'Sat', cells: [] }, ...afterArr],
      },
    };
  }

  openNewCellModal() {
    console.log('openNewCellModal');
    const { newScheduleCell, itinerary } = store.state;
    const { scheduleId, info } = newScheduleCell;
    const { schedule } = itinerary;
    const { date } = schedule[scheduleId];

    store.state = {
      isShowNewScheuleCellBtn: false,
      isShowModal: 'newScheduleCellPopup',
      newScheduleCell: {
        ...newScheduleCell,
        info: {
          ...info,
          type: '',
          location: '',
          memo: '',
          todos: [],
        },
      },
      tripSchedule: {
        ...store.state.tripSchedule,
        newScheduleCellDate: date,
      },
    };
  }

  mouseoverTimetable(e) {
    const newScheduleId = +e.target.closest('.time-table__day-index__blank').dataset.id;
    const newTime = +e.target.closest('.time-table__day-index__blank li').dataset.time;

    const newStartTime = newTime < 10 ? `0${newTime}:00` : `${newTime}:00`;
    const newEndTime = newTime + 1 < 10 ? `0${newTime + 1}:00` : `${newTime + 1}:00`;
    const { newScheduleCell } = store.state;
    const { scheduleId, startTime } = newScheduleCell;
    console.log(e.target.closest('.time-table__day-index__blank li'));
    if (newScheduleId === scheduleId && startTime === newStartTime) return;

    store.state = {
      isShowNewScheuleCellBtn: true,
      newScheduleCell: {
        ...newScheduleCell,
        scheduleId: newScheduleId,
        info: {
          ...newScheduleCell.info,
          startTime: newStartTime,
          endTime: newEndTime,
        },
      },
    };
  }

  mouseoutTimetable(e) {
    if (
      !e.target.closest('.time-table__day-index__blank li') &&
      !e.target.closest('.time-table__day-index__blank li button')
    )
      return;
    console.log('mouseoutTimetable');

    const { newScheduleCell } = store.state;
    store.state = {
      isShowNewScheuleCellBtn: false,
      newScheduleCell: {
        ...newScheduleCell,
        scheduleId: '',
        info: {
          ...newScheduleCell.info,
          startTime: '',
          endTime: '',
        },
      },
    };
  }

  addEventListener() {
    return [
      { type: 'DOMContentLoaded', selector: 'window', handler: myMap },
      { type: 'click', selector: '.next--btn', component: 'next--btn', handler: this.nextBtnsController },
      { type: 'click', selector: '.prev--btn', component: 'prev--btn', handler: this.prevBtnsController },
      { type: 'click', selector: '.carousel__day-index--add', handler: this.buttonHandler },
      { type: 'click', selector: '.itinerary-card--add', handler: this.openNewCellModal },
      { type: 'mouseover', selector: '.time-table__day-index li', handler: this.mouseoverTimetable },
      { type: 'mouseout', selector: '.time-table__day-index li', handler: this.mouseoutTimetable },
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

export default ViewPlanMap;
