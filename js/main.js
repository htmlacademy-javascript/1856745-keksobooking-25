// 1 вариант
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max)
  {return ('Задан неверный диапазон! Укажите другие числа.');}

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1,9);
// 2 вариант, тернарный оператор
function getRandomSecond(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return (min > max) ? 'Задан неверный диапазон! Укажите другие числа.' : Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomSecond(2,9);
// Задание 2
function getRandom(min, max, maxDigits) {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  const digitsDegree = 10 ** maxDigits;
  return ~~((Math.random() * (max - min) + min)* digitsDegree) / digitsDegree;
}
getRandom(4, 8, 5);
