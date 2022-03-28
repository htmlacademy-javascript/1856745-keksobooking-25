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

export {
  enableActiveState,
  enableInactiveState,
};
