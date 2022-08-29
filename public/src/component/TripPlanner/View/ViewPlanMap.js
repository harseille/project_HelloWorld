import Component from '../../../core/Component.js';
import store from '../../../store/store.js';
import { NewScheduleCellPopup } from '../../index.js';
import { initMap } from '../../myMap.js';
// import myMap from '../../myMap.js';

class ViewPlanMap extends Component {
  // formattedDate(date) {
  //   const format = n => (n < 10 ? '0' + n : n + '');
  //   return `${format(date?.getMonth() + 1)}.${format(date?.getDate())}.${format(date?.getDay())}`;
  // }

  render() {
    const {
      localCommon: { isShowModal },
      localItinerary,
      viewTripSchedule: { itinerary },
    } = store.state;
    const { currentId, startId } = localItinerary;
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

    const $newScheduleCellPopup = isShowModal === 'newScheduleCellPopup' ? new NewScheduleCellPopup().render() : '';
    const _schedule = itinerary
      .filter((_, i) => i >= startId && i < startId + 3)
      .map(unit => ({ ...unit, date: new Date(unit.date) }));

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // prettier-ignore
    return `
    <div class="itinerary__container">
      <div id="googleMap" class="map"></div> 
      <!-- carousel -->
      <div class="carousel">
        <div class="carousel__days">
        ${
          _schedule.map(sched =>  `
            <div class="carousel__day-index" data-id=${sched.id}>
              Day ${sched.id} <span>/</span> ${sched.date.getMonth()+1<10 ? '0'+(sched.date.getMonth()+1) : sched.date.getMonth()+1}.${sched.date.getDate()<10 ? '0'+sched.date.getDate() : (sched.date.getDate())} ${days[sched.date.getDay()]}
              <div>${sched.country}</div>
            </div>`).join('')
        }
        </div>
      </div>
      <button class="prev--btn carousel--btn">〈</button>
      <button class="next--btn carousel--btn">〉</button>
    </div>
    <div class="time-table">
      <ul class="time-table__times">
        ${timeList.map(time => `<li class="time-table__time-item">
          <span class="time-table__time">${time}</span>
          <span class="line"></span>
        </li>`).join('')}
      </ul>
      <div class="time-table__day-index">
      ${_schedule.map(sch => {
        const { cells, id } = sch
        const cellStartTimeArr = cells.map(cell => cell.startTime);

        return `
        <ul class="time-table__day-index__blank" data-id="${id}">
          ${timeList.map((timeItem, i, self) => {
            if(i === self.length - 1) return '';

            const idx = cellStartTimeArr.indexOf(timeItem)
            const isInculdedCell = idx !== -1
            let timeGap = 62;

            // 시간에 따른 item 높이 조절
            if(isInculdedCell){
              const cellStartTime = +cells[idx].startTime.slice(0,2)
              const cellEndTime = +cells[idx].endTime.slice(0,2)
              timeGap *= cellEndTime - cellStartTime
            }
            
            // timeItem 시간이 세부 일정 시작 시간과 같으면 div.itinerary-card를 추가 
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
                </div>` :''
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

  addEventListener() {
    return [
      // { type: 'DOMContentLoaded', selector: 'window', component: 'myMap', handler: initMap(viewPlanSchedule') },
      { type: 'click', selector: '.next--btn', component: 'next--btn', handler: this.nextBtnsController },
      { type: 'click', selector: '.prev--btn', component: 'prev--btn', handler: this.prevBtnsController },
    ];
  }
}

export default ViewPlanMap;
