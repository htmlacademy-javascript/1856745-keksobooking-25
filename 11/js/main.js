import {
  enableActiveState,
  enableInactiveState
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
  formFilterListener,
  toggleFilters
} from './filters.js';
import {
  debounce
} from './util.js';
import './upload-photo.js';

enableInactiveState();
toggleFilters(false);
getData((data) => {
  getFilteredData(data);
  loadMap(enableActiveState(true));
  toggleFilters(true);
  formFilterListener(debounce(() => getFilteredData(data)));
});

