/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */


// логика
var validateForm = document.getElementById('validateForm');
validateForm.style.display = 'none';
var mainForm = document.getElementById('mainForm'); // основная форма
var selectSumm = 0;
var textForm = ['метр', 'метра', 'метров'];
var validateLength = document.getElementById('validateLength');
var validateLengthText = document.getElementById('validateLengthText');
var validateHeight = document.getElementById('validateHeight');
var validateHeightText = document.getElementById('validateHeightText');
var validateMaterial = document.getElementById('validateMaterial');

// форма выбор длины
var lengthForm = document.getElementById('lengthForm'); // инпут длины
var lengthError = document.getElementById('lengthError');// ошибка ввода длины
var lengthFence = document.getElementById('lengthFence'); // слово Метров
var lengthOk = document.getElementById('lengthOk'); // верно заполненная форма
lengthOk.style.display = 'none';
lengthError.style.display = '';
lengthForm.addEventListener('keyup', function() {
  validateLength.innerText = lengthForm.value;
  // склоняем слово в зависимости от значения поля Инпут
  function num2str(n, textForm) {
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) {
      return textForm[2];
    }
    if (n1 > 1 && n1 < 5) {
      return textForm[1];
    }
    if (n1 == 1) {
      return textForm[0];
    }
    return textForm[2];
  }
  lengthFence.textContent = num2str(lengthForm.value, textForm);
  validateLengthText.textContent = lengthFence.textContent;
});

// форма выбор высоты
var heightForm = document.getElementById('heightForm'); // инпут высоты
var heightError = document.getElementById('heightError');// ошибка ввода высоты
var heightFence = document.getElementById('heightFence');// слово Метров
var heightOk = document.getElementById('heightOk');// верно заполненная форма
heightOk.style.display = 'none';
heightError.style.display = '';
heightForm.addEventListener('keyup', function() {
  validateHeight.innerText = heightForm.value;
  function num2str(n, textForm) {
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) {
      return textForm[2];
    }
    if (n1 > 1 && n1 < 5) {
      return textForm[1];
    }
    if (n1 == 1) {
      return textForm[0];
    }
    return textForm[2];
  }
  heightFence.textContent = num2str(heightForm.value, textForm);
  validateHeightText.textContent = heightFence.textContent;
});

// чекбокс
var checkSubmit = document.getElementById('checkSubmit');
var checkSumm = 0;
checkSubmit.addEventListener('mouseup', function() {
  if (checkSubmit.checked) {
    checkSumm = 0;
  } else {
    checkSumm = 200;
  }
});


// дропдаун
$(document).ready(function() {
  enableSelectBoxes();
});

function enableSelectBoxes() {
  $('div.selectBox').each(function() {
    $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
    $(this).attr('value', $(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));

    $(this).children('span.selected,span.selectArrow').click(function() {
      if ($(this).parent().children('div.selectOptions').css('display') == 'none') {
        $(this).parent().children('div.selectOptions').css('display', 'block');
      } else {
        $(this).parent().children('div.selectOptions').css('display', 'none');
      }
    });
    var boxOk = document.getElementById('boxOk');
    boxOk.style.display = 'none';

    $(this).find('span.selectOption').click(function() {
      $(this).parent().css('display', 'none');
      $(this).closest('div.selectBox').attr('value', $(this).attr('value'));
      $(this).parent().siblings('span.selected').html($(this).html());
      var seles = document.getElementById('seles');
      if (seles.textContent == 'Выберите материал') {
      } else {
        if (seles.textContent == 'Профнастил 400 ₽ за м²') {
          selectSumm = 400;
          validateMaterial.textContent = 'профнастил';
        }
        if (seles.textContent == 'Модули 500 ₽ за м²') {
          selectSumm = 500;
          validateMaterial.textContent = 'модули';
        }
        if (seles.textContent == 'Бетон 700 ₽ за м²') {
          selectSumm = 700;
          validateMaterial.textContent = 'бетон';
        }
        if (seles.textContent == 'Сетка 200 ₽ за м²') {
          selectSumm = 200;
          validateMaterial.textContent = 'сетка';
        }
      };
    });
  });
}

