import {
  typeFlat
} from './data.js';

import { getMapPoints } from './map.js';
const MAX_POINTS_MAP = 10;
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const imgTemplate = cardTemplate.querySelector('.popup__photo');

// Вставка списка удобств
const insertFeatures = (element, features = []) => {
  element.innerHTML = '';

  features.forEach((item) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${item}`);
    element.appendChild(featureItem);
  });
};

// Вставка фотографий
const insertPhotos = (element, photos = []) => {
  element.innerHTML = '';

  photos.forEach((item) => {
    const adPhoto = imgTemplate.cloneNode(true);
    adPhoto.src = item;
    element.appendChild(adPhoto);
  });
};

// Создание объявления
const renderCard = (card) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = typeFlat[card.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin  }, выезд до ${card.offer.checkout}`;
  insertFeatures(cardElement.querySelector('.popup__features'), card.offer.features);
  cardElement.querySelector('.popup__description').textContent = card.offer.description;
  insertPhotos(cardElement.querySelector('.popup__photos'), card.offer.photos);
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;

  return cardElement;
};
// Показ объявления
const showCard = (ad) => {
  const adCard = document.querySelector('#map-canvas');
  adCard.insertAdjacentElement('beforeend', renderCard(ad));
};

const getFilteredData = (data) => {
  if (data) {
    const array = data
      .slice();
    getMapPoints(array.slice(0, MAX_POINTS_MAP));
  }
};

export {renderCard, showCard, getFilteredData};
