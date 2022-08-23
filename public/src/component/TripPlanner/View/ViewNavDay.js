import Component from '../../../core/Component.js';

class ViewNavDay extends Component {
  render() {
    const {
      tripSchedule: {
        itinerary: { schedule },
      },
    } = this.props;

    const DayDOMString = schedule
      .map(({ id }) => `<li class="nav-day__item" data-scrollNav="${id}"><a href="#day${id}">Day ${id}</a></li>`)
      .join('');

    return `
    <div class="nav-day">
      <ul class="nav-day__list">
        <li class="nav-day__item active" data-scrollNav="top"><a href="">Top</a></li>
        ${DayDOMString}
        <li class="nav-day__item" data-scrollNav="comment"><a href="#comment">댓글</a></li>
      </ul>
    </div>
    `;
  }

  scrollToDay(e) {
    // e.preventDefault();
    console.log(e.target);
    if (e.target.textContent === 'Top') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else if (e.target.dataset.scrollNav === 'day1') {
      console.log(document.querySelector('.trip-story__day-content').offsetTop);
      window.scrollTo({
        top: document.querySelector('.trip-story__day-content').offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  addEventListener() {
    return [{ type: 'click', selector: '.nav-day__list', handler: this.scrollToDay }];
  }
}

export default ViewNavDay;
