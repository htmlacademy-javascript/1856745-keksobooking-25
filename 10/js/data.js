// import {
//   getRandomPositiveFloat,
//   getRandomPositiveInteger,
//   getNumberWithLeadZero,
//   getRandomItem,
//   getRandomArrayPart
// } from './util.js';

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
// const OFFERS_COUNT = 10;
export const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
export const CHECK_TIMES = ['12:00', '13:00', '14:00'];
export const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// const PHOTO_DIR = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking';
// const PHOTOS = [
//   `${PHOTO_DIR}/duonguyen-8LrGtIxxa4w.jpg`,
//   `${PHOTO_DIR}/brandon-hoogenboom-SNxQGWxZQi0.jpg`,
//   `${PHOTO_DIR}/claire-rendall-b6kAwr1i0Iw.jpg`
// ];
// const LatRange = {
//   MIN: 35.65,
//   MAX: 35.7
// };
// const LngRange = {
//   MIN: 139.7,
//   MAX: 139.8
// };
// const PriceRange = {
//   MIN: 2000,
//   MAX: 50000
// };
// const RoomsRange = {
//   MIN: 1,
//   MAX: 10
// };
// const GuestsRange = {
//   MIN: 2,
//   MAX: 20
// };

// const generateOffer = (index) => {
//   const lat = getRandomPositiveFloat(LatRange.MIN, LatRange.MAX, COORD_DECIMALS);
//   const lng = getRandomPositiveFloat(LngRange.MIN, LngRange.MAX, COORD_DECIMALS);

//   return {
//     author: {
//       avatar: `img/avatars/user${getNumberWithLeadZero(index)}.png`
//     },
//     offer: {
//       title: `Объявление ${index}`,
//       address: `${lat}, ${lng}`,
//       price: getRandomPositiveInteger(PriceRange.MIN, PriceRange.MAX),
//       type: getRandomItem(TYPES),
//       rooms: getRandomPositiveInteger(RoomsRange.MIN, RoomsRange.MAX),
//       guests: getRandomPositiveInteger(GuestsRange.MIN, GuestsRange.MAX),
//       checkin: getRandomItem(CHECK_TIMES),
//       checkout: getRandomItem(CHECK_TIMES),
//       features: getRandomArrayPart(FEATURES),
//       description: `Описание бъявления ${index}`,
//       photos: getRandomArrayPart(PHOTOS)
//     },
//     location: {
//       lat,
//       lng
//     }
//   };
// };

// const generateOffers = (length) => Array.from({ length }).map((_el, i) => generateOffer(i + 1));

// export const offers = generateOffers(OFFERS_COUNT);
