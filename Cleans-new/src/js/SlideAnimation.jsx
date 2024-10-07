// Сбор элементов для функциональности карусели
const productContainers = [...document.querySelectorAll('.review-box-cards')]; // @desc Преобразует NodeList контейнеров отзывов в массив
const nxtBtn = [...document.querySelectorAll('.btn-Arrow-Slider-Right')]; // @desc Преобразует NodeList кнопок "Вперед" (правые кнопки) в массив
const preBtn = [...document.querySelectorAll('.btn-Arrow-Slider-Left')]; // @desc Преобразует NodeList кнопок "Назад" (левые кнопки) в массив

// Применяем функциональность к каждому контейнеру продукта
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect(); // @desc Получает размеры контейнера
    let containerWidth = containerDimensions.width; // @desc Извлекает ширину из размеров контейнера

    // Добавляем обработчик событий для кнопки следующего слайда
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; // @desc Прокручивает контейнер вправо на ширину контейнера
    });

    // Добавляем обработчик событий для кнопки предыдущего слайда
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; // @desc Прокручивает контейнер влево на ширину контейнера
    });
});
