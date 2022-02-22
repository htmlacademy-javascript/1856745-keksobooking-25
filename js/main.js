// Задание 1
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || (max-min) < 0 || max < 0 || min < 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1,9);

// Задание 2
function getRandom(min, max, decimals) {
  if (min >= max || (max-min) < 0 || max < 0 || min < 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  const digitsDegree = 10 ** decimals;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
getRandom(4, 8, 5);
