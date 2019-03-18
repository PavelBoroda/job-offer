// Сортировка по возрастанию чисел внутри Массива
const usersByDay = [4, 2, 1, 3, 12, 14, 43, 55, 121];
console.log(usersByDay);
for (let currentIndex = 0; currentIndex <= usersByDay.length - 2; currentIndex++) {
  let minValue = usersByDay[currentIndex];

  for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      const swap = usersByDay[currentIndex];
      usersByDay[currentIndex] = minValue;
      usersByDay[j] = swap;
      console.log('Меняю местами ' + swap + ' и ' + minValue);
      console.log('Массив сейчас: ' + usersByDay);
    }
  }

  console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);
}


// компактный вариант 
var usersByDay = [812, 1360, 657, 1247, 165];
console.log(usersByDay);

for (var i = 0; i <= usersByDay.length - 2; i++) {
  var minValue = usersByDay[i];

  for (var j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      var swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay)