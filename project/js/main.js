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

const ShowProjects = async () => {
  const ProjectsData = [
    {
      img_url: "./imgs/companyprotifolio.png",
      data_set: "companyprotifolio",
      title: "business protifolio (React.js) Details",
      more_info:
        "I created this app using React.js, and Firebase for deployment",
      language: "React.js , scss",
      link1: "https://github.com/eidsid/Company-portfolio",
      link2: "https://company-portfolio-d0917.web.app/",
    },
    {
      img_url: "./imgs/amazon.png",
      data_set: "amazon",
      title: "amazon-clone (React.js) Details",
      more_info:
        "I created this app using React.js, and Firebase for authentication and database and deployment",
      language: "React.js Redux,scss,firebase",
      link1: "https://clone-27335.web.app/",
      link2: "https://github.com/eidsid/amazon-clone",
    },
    {
      img_url: "./imgs/cuturl.png",
      data_set: "cuturl",
      title: "CutURL project Details",
      more_info:
        "I created this site using node.js MongoDB mongoose I used mongoose to connect my app to the database (MongoDB), override method to make delete post in html form ,passport to manage login system,flash to post flash messages,library for random text,dotenv to get my DBlink linke from .env file , EJS template for client-Side view ,path for use my public folder that contains css file and javaScript and images",
      language: "ejs template,javaScript,scss",
      link1: "https://cuturll.herokuapp.com/",
      link2: "https://github.com/eidsid/CutURL",
    },
    {
      img_url: "./imgs/dashbord.png",
      data_set: "dashboard",
      title: "dashboard project Details",
      more_info: "I created this site using  React.js,",
      language: "ejs,css,javaScript",
      link1: "https://marketplace-dashbord.web.app/",
      link2: "https://github.com/eidsid/marketplace-dashbord",
    },
    {
      img_url: "./imgs/hotel.png",
      data_set: "hotel",
      title: "HoTel project Details",
      more_info:
        "i create this web site with Pug-js, CSS3, and some JavaScript, languages:  HTML5  CSS3  JAVASCRIPT,used  Glup-js to  Compile and convert SCSS files into a CSS file and add prefixes to fit the old browsers and reduce their size, Compile, convert Pug-js files into pretty HTML file , Reduce JS file size",
      language: "pugJs, scss, javaScript",
      link1: "https://eidsid.github.io/Hotel/dist/html",
      link2: "https://github.com/eidsid/Hotel",
    },
    {
      img_url: "./imgs/resturant.jpg",
      data_set: "resturant",
      title: "Resturant project Details",
      more_info:
        "i create this web site with Pug-js, CSS3,jquery,JavaScript , languages:  HTML5  CSS3  JAVASCRIPT,  used  Glup-js to   Compile and convert SCSS files into a CSS file and add prefixes to fit the old browsers and reduce their size, Compile, convert Pug-js files into pretty HTML file , Reduce JS file size",
      link1: "https://eidsid.github.io/Restaurant/dist/html/index.html",
      link2: "https://github.com/eidsid/Restaurant",
    },
    {
      img_url: "./imgs/protifolio.jpg",
      data_set: "Protfolio",
      title: "Protfolio project Details",
      more_info:
        "this web site also one of my best projects,i create this web site with Pug-js, scss,JavaScript , languages:  HTML5  CSS3  JAVASCRIPT,    <= i have used  Glup-js to =>,  Compile and convert SCSS files into a CSS file and add prefixes to fit the old browsers and reduce their size, Compile, convert Pug-js files into pretty HTML file , Reduce JS file size",
      link1: "#",
      link2: "https://github.com/eidsid/Protfolio",
    },
  ];

  let projects = document.querySelector("#experience .cards");
  ProjectsData.forEach((el) => {
    let card_container = document.createElement("div");
    card_container.innerHTML = project.template(el);
    projects.appendChild(card_container);
  });

  project.project_card_click(ProjectsData);
};

ShowProjects();
