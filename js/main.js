// Задание 1
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || (max-min) < 0 || max < 0 || min < 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1,9);

// Задание 2
function getRandom(min, max, decimals) {
  if (min >= max || (max-min) < 0 || max < 0 || min < 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  const digitsDegree = 10 ** decimals;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
getRandom(4, 8, 5);

//Задание 4.9

const AVATAR = [
  'img/avatars/user{{01}}.png',
  'img/avatars/user{{02}}.png',
  'img/avatars/user{{03}}.png',
  'img/avatars/user{{04}}.png',
  'img/avatars/user{{05}}.png',
  'img/avatars/user{{06}}.png',
  'img/avatars/user{{07}}.png',
  'img/avatars/user{{08}}.png',
  'img/avatars/user{{09}}.png',
  'img/avatars/user{{10}}.png',
];

const TITLE = 'Недвижимость';

const ADDRESS = '{{location.lat}}, {{location.lng}}';

const PRICE = getRandomPositiveInteger(0, 10000);

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS = getRandomPositiveInteger(0, 5);

const GUESTS = getRandomPositiveInteger(0, 5);

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = 'Комфортное помещение';

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
]

const LAT = getRandomPositiveFloat(35.65000, 35.70000, 5);

const LNG = getRandomPositiveFloat(139.70000, 139.8000, 5);

const ADVERTISEMENT_COUNT = 10;

const getRandomPositiveFloat = (a, b, digits = 5) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createAdvertisement = () => {
  return {
    author: getRandomArrayElement(AVATAR),
    offer: TITLE, ADDRESS, PRICE, getRandomArrayElement(TYPE), ROOMS, GUESTS, getRandomArrayElement(CHECKIN), getRandomArrayElement(CHECKOUT), getRandomArrayElement(FEATURES), DESCRIPTION, getRandomArrayElement(PHOTOS),
    location: LAT, LNG,
  };
};

const advertisements = Array.from({length: ADVERTISEMENT_COUNT}, createAdvertisement);

console.log(advertisements);
