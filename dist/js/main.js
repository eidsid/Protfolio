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

// add projects =>

class project {
  static template(temp) {
    let content = `
        <div class="card"> 
            <div class="card-head">
                <img src="${temp.img_url}" alt="${temp.title}">
                <div class="layer">
                <a  data-set="${temp.data_set}">
                <p>${temp.title} </p></a>
                </div>
            </div>
        </div>`;
    return content;
  }

  static project_card_click(projects) {
    let cards = document.querySelectorAll("#experience .cards div .card ");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        let data_set = card
          .querySelector(".card-head a")
          .getAttribute("data-set");
        const el = projects.find((value) => value.data_set === data_set);
        this.project_info_data(el);
        document.querySelector(".projects_info").classList.add("active");
      });
    });
  }

  static project_info_data(project_info) {
    let project_info_container = document.querySelector(".projects_info");
    let close = project_info_container.querySelector(".close");
    close.addEventListener("click", () => {
      project_info_container.classList.remove("active");
    });
    let img = project_info_container.querySelector("img");

    let container = project_info_container.querySelector(".text-container");
    let title_con = container.querySelector(".title");
    let moreinfo_con = container.querySelector(".more-info");
    let language_con = container.querySelector(".language");

    let links = container.querySelector(".links");
    let link1_con = links.querySelector(".link1");
    let link2_con = links.querySelector(".link2");

    const { img_url, title, more_info, language, link1, link2 } = project_info;

    img.setAttribute("src", `${img_url}`);
    title_con.innerText = title;
    moreinfo_con.innerText = more_info;
    language_con.innerText = language || "HTML CSS JavaScript";
    link1_con.setAttribute("href", link1);
    link2_con.setAttribute("href", link2);
  }
}

const api = async () => {
  let projects_array = [];

  const {
    data: { data },
  } = await axios.get("https://api.jsonbin.io/b/620162014ce71361b8d201a0/1");
  projects_array = data;
  console.log(projects_array);
  let projects = document.querySelector("#experience .cards");
  projects_array.forEach((el) => {
    let card_container = document.createElement("div");
    card_container.innerHTML = project.template(el);
    projects.appendChild(card_container);
  });

  project.project_card_click(projects_array);
};

api();
