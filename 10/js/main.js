import {
  enableActiveState,
  enableInactiveState,
  setUserFormSubmit
} from './form.js';
import {
  getMapPoints,
  loadMap
} from './map.js';
import {
  getData,
  // sendData
} from './api.js';

enableInactiveState();

getData((data) => {getMapPoints(data);
  loadMap(enableActiveState());
});
setUserFormSubmit();
