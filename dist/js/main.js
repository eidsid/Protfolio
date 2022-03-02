let asid = document.querySelector("aside"),
  asid_open = asid.querySelector(".open"),
  aside_close = asid.querySelector(".close"),
  sections = document.querySelectorAll("section");
[asid_open, aside_close].forEach((e) => {
  e.addEventListener("click", () => {
    menus_stat();
  });
});
let menus_stat = () => {
  [asid, asid_open, aside_close].forEach((e) => {
    e.classList.toggle("active");
  }),
    asid.classList.toggle("mini");
};
window.addEventListener("scroll", () => {
  let e = document.documentElement.scrollTop;
  sections.forEach((e) => {
    let t = e.getBoundingClientRect();
    if (t.top + 500 < window.innerHeight && t.bottom >= 0) {
      let t = e.attributes.id.value;
      e.classList.add("active"), linkStat(t);
    }
  }),
    scrolltop(e);
});
let linkStat = (e) => {
  asid.querySelectorAll("li").forEach((e) => {
    e.classList.remove("active");
  }),
    document
      .querySelector(` .sidebare ul li a[href="#${e}"]`)
      .parentElement.classList.add("active");
};
document.querySelector(".scrollDown").addEventListener("click", () => {
  document.documentElement.scrollTop =
    document.querySelector("#home").offsetHeight + 35;
}),
  (scrolltop = (e) => {
    let t = document.querySelector("#about").offsetHeight,
      c = document.querySelector("#home .top a");
    e + 700 > t ? c.classList.add("active") : c.classList.remove("active");
  });
class project {
  static template(e) {
    return `\n        <div class="card"> \n            <div class="card-head">\n                <img src="${e.img_url}" alt="${e.title}">\n                <div class="layer">\n                <a  data-set="${e.data_set}">\n                <p>${e.title} </p></a>\n                </div>\n            </div>\n        </div>`;
  }
  static project_card_click(e) {
    document.querySelectorAll("#experience .cards div .card ").forEach((t) => {
      t.addEventListener("click", (c) => {
        let i = t.querySelector(".card-head a").getAttribute("data-set");
        const o = e.find((e) => e.data_set === i);
        this.project_info_data(o),
          document.querySelector(".projects_info").classList.add("active");
      });
    });
  }
  static project_info_data(e) {
    let t = document.querySelector(".projects_info");
    t.querySelector(".close").addEventListener("click", () => {
      t.classList.remove("active");
    });
    let c = t.querySelector("img"),
      i = t.querySelector(".text-container"),
      o = i.querySelector(".title"),
      r = i.querySelector(".more-info"),
      a = i.querySelector(".language"),
      l = i.querySelector(".links"),
      s = l.querySelector(".link1"),
      n = l.querySelector(".link2");
    const {
      img_url: d,
      title: u,
      more_info: m,
      language: p,
      link1: S,
      link2: v,
    } = e;
    c.setAttribute("src", `${d}`),
      (o.innerText = u),
      (r.innerText = m),
      (a.innerText = p || "HTML CSS JavaScript"),
      s.setAttribute("href", S),
      n.setAttribute("href", v);
  }
}
const api = async () => {
  let e = [];
  const {
    data: { data: t },
  } = await axios.get("https://api.jsonbin.io/b/620162014ce71361b8d201a0/3");
  (e = t), console.log(e);
  let c = document.querySelector("#experience .cards");
  e.forEach((e) => {
    let t = document.createElement("div");
    (t.innerHTML = project.template(e)), c.appendChild(t);
  }),
    project.project_card_click(e);
};
api();
