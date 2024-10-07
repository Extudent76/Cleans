// Получаем элементы модальных окон по их идентификаторам
var modal_log = document.getElementById('enterOrReg'); // @desc Извлекает элемент модального окна для входа в систему
var modal_reg = document.getElementById('regeg');      // @desc Извлекает элемент модального окна для регистрации

// Обрабатываем клики по всему окну
window.onclick = function(event) {
    // @param {Event} event - Объект события DOM
    // Проверяем, является ли цель клика одним из элементов модальных окон
    if (event.target == modal_log) {
        modal_log.style.display = "none"; // @desc Закрывает модальное окно входа, если клик произошел по этому элементу
    } else if (event.target == modal_reg) {
        modal_reg.style.display = "none"; // @desc Закрывает модальное окно регистрации, если клик произошел по этому элементу
    }
}

