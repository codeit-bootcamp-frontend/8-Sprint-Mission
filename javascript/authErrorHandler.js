export const showError = (input, errorElementId) => {
  const errorElement = document.getElementById(errorElementId);
  errorElement.style.display = "block";
  input.style.border = "1px solid var(--error-red)";
};
export const hideError = (input, errorElementId) => {
  const errorElement = document.getElementById(errorElementId);
  errorElement.style.display = "none";
  input.style.border = "none";
};
