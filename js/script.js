// function resetForm() {
//   document.getElementById("userForm").reset();
// }

// function showModal() {
//   document.getElementById("modal-wrapper").style.display = "flex";
//   e.preventDefault();
// }
function hideModal() {
  document.getElementById("modal-wrapper").style.display = "none";
}

$(document).ready(function() {
  $('#userForm').on('submit', function(e){
    document.getElementById("modal-wrapper").style.visibility = "visible";
    // e.preventDefault();
    // document.userForm.submit();
  });
});