import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewTripTab extends Component {
  render() {
    const { selectedTab } = this.props;
    return `
    <div class="trip-itinerary__tab">
      <div class="trip-itinerary__tab__chart ${
        selectedTab === 'chart' ? 'selected' : ''
      }" data-tab = "chart">지도/일정표</div>
      <div class="trip-itinerary__tab__story ${
        selectedTab === 'story' ? 'selected' : ''
      }" data-tab = "story">스토리</div>
    </div>
    `;
  }

  observer() {
    const scrollObserver = new IntersectionObserver(
      entries => {
        console.log(entries);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    [...document.querySelector('.trip-story__day-list').children].forEach(item => scrollObserver.observe(item));
  }

  renderSelectedContent(e) {
    store.state = { localCommon: { ...store.state.localCommon, selectedTab: e.target.dataset.tab } };

    // Todo IntersectionObserver 관련 상위 컴포넌트로 올려서 사용 필요
    //   if (e.target.dataset.tab === 'story') {
    //     const scrollObserver = new IntersectionObserver(
    //       entries => {
    //         const { target } = entries.find(entry => entry.isIntersecting);

    //         [...document.querySelector('.nav-day__list').children].forEach(item =>
    //           item.classList.toggle('active', item.dataset.nav === target.id)
    //         );
    //       },
    //       {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5,
    //       }
    //     );

    //     [
    //       document.querySelector('.header'),
    //       ...document.querySelector('.trip-story__day-list').children,
    //       document.querySelector('.comment'),
    //     ].forEach(item => scrollObserver.observe(item));
    //   }
  }

  addEventListener() {
    return [{ type: 'click', selector: '.trip-itinerary__tab', handler: this.renderSelectedContent }];
  }
}

export default ViewTripTab;
