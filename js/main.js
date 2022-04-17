import {
  enableActiveState,
  enableInactiveState
} from './form.js';
import { loadMap } from './map.js';
import { getData } from './api.js';
import {
  getFilteredData,
  formFilterListener,
  toggleFilters
} from './filters.js';
import { debounce } from './util.js';
import './upload-photo.js';

enableInactiveState();
toggleFilters(false);
getData((data) => {
  getFilteredData(data);
  loadMap();
  formFilterListener(debounce(() => getFilteredData(data)));
  toggleFilters(true);
}).then(() => enableActiveState(true));

