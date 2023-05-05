// Get the modal
var modal_log = document.getElementById('enterOrReg');
var modal_reg = document.getElementById('regeg');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_log || event.target == modal_reg) {
        modal.style.display = "none";
    }
}