// сумма заказа
var validateSumm = document.getElementById('validateSumm');
var summ = document.getElementById('summ');
mainForm.addEventListener('keyup', function() {
  summ.innerText = Math.round(((checkSumm + selectSumm) * lengthForm.value * heightForm.value));
  validateSumm.innerText = Math.round(summ.innerText);
  if (summ.innerText > 0 ) {
    nextButtonSvg.style.fill = '#448be4';
  } else {
    nextButtonSvg.style.fill = '#7e8185';
  }
});
mainForm.addEventListener('click', function() {
  summ.innerText = Math.round(((checkSumm + selectSumm) * lengthForm.value * heightForm.value));
  validateSumm.innerText = summ.innerText;
  if (summ.innerText > 0 ) {
    nextButtonSvg.style.fill = '#448be4';
  } else {
    nextButtonSvg.style.fill = '#7e8185';
  }
});
lengthError.style.display = 'none';
heightError.style.display = 'none';
boxOk.style.display = 'none';
// кнопка далее
var secondButton = document.getElementById('secondButton');
var nextButtonSvg = document.getElementById('nextButton_svg');
nextButton_svg.addEventListener('click', function() {
  if (lengthForm.value > 0) {
    lengthError.style.display = 'none';
    lengthOk.style.display = '';
  } else {
    lengthError.style.display = '';
    lengthOk.style.display = 'none';
    lengthForm.style.border = '1px solid red';
  };
  if (heightForm.value > 0) {
    heightError.style.display = 'none';
    heightOk.style.display = '';
  } else {
    heightError.style.display = '';
    heightOk.style.display = 'none';
    heightForm.style.border = '1px solid red';
  };
  if (seles.textContent !== 'Выберите материал') {
    boxOk.style.display = '';
  };
  if (summ.innerText > 0 ) {
    mainForm.style.display = 'none';
    validateForm.style.display = '';
  }
});
var nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', function() {
  if (lengthForm.value > 0) {
    lengthError.style.display = 'none';
    lengthOk.style.display = '';
  } else {
    lengthError.style.display = '';
    lengthOk.style.display = 'none';
    lengthForm.style.border = '1px solid red';
  };
  if (heightForm.value > 0) {
    heightError.style.display = 'none';
    heightOk.style.display = '';
  } else {
    heightError.style.display = '';
    heightOk.style.display = 'none';
    heightForm.style.border = '1px solid red';
  };
  if (seles.textContent !== 'Выберите материал') {
    boxOk.style.display = '';
  };
  if (summ.innerText > 0 ) {
    mainForm.style.display = 'none';
    validateForm.style.display = '';
  }
});
var phoneOk = document.getElementById('phoneOk');
phoneOk.style.display = 'none';
var validateMessage = document.getElementById('validateMessage');
$('#phoneForm').mask('+7(999)999-99-99', {completed: function() {
},
});
var nameOk = document.getElementById('nameOk');
nameOk.style.display = 'none';
var nameForm = document.getElementById('nameForm');
nameForm.value = '';

var validateForm = document.getElementById('validateForm');
var mailForm = document.getElementById('mailForm');
mailForm.value = '';
var mailOk = document.getElementById('mailOk');
mailOk.style.display = 'none';
var validateBack = document.getElementById('validateBack');
validateBack.addEventListener('click', function() {
  mainForm.style.display = '';
  validateForm.style.display = 'none';
});
var popUp = document.getElementById('popUp');
popUp.style.display = 'none';
var popUpName = document.getElementById('popUpName');
var popUpMail = document.getElementById('popUpMail');
var popUpPhone = document.getElementById('popUpPhone');
validateForm.addEventListener('mousemove', function() {
  if (!nameForm.validity.patternMismatch && nameForm.value !== '' && !mailForm.validity.typeMismatch && mailForm.value !== '') {
    secondButton.style.cssText = 'background-color: #4088e1';
  }
});
secondButton.addEventListener('click', function() {
  if (!nameForm.validity.patternMismatch && nameForm.value !== '') {
    nameOk.style.display = '';
    nameForm.style.border = '';
  } else {
    nameOk.style.display = 'none';
    nameForm.style.border = '1px solid red';
  };
  if (!mailForm.validity.typeMismatch && mailForm.value !== '') {
    mailOk.style.display = '';
    mailForm.style.border = '';
  } else {
    mailOk.style.display = 'none';
    mailForm.style.border = '1px solid red';
  };

  if (mailOk.style.display == '' && nameOk.style.display == '') {
    secondButton.style.cssText = 'background-color: #4088e1';
  }

  if (mailOk.style.display == '' && nameOk.style.display == '') {
    validateForm.style.display = 'none';
    popUpName.innerText = nameForm.value;
    popUpMail.innerText = mailForm.value;
    popUpPhone.innerText = phoneForm.value;
    popUp.style.display = '';
  }
});
var popUpClose = document.getElementById('popUpClose');
popUpClose.addEventListener('click', function() {
  popUp.style.display = 'none';
});
$('#secondButton').on('click', function() {
  if (mailOk.style.display == '' && nameOk.style.display == '') {
    Email.send({
      Host: 'smtp.yandex.ru',
      Username: 'zadanie2019@yandex.ru',
      Password: 'admin2019',
      To: popUpMail.innerText,
      From: 'zadanie2019@yandex.ru',
      Subject: '«тестовое задание, заказ забора № 8675»',
      Body: popUpName.innerText + ' , заказ № 8675 сформирован. В ближайшее время наш специалист свяжется с вами по телефону ' + popUpPhone.innerText,
    });
  }
});
