let visibleMode = false;

export function pwVisibleToggle(event) {
  const img = event.target;
  const input = img.parentElement.parentElement.firstElementChild;

  if (visibleMode) {
    img.src = "/images/btn_visibility_off.png";
    input.type = "password";
    visibleMode = false;
  } else {
    img.src = "/images/btn_visibility_on.png";
    input.type = "text";
    visibleMode = true;
  }
}

