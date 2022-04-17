import {
  enableActiveState,
  enableInactiveState,
  setResetHandler
} from './form.js';
import { loadMap } from './map.js';
import { getData } from './api.js';
import {
  getFilteredData,
  setFormFilterListener,
  toggleFilters
} from './filters.js';
import { debounce } from './util.js';
import './upload-photo.js';

enableInactiveState();
toggleFilters(false);
getData((data) => {
  getFilteredData(data);
  loadMap();
  setFormFilterListener(debounce(() => getFilteredData(data)));
  toggleFilters(data.length > 0);
  setResetHandler(() => getFilteredData(data));
}).then(() => enableActiveState(true));

