import {offers} from './data.js';
// import {showCard} from './card.js';
import {
  enableActiveState,
  enableInactiveState
} from './form.js';
import {
  getMapPoints,
} from './map.js';


console.log(offers);
// showCard(offers[9]);
enableInactiveState();
enableActiveState();
getMapPoints();
