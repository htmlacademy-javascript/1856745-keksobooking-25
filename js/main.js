import {offers} from './data.js';
import {
  enableActiveState,
  enableInactiveState
} from './form.js';
import {
  getMapPoints,
  loadMap
} from './map.js';

enableInactiveState();
// enableActiveState();
loadMap(enableActiveState());
getMapPoints(offers);
console.log(offers);
fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
