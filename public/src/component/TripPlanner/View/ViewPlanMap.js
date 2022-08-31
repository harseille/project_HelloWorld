import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewPlanMap extends Component {
  formattedTime(time) {
    return time < 10 ? `0${time}:00` : `${time}:00`;
  }

  render() {
    const {
      localItinerary,
      viewTripSchedule: { itinerary },
    } = store.state;
    const { currentId, startId } = localItinerary;

    // prettier-ignore
    const timeList = [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
      '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
      '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
      '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
      '24:00',
    ];

    const _schedule = itinerary
      .filter((_, i) => i >= startId && i < startId + 3)
      .map(unit => ({ ...unit, date: new Date(unit.date) }));

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // prettier-ignore
    return `
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
              </div>` : ''}
          </li>`
        }).join('')}
      </ul>
    `}).join('')}
    </div>
  </div>`
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
      { type: 'click', selector: '.next--btn', component: 'next--btn', handler: this.nextBtnsController },
      { type: 'click', selector: '.prev--btn', component: 'prev--btn', handler: this.prevBtnsController },
    ];
  }
}

export default ViewPlanMap;
