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
import render from '../dom/render.js';

let map = null;
let selectedCellCoord = null;

// Converts numeric degrees to radians
// const toRad = Value => (Value * Math.PI) / 180;

// const calcCrow = (lat1, lon1, lat2, lon2) => {
//   const R = 6371; // km
//   const dLat = toRad(lat2 - lat1);
//   const dLon = toRad(lon2 - lon1);
//   const _lat1 = toRad(lat1);
//   const _lat2 = toRad(lat2);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(_lat1) * Math.cos(_lat2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const d = R * c;
//   return d;
// };

// const calculateZoomLevel = (mapSize, coverage, latitude, distance) => {
//   // const pixels = mapSize.Width >= mapSize.Height ? mapSize.Height : mapSize.Width; // get the shortest dimmension of the map
//   const k = mapSize * 156543.03392 * Math.cos((latitude * Math.PI) / 180);
//   return Math.round(Math.log((coverage * k) / (distance * 100)) / 0.6931471805599453) / 2;
// };
// };

const initMap = type => {
  // 현제위치를 설정한다.
  // if (!store.state.localMap.isMapInitial) return;
  (async () => {
    const { geolocation } = navigator;
    console.log('[init map]' + type);

    const success = position => {
      const { latitude, longitude } = position.coords;
      const coord = new google.maps.LatLng(latitude, longitude);

      // const { lat, lng } = selectedCellCoord;
      // const _coord = new google.maps.LatLng(selectedCellCoord?.lat, selectedCellCoord?.lng);
      const cellInfoList = store.state[type].itinerary

        .map(dayPlan =>
          dayPlan.cells.map(cell => ({ type: cell.type, latLng: cell.location.latLng, name: cell.location.name }))
        )
        .flat();

      // const { sumLatitude, sumLongitude } = cellInfoList.reduce(
      //   (acc, cur) => ({
      //     sumLatitude: acc.sumLatitude + cur.latLng.lat,
      //     sumLongitude: acc.sumLongitude + cur.latLng.lng,
      //   }),
      //   { sumLatitude: 0, sumLongitude: 0 }
      // );

      // const _coord = new google.maps.LatLng(sumLatitude / cellInfoList.length, sumLongitude / cellInfoList.length);

      // const latList = cellInfoList.map(cellInfo => cellInfo.latLng.lat);
      // const lngList = cellInfoList.map(cellInfo => cellInfo.latLng.lng);

      // const distance = calcCrow(Math.max(...latList), Math.max(...lngList), Math.min(...latList), Math.min(...lngList));

      // const zoomLevel = calculateZoomLevel(1280, 80, sumLatitude / cellInfoList.length, distance, 15, 0);

      const mapOptions = {
        // zoom: cellInfoList.length ? zoomLevel : 13,
        zoom: 14,
        center: cellInfoList.length
          ? selectedCellCoord
            ? new google.maps.LatLng(selectedCellCoord?.lat, selectedCellCoord?.lng)
            : new google.maps.LatLng(
                cellInfoList[cellInfoList.length - 1].latLng.lat,
                cellInfoList[cellInfoList.length - 1].latLng.lng
              )
          : coord,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

      const journey = cellInfoList.map(cellInfo => cellInfo.latLng);

      const journeyPath = new google.maps.Polyline({
        path: journey,
        geodesic: true,
        strokeColor: '#9c5eff',
        strokeOpacity: 1.0,
        strokeWeight: 5,
      });

      const icon = {
        accomodation: '/assets/images/map/map-marker-accomodation.png',
        sightseeing: '/assets/images/map/map-marker-seesight.png',
        transportation: '/assets/images/map/map-marker-traffic.png',
        etc: '/assets/images/map/map-marker-etc.png',
      };

      cellInfoList.forEach(
        coord =>
          new google.maps.Marker({
            position: coord.latLng,
            icon: icon[coord.type],
            map,
          })
      );

      journeyPath.setMap(map);
      // 초기화
      // selectedCellCoord = null;
      // store.state.localMap.isMapInitial = false;
      render();
    };
    const failure = () => {
      // console.log('Fail to load Google Map');
    };
    await geolocation.getCurrentPosition(success, failure);
  })();
};

const moveMapCenter = e => {
  if (e.target.matches('.time-table__day-index__blank .itinerary-card--delete')) return;

  console.log(window.location.pathname);
  const type = window.location.pathname.includes('trip-planner-edit') ? 'tripSchedule' : 'viewTripSchedule';

  const {
    [type]: { itinerary },
  } = store.state;

  const { id } = e.target.closest('.itinerary-card').dataset;
  const selectedItineraryId = +e.target.closest('.time-table__day-index__blank').dataset.id;
  selectedCellCoord = itinerary[selectedItineraryId - 1].cells[id - 1].location.latLng;

  initMap(type);
  // map.addListener('center_changed', () => {
  //   // 3 seconds after the center of the map has changed, pan back to the
  //   // marker.
  //   window.setTimeout(() => {
  //     map.panTo(marker.getPosition());
  //   }, 3000);
  // });
  // console.log(map);
  // console.log(lat, lng);
  // map.setCenter(latLng);
};

// document.querySelector('.itinerary-card').addEventListener('click', moveMapCenter);

// export default initMap;
export { initMap, moveMapCenter };
