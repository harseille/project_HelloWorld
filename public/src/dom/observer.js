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
    // else if (location.pathname.includes('/trip-planner-edit')) {
    //   // google map init
    //   console.log('google map init');
    //   (async () => {
    //     const { geolocation } = navigator;

    //     const success = position => {
    //       const { latitude, longitude } = position.coords;

    //       // console.log(latitude, longitude);

    //       const coords = new google.maps.LatLng(latitude, longitude);

    //       const mapOptions = {
    //         zoom: 15,
    //         center: coords,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP,
    //       };

    //       const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    //       // console.log(map);

    //       // TODO: data set 만들기
    //       const journeyCoordinates = [
    //         { lat: 37.4949903, log: 127.0308632 },
    //         { lat: 37.498443, log: 127.0305178 },
    //         { lat: 37.45443, log: 127.040778 },
    //       ];
    //       const journeyPath = new google.maps.Polyline({
    //         path: journeyCoordinates,
    //         geodesic: true,
    //         strokeColor: '#FF0000',
    //         strokeOpacity: 1.0,
    //         strokeWeight: 2,
    //       });
    //       console.log(journeyPath);
    //       journeyPath.setMap(map);
    //     };

    //     const failure = () => {
    //       console.log('error');
    //     };

    //     geolocation.getCurrentPosition(success, failure);
    //   })();
    // }
  });
  const config = { subtree: true, childList: true };

  observered.observe(document.body, config);

  return observered;
};

export default observer;
