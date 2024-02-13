class project {
  static template({ img_url, title, data_set }) {
    let content = `
        <div class="card"> 
            <div class="card-head">
                <img src="${img_url}" alt="${title}">
                <div class="layer">
                <a  data-set="${data_set}">
                <p>${title} </p></a>
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

const ShowProjects = () => {
  const ProjectsData = [
    {
      img_url: "./imgs/amazon.png",
      data_set: "amazon",
      title: "Amazon Clone using React.js",
      more_info:
        "Created a clone of Amazon using React.js and Firebase for authentication, database, and deployment.",
      language: "React.js, Redux, SCSS, Firebase",
      link1: "https://clone-27335.web.app/",
      link2: "https://github.com/eidsid/amazon-clone",
    },
    {
      img_url: "./imgs/blog.png",
      data_set: "blog",
      title: "Blog Application using Next.js",
      more_info:
        "Developed a blog application using Next.js and Firebase for deployment.",
      language: "Next.js, NextAuth.js, MongoDB, SCSS",
      link1: "https://github.com/eidsid/blog",
      link2: "https://blog-eidsid.vercel.app/",
    },
    {
      img_url: "./imgs/cuturl.png",
      data_set: "cuturl",
      title: "URL Shortener using Node.js and MongoDB",
      more_info:
        "Built a URL shortener application using Node.js, MongoDB, and Mongoose. Implemented features like user authentication, flash messages, and EJS templating.",
      language: "EJS, JavaScript, SCSS, Node.js, MongoDB",
      link1: "https://eidsid-cuturl.onrender.com/",
      link2: "https://github.com/eidsid/CutURL",
    },
    {
      img_url: "./imgs/companyprotifolio.png",
      data_set: "companyprotifolio",
      title: "Business Portfolio with React.js",
      more_info:
        "Designed and deployed a business portfolio website using React.js and Firebase.",
      language: "React.js, SCSS, Firebase",
      link1: "https://github.com/eidsid/Company-portfolio",
      link2: "https://company-portfolio-d0917.web.app/",
    },
    {
      img_url: "./imgs/protifolio.jpg",
      data_set: "personal Protfolio",
      title: "Personal Portfolio using Pug.js and SCSS",
      more_info:
        "Designed and built a personal portfolio website using Pug.js, SCSS, and JavaScript. Utilized Gulp.js for workflow optimization and minification of assets.",
      language: "Pug.js, SCSS, JavaScript, Gulp.js",
      link1: "#",
      link2: "https://github.com/eidsid/Protfolio",
    },
  ];

  let projects = document.querySelector("#experience .cards");
  ProjectsData.forEach((projectDetails) => {
    let card_container = document.createElement("div");
    card_container.innerHTML = project.template(projectDetails);
    projects.appendChild(card_container);
  });

  project.project_card_click(ProjectsData);
};

ShowProjects();
