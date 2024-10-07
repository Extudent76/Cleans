// Выбор элементов навигационного списка, элементов контента и ссылок
var li_elements = document.querySelectorAll(".Services-nav ul li"); // @desc Выбирает все элементы списка в навигации услуг
var item_elements = document.querySelectorAll(".item"); // @desc Выбирает все элементы контента
var link_elements = document.querySelectorAll(".Services-nav__item-link"); // @desc Выбирает все ссылки в навигации услуг

// Добавляем обработчики события клика для каждого элемента списка
for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function() {
        // Удаляем класс 'active' у всех элементов списка
        li_elements.forEach(function(li) {
            li.classList.remove("active"); // @desc Удаляет класс 'active' у элемента списка, делая его неактивным
        });
        // Удаляем класс 'active' у всех ссылок
        link_elements.forEach(function(bb) {
            bb.classList.remove("active"); // @desc Удаляет класс 'active' у ссылки, делая её неактивной
        });
        // Добавляем класс 'active' к элементу списка, по которому был произведен клик
        this.classList.add("active"); // @desc Добавляет класс 'active' к текущему элементу списка, делая его активным
        var li_value = this.getAttribute("data-li"); // @desc Извлекает значение атрибута 'data-li' у текущего элемента списка

        // Скрываем все элементы контента
        item_elements.forEach(function(item) {
            item.style.display = "none"; // @desc Устанавливает стиль отображения 'none' для элемента, эффективно скрывая его
        });

        // Отображаем элемент контента, соответствующий атрибуту 'data-li' кликнутого элемента списка
        if(li_value == "Кроссовки" || li_value == "Классическая" || li_value == "Премиальная" || li_value == "Сезонная" || li_value == "Дополнительно") {
            document.querySelector("." + li_value).style.display = "block"; // @desc Показывает элемент контента, соответствующий кликнутому элементу списка
        } else {
            console.log("No matching item found"); // @desc Выводит сообщение в консоль, если соответствующий элемент не найден
        }
    });
}
