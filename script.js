/* eslint-disable no-var */
// нажата мышь или нет
var clicked = false;
// стартовая точка для бегунка ( относительно родителя)
var start = 0;
// ищем слайдер
var slider = document.getElementById('myslider');


// создаём внутри дивы
var sliderField = document.createElement('div');
sliderField.innerHTML = '', sliderField.id = 'sliderField';
slider.appendChild(sliderField);
var fieldPoint = document.createElement('div');
fieldPoint.innerHTML = '', fieldPoint.id = 'fieldPoint';
sliderField.appendChild(fieldPoint);
var fieldScore = document.createElement('input');
fieldScore.innerHTML = fieldScore.value = '0', fieldScore.id ='fieldScore', fieldScore.type = 'number', fieldScore.min = '0', fieldScore.max = '300';
sliderField.appendChild(fieldScore);


// привязываем положение бегунка к полю.
fieldPoint.style.left = fieldScore.value + 'px';

// если в выделенном поле ввести значение с клавиатуры - бегунок перемещается
var keystart = function() {
  fieldScore.addEventListener('keyup', function() {
    if (fieldScore.value >= 0 && fieldScore.value <= 300) {
      fieldPoint.style.left = fieldScore.value + 'px';
    }
  });
};
// задержка - почему то не работает.
setTimeout(keystart(), 300);

// получаем координаты бегунка для текущего монитора
fieldPoint.onmousedown = function(e) {
  clicked = true;
  start = e.pageX - fieldPoint.offsetLeft;
};
// меняем стили в зависимости от положения курсора
document.onmousemove = function(e) {
  if (!clicked) {
    return false;
  };
  fieldPoint.style.left = e.pageX - start + 'px';
  // не даём бегунку выйти за 0
  if (fieldPoint.offsetLeft < 0) {
    fieldPoint.style.left = 0 + 'px';
  }
  // не даём бегунку выйти за длину заданного поля.
  if (fieldPoint.offsetLeft > sliderField.offsetWidth - fieldPoint.offsetWidth) {
    fieldPoint.style.left = sliderField.offsetWidth - fieldPoint.offsetWidth + 'px';
  };
  // передаём значение бегунка текущим координатам мыши
  fieldScore.value = fieldPoint.offsetLeft;
  // обманываем браузер
  return false;
};
// прекращаем перемещение бегунка
document.onmouseup = function() {
  clicked = false;
};


