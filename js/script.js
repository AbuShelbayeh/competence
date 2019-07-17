function resetForm() {
  document.getElementById("userForm").reset();
}

function hideModal() {
  document.getElementById("modal-wrapper").style.display = "none";
}

$(document).ready(function() {
  $('#userForm').on('submit', function(e){
    document.getElementById("modal-wrapper").style.visibility = "visible";
  });
});