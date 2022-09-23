import Component from '../../../core/Component.js';

class ViewNavDay extends Component {
  render() {
    const { itinerary } = this.props;

    const DayDOMString = itinerary
      .map(({ id }) => `<li class="nav-day__item" data-nav="day${id}"><a href="#day${id}">Day ${id}</a></li>`)
      .join('');

    return `
    <div class="nav-day">
      <ul class="nav-day__list">
        <li class="nav-day__item active" data-nav="top"><a href="#top">Top</a></li>
        ${DayDOMString}
        <li class="nav-day__item" data-nav="comment"><a href="#comment">댓글</a></li>
      </ul>
    </div>
    `;
  }

  // observer() {
  //   const scrollObserver = new IntersectionObserver(
  //     entries => {
  //       console.log(entries);
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0.5,
  //     }
  //   );

  //   [...document.querySelector('.trip-story__day-list').children].forEach(item => scrollObserver.observe(item));
  // }

  scrollToDay(e) {
    e.preventDefault();

    if (!e.target.classList.contains('nav-day__item') && !e.target.closest('.nav-day__item')) return;

    const targetNav = e.target.tagName === 'LI' ? e.target.dataset.nav : e.target.closest('.nav-day__item').dataset.nav;

    window.scrollTo({
      top: document.getElementById(targetNav).offsetTop,
      left: 0,
      behavior: 'smooth',
    });

    // targetNav === 'top'
    //   ? window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    //   : window.scrollTo({
    //       top: document.getElementById(targetNav).offsetTop,
    //       left: 0,
    //       behavior: 'smooth',
    //     });
  }

  addEventListener() {
    return [{ type: 'click', selector: '.nav-day__list', handler: this.scrollToDay }];
  }
}

export default ViewNavDay;
