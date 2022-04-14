import { createPopup } from './popup.js';
const SERVER = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => fetch(`${SERVER}/data`, {
  method: 'GET',
  credentials: 'same-origin',
})
  .then((res) => {
    const { ok = false } = res;

    if (ok) {
      return res.json();
    }

    createPopup('ERROR_FETCH');
    return [];
  })
  .then(onSuccess);

const sendData = (body, handleSuccess) => fetch(SERVER, {
  method: 'POST',
  body,
})
  .then(({ ok }) => {
    createPopup(ok ? 'SUCCESS_POST' : 'ERROR_POST');

    if (ok) {
      handleSuccess();
    }
  });

export { getData, sendData };
