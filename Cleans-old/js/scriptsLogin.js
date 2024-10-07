// Переключает видимость блока входа и связанных с ним элементов
function show(state)
{
    document.getElementById('LOGIN-BLOCK').style.display = state; // @desc Устанавливает состояние отображения для блока входа
    document.getElementById('REGISTER-BLOCK').style.display = 'none'; // @desc Скрывает блок регистрации
    document.getElementById('gray').style.display = state; // @desc Устанавливает состояние отображения фонового оверлея
}

// Переключает видимость блока регистрации и фонового оверлея
function showREGCLOSE(state)
{
    document.getElementById('REGISTER-BLOCK').style.display = state; // @desc Устанавливает состояние отображения блока регистрации
    document.getElementById('gray').style.display = state; // @desc Устанавливает состояние отображения фонового оверлея
}

// Переключение обратно на вид входа из видимости регистрации
function showBack(state)
{
    document.getElementById('REGISTER-BLOCK').style.display = state; // @desc Устанавливает состояние отображения блока регистрации
    document.getElementById('LOGIN-BLOCK').style.display = 'block'; // @desc Показывает блок входа
}

// Показывает блок регистрации и управляет видимостью блока входа
function showREG(state)
{
    document.getElementById('REGISTER-BLOCK').style.display = 'block'; // @desc Показывает блок регистрации
    document.getElementById('LOGIN-BLOCK').style.display = state; // @desc Устанавливает состояние отображения блока входа
}
