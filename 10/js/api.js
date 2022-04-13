import {showAlert} from './util.js';
// const SERVER = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data', {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Ошибка загрузки данных с сервера : - (');
    });

};

function sendData(onSuccess, onFail, body) {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess(true);
      }
      else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export {getData, sendData};
