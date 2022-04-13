import { DEFAULT_LOCATION, COORD_DECIMALS } from './data.js';
import { renderCard } from './card.js';
// import {offers} from './data.js';
const MAIN_PIN_SIZE = 52;
const PIN_SIZE = 40;
const PIN_RATIO = 0.5;
const BALOON_MIN_WIDTH = 300;
const BALOON_MAX_HEIGHT = 400;

const map = L.map('map-canvas')
  .setView(DEFAULT_LOCATION, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const setPin = (size, filename) => L.icon({
  iconUrl: `./img/${filename}.svg`,
  iconSize: [size, size],
  iconAnchor: [size * PIN_RATIO, size],
});

const mainPinMarker = L.marker(DEFAULT_LOCATION, {
  draggable: true,
  icon: setPin(MAIN_PIN_SIZE, 'main-pin'),
});

const getLocationString = ({ lat, lng }) => `${lat.toFixed(COORD_DECIMALS)}, ${lng.toFixed(COORD_DECIMALS)}`;


const addMapHandlers = (addressElement) => {
  mainPinMarker.on('moveend', (evt) => {
    addressElement.value = getLocationString(evt.target.getLatLng());
  });

  return () => {
    mainPinMarker.setLatLng(DEFAULT_LOCATION);
    map.closePopup().setView(DEFAULT_LOCATION);
  };
};

mainPinMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const getMapPoints = (offers) => {

  markerGroup.clearLayers();

  offers.forEach(({author, offer, location}) => {
    const icon = setPin(PIN_SIZE, 'pin');
    const lat = location.lat;
    const lng = location.lng;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(renderCard({author, offer, location}),
        {
          keepInView: true,
          minWidth: BALOON_MIN_WIDTH,
          maxHeight: BALOON_MAX_HEIGHT,
        },
      );
  });
};
const loadMap = (loadHandler) => {
  map.on('load', loadHandler).setView(DEFAULT_LOCATION);
};

export { loadMap, getMapPoints, addMapHandlers };
