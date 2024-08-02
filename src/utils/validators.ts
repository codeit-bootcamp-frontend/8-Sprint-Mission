const EMAIL_REGEX = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
);
export const emailValidator = (value: string): boolean => {
  if (!value) {
    return false;
  } else if (!EMAIL_REGEX.test(value)) {
    return false;
  } else {
    return true;
  }
};

export const pwValidator = (value: string): boolean => {
  if (!value) {
    return false;
  } else if (value.length < 8) {
    return false;
  } else {
    return true;
  }
};
