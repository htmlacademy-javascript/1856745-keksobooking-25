export const typeFlat = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};
export const roomToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};
export const offerTypes = {
  palace: {
    title: 'Дворец',
    min: 10000,
  },
  flat: {
    title: 'Квартира',
    min: 1000,
  },
  house: {
    title: 'Дом',
    min: 5000,
  },
  bungalow: {
    title: 'Бунгало',
    min: 0,
  },
  hotel: {
    title: 'Отель ',
    min: 3000,
  },
};

export const DEFAULT_LOCATION = {
  lat: 35.684,
  lng: 139.75,
};

export const COORD_DECIMALS = 5;
export const MAX_PRICE = 100000;
export const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
export const CHECK_TIMES = ['12:00', '13:00', '14:00'];
export const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
