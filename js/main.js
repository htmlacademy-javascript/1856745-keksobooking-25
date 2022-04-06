import {offers} from './data.js';
import {
  enableActiveState,
  enableInactiveState
} from './form.js';
import {
  getMapPoints,
} from './map.js';

enableInactiveState();
enableActiveState();
getMapPoints(offers);
