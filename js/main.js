// import { getData } from './api.js';
// import { getFilteredData } from './card.js';
import {offers} from './data.js';
import {
  enableActiveState,
  enableInactiveState
} from './form.js';
import {
  // getMapPoints,
  loadMap
} from './map.js';

enableInactiveState();
// enableActiveState();
loadMap(enableActiveState());
// getData();
console.log(offers);
// getData(getMapPoints);

fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

