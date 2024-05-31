const LOCATION = {
  HOME: "/",
  LOGIN: "/login",
  SEE_MORE: "/seemore",
};

document.addEventListener("click", (event) => {
  const id = event.target.id;
  const location = LOCATION[id];
  if (location) {
    window.location.href = location;
  }
});
