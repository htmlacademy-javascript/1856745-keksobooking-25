// Утилита общего назначения для получения случайного целого из диапазона
export const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


// Утилита общего назначения для получения случайного числа с заданной точностью из диапапзона
export const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return parseFloat(result.toFixed(digits));
};


// Утилита общего назначения для получения случайного элемента массива
export  const getRandomItem = (arr) => arr[getRandomPositiveInteger(0, arr.length - 1)];

// Утилита общего назначения для получения случайного фрагмента массива
export const getRandomArrayPart = (arr) => {
  const lastIndex = arr.length - 1;
  const a = getRandomPositiveInteger(0, lastIndex);
  const b = getRandomPositiveInteger(0, lastIndex);
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return arr.slice(lower, upper);
};

// Утилита общего назначения для вывода числа с ведущим нулём
export const getNumberWithLeadZero = (number) => number < 10 ? `0${number}` : number;

// Корректировка существительных после числительных
const DECLINE_THRESHOLD = 5;
const DECLINE_TAILSTART = -2;

export const declineNum = (num, nominative, genitiveSingular = nominative, genitivePlural = genitiveSingular) => {
  let answer = genitivePlural;
  const numLast = parseInt(num.toString().slice(-1), 10);
  const numLastDecim = parseInt(num.toString().slice(DECLINE_TAILSTART, -1), 10);
  if (numLastDecim !== 1) {
    if (numLast === 1) {
      answer = nominative;
    } else if (numLast > 1 && numLast < DECLINE_THRESHOLD) {
      answer = genitiveSingular;
    }
  }
  return `${num} ${answer}`;
};

const ALERT_SHOW_TIME = 5000;

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.width = '500px';
  alertContainer.style.height = '200px';
  alertContainer.style.backgroundColor = '#353535';
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = 0;
  alertContainer.style.bottom = 0;
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.margin = 'auto';
  alertContainer.style.padding = '80px 50px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
