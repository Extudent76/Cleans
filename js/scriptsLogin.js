function show(state)
{
    document.getElementById('LOGIN-BLOCK').style.display = state;
    document.getElementById('REGISTER-BLOCK').style.display = 'none';
    document.getElementById('gray').style.display = state;
}
function showREGCLOSE(state)
{
    document.getElementById('REGISTER-BLOCK').style.display = state;
    document.getElementById('gray').style.display = state;
}
function showBack(state)
{
    document.getElementById('REGISTER-BLOCK').style.display = state;
    document.getElementById('LOGIN-BLOCK').style.display = 'block';
}
function showREG(state)
{
    document.getElementById('REGISTER-BLOCK').style.display = 'block';
    document.getElementById('LOGIN-BLOCK').style.display = state;
}
