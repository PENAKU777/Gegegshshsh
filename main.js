// Получаем элементы
const circle = document.getElementById('circle');
const number = document.getElementById('number');

// Функция для запуска анимации
function animateNumber() {
    // Сбросить старые анимации
    number.classList.remove('animate');

    // Устанавливаем начальные значения
    number.style.opacity = 1;
    number.style.transform = 'translate(-50%, -50%)';

    // Запускаем анимацию числа
    setTimeout(() => {
        number.classList.add('animate');
    }, 0); // Запускаем анимацию сразу после сброса

    // Через 1.5 секунды скрыть число
    setTimeout(() => {
        number.style.opacity = 0;
    }, 1500); // Через 1.5 секунды
}

// Обработчик клика по кругу
circle.addEventListener('click', () => {
    animateNumber();
});

// Функция для изменения размера круга
function changeCircleSize(newSize) {
    circle.style.width = newSize + 'px';  // Устанавливаем новый размер
    circle.style.height = newSize + 'px'; // Устанавливаем новый размер
}
