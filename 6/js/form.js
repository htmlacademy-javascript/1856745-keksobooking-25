// Добавление disabled
const setDisabled = function (collection, value) {
  collection.forEach((item) => {
    item.disabled = value;
  });
};
const adFormDisabled='ad-form--disabled';
const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
setDisabled(adFormFieldsets, true);

// Перевод в активное состояние
const enableActiveState = () => {
  adForm.classList.remove(adFormDisabled);
  setDisabled(adFormFieldsets, false);
};

// Перевод в неактивное состояние
const enableInactiveState = () => {
  adForm.classList.add(adFormDisabled);
  setDisabled(adFormFieldsets, true);
};

export {
  enableActiveState,
  enableInactiveState,
};
