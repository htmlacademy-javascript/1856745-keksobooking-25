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

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

function validatePrice (value) {
  return value >= 5000 && value <= 100000;
}

pristine.addValidator(
  form.querySelector('#price'),
  validatePrice,
  'Максимальное значение 100 000'
);

const roomsField = form.querySelector('[name="rooms"]');
const capacityField = form.querySelector('[name="capacity"]');
const roomsOption = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты': ['для 3гостей', 'для 2 гостей', 'для 1 гостя'],
  '100 комнат': ['не для гостей']
};

function validateRooms () {
  return roomsOption[roomsField.value].includes(capacityField.value);
}

pristine.addValidator(roomsField, validateRooms);
pristine.addValidator(capacityField, validateRooms);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {
  enableActiveState,
  enableInactiveState,
};
