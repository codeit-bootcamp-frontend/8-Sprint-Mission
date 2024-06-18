const showErrorMessage = (target, errorMessageDiv) => {
  target.classList.add("error");
  errorMessageDiv.style.display = "block";
  target.setAttribute("data-valid", "false");
};

const hideErrorMessage = (target, errorMessageDiv) => {
  target.classList.remove("error");
  errorMessageDiv.style.display = "none";
  target.setAttribute("data-valid", "true");
};

const activeButton = (button) => {
  button.disabled = false;
  button.classList.add("enabled");
};
const disableButton = (button) => {
  button.disabled = true;
  button.classList.remove("enabled");
};

export { showErrorMessage, hideErrorMessage, activeButton, disableButton };
