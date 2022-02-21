function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max)
  {return ('Задан неверный диапазон! Укажите другие числа.');}

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1.3,9);

function getRandom(min, max, maxDigits) {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  const digitsDegree = 10 ** maxDigits;
  return ~~((Math.random() * (max - min) + min)* digitsDegree) / digitsDegree;
}
getRandom(4, 8, 5);
