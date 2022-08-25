import Component from '../../../core/Component.js';
import store from '../../../store/store.js';
import { NewScheduleCellPopup } from '../../index.js';

class EditPlanMap extends Component {
  render() {
    const { isShowModal } = store.state;
    const { currentId, schedule, startId } = store.state.itinerary;
    const $newScheduleCellPopup = isShowModal === 'newScheduleCellPopup' ? new NewScheduleCellPopup().render() : '';
    // const _schedule = schedule.filter(sched => sched.id > startId && sched.id <= startId + 3); // 이게 있으면 앞뒤 삭제 버튼이 안 됨..
    const _schedule = schedule.filter((_, i) => i >= startId && i < startId + 3);
    console.log(_schedule, startId);
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
              <button class="carousel__day-index--add" data-id=${sched.id}>+</button>Day ${sched.id} <span>/</span> ${sched.date} ${sched.day}
              
              
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
        <ul class="time-table__day-index__blank">
          <li>
            <div class="itinerary-card itinerary-card--check">
              <div class="itinerary-card-emph"></div>
              <div class="itinerary-card--check__content">
                <div class="itinerary-card--check__title">
                  히드로 공항
                </div>
                <div class="itinerary-card--check__memo">
                  공항 도착해서 유심칩 찾기
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="itinerary-card">
              <button class="itinerary-card--add">+</button>
            </div>
          </li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
        </ul>
        <ul class="time-table__day-index__blank">
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
        </ul>
        <ul class="time-table__day-index__blank">
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
        </ul>
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
        schedule: [...beforeArr, { id: 5, country: '스페인', date: '08.14', day: 'Sat' }, ...afterArr],
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
        schedule: [...beforeArr, { id: 5, country: '스페인', date: '08.14', day: 'Sat' }, ...afterArr],
      },
    };
  }

  openNewCellModal(e) {
    const NodeList = [...e.target.closest('.time-table__day-index').children];
    const idx = NodeList.indexOf(e.target.closest('.time-table__day-index__blank'));
    const timeNodeList = [...e.target.closest('ul').children];
    const i = timeNodeList.indexOf(e.target.closest('li'));

    const startTime = i < 10 ? `0${i}:00` : `${i}:00`;
    const endTime = i + 1 < 10 ? `0${i + 1}:00` : `${i + 1}:00`;

    const {
      itinerary: { schedule },
    } = store.state;
    const { id, date } = schedule[idx];
    store.state = {
      isShowModal: 'newScheduleCellPopup',
      newScheduleCell: {
        scheduleId: id,
        info: {
          type: '',
          startTime,
          endTime,
          location: '',
          memo: '',
          todos: [],
        },
      },
      tripSchedule: {
        ...store.state.tripSchedule,
        newScheduleCellDate: new Date(),
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

export default EditPlanMap;
