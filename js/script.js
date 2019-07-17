function resetForm() {
  document.getElementById("userForm").reset();
}

function showModal() {
  const modal = document.getElementById("modal-wrapper");
  const form = document.getElementById("userForm");
  form.onsubmit = modal.style.visibility = "visible";
}

function hideModal() {
  document.getElementById("modal-wrapper").style.display = "none";
}