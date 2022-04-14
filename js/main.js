import {
  enableActiveState,
  // enableInactiveState,
  setUserFormSubmit
} from './form.js';
import {
  // getMapPoints,
  loadMap
} from './map.js';
import {
  getData,
  // sendData
} from './api.js';
import {
  getFilteredData,
  formFilterListener
} from './filters.js';
import {
  debounce
} from './util.js';

// enableInactiveState();
getData((data) => {
  getFilteredData(data);
  loadMap(enableActiveState());
  formFilterListener(debounce(() => getFilteredData(data)));
});
setUserFormSubmit();
