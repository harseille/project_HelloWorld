/* eslint-disable no-undef */
import store from '../store/store.js';
import { initValue } from '../store/authStore.js';

const observer = () => {
  const observered = new MutationObserver(mutations => {
    if (window.location.pathname === '/main') {
      (async () => {
        console.log('동작동작');
        const _tripSchedules = await axios.get('/mainTripSchedules');
        store.state = { ...store.state.tripSchedules, tripSchedules: _tripSchedules.data };
      })();
    } else if (window.location.pathname.includes('/trip-planner-view')) {
      (async () => {
        console.log('async');
        const id = window.location.pathname.split('/').pop();
        const _tripSchedule = await axios.get('/tripSchedule/' + id);
        store.state = {
          viewTripSchedule: _tripSchedule.data,
        };
      })();
      // Todo 리팩토링 필요 로그인 회원가입 input 초기화 시점
    } else if (window.location.pathname === '/signin' || window.location.pathname === '/signup') {
      initValue();
    }
  });
  const config = { subtree: true, childList: true };

  observered.observe(document.getElementById('root'), config);

  return observered;
};

export default observer;
