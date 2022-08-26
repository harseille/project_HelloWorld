import store from '../store/store.js';

const observer = () => {
  const observered = new MutationObserver(mutations => {
    if (location.pathname === '/main') {
      (async () => {
        const _tripSchedules = await axios.get('/mainTripSchedules');
        store.state = { ...store.state.tripSchedules, tripSchedules: _tripSchedules.data };
      })();
    } else if (location.pathname.includes('/trip-planner-view')) {
      (async () => {
        console.log('async');
        const id = window.location.pathname.split('/').pop();
        const _tripSchedule = await axios.get('/tripSchedule/' + id);
        store.state = {
          tripSchedule: _tripSchedule.data,
        };
      })();
    }
  });
  const config = { subtree: true, childList: true };

  observered.observe(document, config);

  return observered;
};

export default observer;
