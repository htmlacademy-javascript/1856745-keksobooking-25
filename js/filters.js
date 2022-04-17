import { getMapPoints} from './map.js';
import { toggleForm } from './util.js';
export const formFilters = document.querySelector('.map__filters');
const MAX_POINTS_MAP = 10;
const FILTERS_DISABLED_CLASS_NAME = 'map__filters--disabled';
const housingType = formFilters.querySelector('#housing-type');
const housingPrice = formFilters.querySelector('#housing-price');
const housingRooms = formFilters.querySelector('#housing-rooms');
const housingGuests = formFilters.querySelector('#housing-guests');
const housingFeatures = formFilters.querySelector('#housing-features');

const keyHousingPrice = {
  any: {
    min: 0,
    max: 1000000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  low: {
    min: 0,
    max: 10000,
  },
  high: {
    min: 50000,
    max: 1000000,
  },
};

const isHousingType = (item) =>
  item.offer.type === housingType.value || housingType.value === 'any';

const isHousingPrice = (item) =>
  item.offer.price >= keyHousingPrice[housingPrice.value].min &&
  item.offer.price <= keyHousingPrice[housingPrice.value].max ||
  housingPrice.value === 'any';

const isHousingRooms = (item) =>
  item.offer.rooms === Number(housingRooms.value) || housingRooms.value === 'any';

const isHousingGuests = (item) =>
  item.offer.guests === Number(housingGuests.value) || housingGuests.value === 'any';

const isHousingFeatures = (features) => {
  if (!features || !features.length) {
    return false;
  }

  const featuresCheckedList = housingFeatures.querySelectorAll('input:checked');
  for (const feature of featuresCheckedList) {
    if (!features.includes(feature.value)) {
      return false;
    }
  }
  return true;
};

const isCardValid = (item) =>
  isHousingType(item) &&
  isHousingPrice(item) &&
  isHousingRooms(item) &&
  isHousingGuests(item) &&
  isHousingFeatures(item.offer.features);

const getFilteredData = (data) => {
  if (data) {
    const array = data
      .slice()
      .filter(isCardValid);
    getMapPoints(array.slice(0, MAX_POINTS_MAP));
  }
};

const setFormFilterListener = (cb) => {
  formFilters.addEventListener('change', () => {
    cb();
  });
};

const toggleFilters = (isActive) => {
  toggleForm(isActive, formFilters, FILTERS_DISABLED_CLASS_NAME);
};

export {getFilteredData, setFormFilterListener, toggleFilters};
