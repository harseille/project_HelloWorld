/**
 * * old map
 *
 */

// function myMap() {
//   const mapOptions = {
//     center: new google.maps.LatLng(51.508742, -0.12085),
//     zoom: 5,
//   };
//   const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
// mark 표시
// const marker = new google.maps.marker({
//   position: {
//     lat: 51.508742,
//     lng: -0.12085,
//   },
//   map,
//   title: 'Hello, world',
// });
// }

// export default myMap;

// let map;
// let infoWindow;
// let marker;

// function myMap() {
//   const currentPosition = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent('Location found.');
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   };
//   map = new google.maps.Map(document.getElementById('googleMap'), {
//     center: currentPosition(),
//     zoom: 15,
//   });

//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.createElement('button');

//   locationButton.addEventListener('DOMContentLoaded', () => {
//     currentPosition();
//   });

//   const marker = new google.maps.marker({
//   position: {
//     lat: 51.508742,
//     lng: -0.12085,
//   },
//   map,
//   title: 'Hello, world',
// });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? 'Error: The Geolocation service failed.'
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }

// export default myMap;

// function myMap() {
//   const mapOptions = {
//     center: new google.maps.LatLng(51.508742, -0.12085),
//     zoom: 5,
//   };

//   const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
// }

// export default myMap;

/**
 * new map
 */

import store from '../store/store.js';

const initEditMap = () => {
  // 현제위치를 설정한다.

  console.log('Edit google map init');
  (async () => {
    const { geolocation } = navigator;
    const success = position => {
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      const coords = new google.maps.LatLng(latitude, longitude);
      const mapOptions = {
        zoom: 15,
        center: coords,
        mapTypeId: google.editTripScheduleMap.MapTypeId.ROADMAP,
      };
      store.state.localMap.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    };
    const failure = () => {
      console.log('Fail to load Google Map');
    };
    geolocation.getCurrentPosition(success, failure);
  })();
};

const initViewMap = () => {
  // 현제위치를 설정한다.

  console.log('View google map init');
  (async () => {
    const { geolocation } = navigator;
    const success = position => {
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      const coords = new google.maps.LatLng(latitude, longitude);
      const mapOptions = {
        zoom: 15,
        center: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      store.state.localMap.viewTripScheduleMap = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    };
    const failure = () => {
      console.log('Fail to load Google Map');
    };
    geolocation.getCurrentPosition(success, failure);
  })();
};

// 선택한 일정을 시간 순서에 따라 연결한다.
const setJourneyLine = journeyCoordinates => {
  const journeyPath = new google.maps.Polyline({
    path: journeyCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  journeyPath.setMap(map);
};

export { initEditMap, initViewMap, setJourneyLine };
