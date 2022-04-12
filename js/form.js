import { declineNum } from './util.js';
import { MAX_PRICE, offerTypes, roomToGuests } from './data.js';
import { createUiSlider } from './slider.js';
import { addMapHandlers } from './map.js';
import { sendData } from './api.js';
import {getPopupSuccess, getPopupError} from './modals.js';

// Добавление disabled
const setDisabled = function (collection, value = true) {
  collection.forEach((item) => {
    item.disabled = value;
  });
};
const FORM_DISADLED_CLASS_NAME = 'ad-form--disabled';
const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
setDisabled(adFormFieldsets, true);

// Перевод в активное состояние
const enableActiveState = () => {
  adForm.classList.remove(FORM_DISADLED_CLASS_NAME);
  setDisabled(adFormFieldsets, false);
};

// Перевод в неактивное состояние
const enableInactiveState = () => {
  adForm.classList.add(FORM_DISADLED_CLASS_NAME);
  setDisabled(adFormFieldsets, true);
};

//Валидация формы
const adFormElement = document.querySelector('.ad-form');
const addressElement = adFormElement.querySelector('#address');
const roomsFieldElement = adFormElement.querySelector('[name="rooms"]');
const capacityFieldElement = adFormElement.querySelector('[name="capacity"]');
const priceFieldElement = adFormElement.querySelector('[name="price"]');
const priceSliderElement = adFormElement.querySelector('.ad-form__slider');
const typeFieldElement = adFormElement.querySelector('[name="type"]');
const timeinFieldElement = adFormElement.querySelector('[name="timein"]');
const timeoutFieldElement = adFormElement.querySelector('[name="timeout"]');
const PRICE_VALIDATION_PRIORITY = 1000;
const initialType = typeFieldElement.value;

const resetMapHandler = addMapHandlers(addressElement);
const submitButton = adFormElement.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  // submitButton.textContent = 'Сохраняю...';
};

// const unblockSubmitButton = () => {
//   submitButton.disabled = false;
//   // submitButton.textContent = 'Сохранить';
// };

const pristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const setPriceAttributes = () => {
  const minPrice = offerTypes[typeFieldElement.value].min;
  priceFieldElement.min = minPrice;
  priceFieldElement.placeholder = minPrice;
};

setPriceAttributes(initialType);

const priceUISlider = createUiSlider(priceSliderElement, parseInt(priceFieldElement.min, 10), () => {
  priceFieldElement.value = priceUISlider.get();
  pristine.validate(priceFieldElement);
});


const changeType = (type = typeFieldElement.value) => {
  setPriceAttributes(type);

  priceUISlider.updateOptions({
    range: {
      min: parseInt(priceFieldElement.min, 10),
      max: MAX_PRICE,
    },
  });
};


setPriceAttributes();
const validateTitle = (value) => value.length >= 30 && value.length <= 100;


typeFieldElement.addEventListener('change', () => {
  setPriceAttributes();
  changeType();
  pristine.validate(priceFieldElement);
});

pristine.addValidator(
  adFormElement.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов',
  PRICE_VALIDATION_PRIORITY,
  true
);

const validatePrice = (value) => value >= Number(priceFieldElement.min) && value <= MAX_PRICE;

const getPriceMessage = () => `Выберите число между ${priceFieldElement.min} и ${MAX_PRICE}`;
const validateCapacity = () => roomToGuests[roomsFieldElement.value].includes(capacityFieldElement.value);

const timesChangeHandler = (evt) => {
  const { value } = evt.currentTarget;
  timeinFieldElement.value = value;
  timeoutFieldElement.value = value;
};

timeinFieldElement.addEventListener('change', timesChangeHandler);
timeoutFieldElement.addEventListener('change', timesChangeHandler);

const getCapacityMessage = () => {
  const rooms = declineNum(roomsFieldElement.value, 'комнаты', 'комнат');
  const validGuests = roomToGuests[roomsFieldElement.value];
  return `Для ${rooms} допустимо гостей: ${validGuests.join(', ')}`;
};

roomsFieldElement.addEventListener('change', () => pristine.validate(capacityFieldElement));

pristine.addValidator(priceFieldElement, validatePrice, getPriceMessage, PRICE_VALIDATION_PRIORITY, true);
pristine.addValidator(capacityFieldElement, validateCapacity, getCapacityMessage);


const setUserFormSubmit = () => {
  adFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        getPopupSuccess,
        getPopupError,
        new FormData(evt.target),
      );
    }
    resetMapHandler();
    adFormElement.reset();
  });
};

adFormElement.addEventListener('reset', () => {
  resetMapHandler();
});

export {
  setUserFormSubmit,
  enableActiveState,
  enableInactiveState,
  FORM_DISADLED_CLASS_NAME
};