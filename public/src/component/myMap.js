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

const initMap = page => {
  // 현제위치를 설정한다.
  console.log('View google map init');
  (async () => {
    const { geolocation } = navigator;
    let map = null;

    const success = position => {
      const { latitude, longitude } = position.coords;

      const coords = new google.maps.LatLng(latitude, longitude);
      const mapOptions = {
        zoom: 15,
        center: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

      const cellInfoList = store.state.tripSchedule.itinerary
        .map(dayPlan =>
          dayPlan.cells.map(cell => ({ type: cell.type, latLng: cell.location.latLng, name: cell.location.name }))
        )
        .flat();

      console.log(cellInfoList);

      const journey = cellInfoList.map(cellInfo => cellInfo.latLng);
      const icon = {
        accomodation: '/assets/images/map/map-marker-hotel.png',
        sightseeing: '/assets/images/map/map-marker-footprint.png',
        transportation: '/assets/images/map/map-marker-traffic.png',
        etc: '/assets/images/map/map-marker-pin.png',
      };

      const journeyPath = new google.maps.Polyline({
        path: journey,
        geodesic: true,
        strokeColor: '#9c5eff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
      });

      cellInfoList.forEach(
        coord =>
          new google.maps.Marker({
            position: coord.latLng,
            icon: icon[coord.type],
            map,
          })
      );
      journeyPath.setMap(map);
    };
    const failure = () => {
      console.log('Fail to load Google Map');
    };
    await geolocation.getCurrentPosition(success, failure);
  })();
};

export { initMap };
// export { initMap, setJourneyLine };
