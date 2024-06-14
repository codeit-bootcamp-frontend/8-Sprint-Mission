export const showError = (input, errorElementId, isElementError) => {
  const errorElement = document.getElementById(errorElementId);
  errorElement.style.display = "block";
  input.style.border = "1px solid var(--error-red)";
  isElementError = true;
};
export const hideError = (input, errorElementId, isElementError) => {
  const errorElement = document.getElementById(errorElementId);
  errorElement.style.display = "none";
  input.style.border = "none";
  isElementError = false;
};
