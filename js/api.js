// import {showAlert} from './utils.js';
// const SERVER = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    onSuccess(data);
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
