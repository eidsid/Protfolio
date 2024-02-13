window.addEventListener("scroll", () => {
  // get the scroll position
  let scrollPosition = document.documentElement.scrollTop;
  // make loop in sections and get the position of it and controll classs
  sections.forEach((sc) => {
    let position = sc.getBoundingClientRect();
    // checking for partial visibility
    if (position.top + 500 < window.innerHeight && position.bottom >= 0) {
      // get the id of section add add active class to link
      let currentId = sc.attributes.id.value;
      sc.classList.add("active");
      linkStat(currentId);
    }
  });
  scrolltop(scrollPosition);
});

let linkStat = (id) => {
  asid.querySelectorAll("li").forEach((link) => {
    link.classList.remove("active");
  });
  let linkSelector = document.querySelector(
    ` .sidebare ul li a[href="#${id}"]`
  );
  linkSelector.parentElement.classList.add("active");
};

document.querySelector(".scrollDown").addEventListener("click", () => {
  document.documentElement.scrollTop =
    document.querySelector("#home").offsetHeight + 35;
});
