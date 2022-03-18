const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('fieldset');
window.util.setDisabled(adFormFieldset, true);

// Перевод в активное состояние
const enableActiveState = () => {
  adForm.classList.remove('ad-form--disabled');

  window.util.setDisabled(adFormFieldset, false);
};

// Перевод в неактивное состояние
const enableInactiveState = () => {
  adForm.classList.add('ad-form--disabled');

  window.util.setDisabled(adFormFieldset, true);
};

window.form = {
  enableActiveState: enableActiveState,
  enableInactiveState: enableInactiveState,
};
