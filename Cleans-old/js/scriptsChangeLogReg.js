// Запрашиваем и сохраняем элементы из DOM
var wrapper = document.querySelector('.wrapper');       // @desc Выбирает элемент-обертку (wrapper)
var loginLink = document.querySelector('.login-link');  // @desc Выбирает элемент ссылки для входа (login link)
var registerLink = document.querySelector('.register-link'); // @desc Выбирает элемент ссылки для регистрации (register link)

// Добавляем обработчик события клика на ссылку регистрации
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active'); // @desc Добавляет класс 'active' к обертке для отображения интерфейса регистрации
});

// Добавляем обработчик события клика на ссылку входа
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active'); // @desc Удаляет класс 'active' с обертки для отображения интерфейса входа
});
