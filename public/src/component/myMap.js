function myMap() {
  const mapOptions = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
}

export default myMap;
