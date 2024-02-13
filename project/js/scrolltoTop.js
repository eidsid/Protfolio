scrolltop = (scrollPosition) => {
  let section1 = document.querySelector("#about").offsetHeight,
    scrolltop = document.querySelector("#home .top a");
  // add stacky for nave bar and
  if (scrollPosition + 700 > section1) {
    scrolltop.classList.add("active");
  } else {
    scrolltop.classList.remove("active");
  }
};
