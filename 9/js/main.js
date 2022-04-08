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
