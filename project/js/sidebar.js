let asid = document.querySelector("aside"),
  asid_open = asid.querySelector(".open"),
  aside_close = asid.querySelector(".close");
let sections = document.querySelectorAll("section");

// side bar
[asid_open, aside_close].forEach((el) => {
  el.addEventListener("click", () => {
    menus_stat();
  });
});
let menus_stat = () => {
  [asid, asid_open, aside_close].forEach((el) => {
    el.classList.toggle("active");
  });
  asid.classList.toggle("mini");
};
