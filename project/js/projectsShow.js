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
    let Tools_con = container.querySelector(".tools");

    let links = project_info_container.querySelector(".links");
    let link1_con = links.querySelector(".link1");
    let link2_con = links.querySelector(".link2");

    const { img_url, title, more_info, Tools, link1, link2 } = project_info;

    img.setAttribute("src", `${img_url}`);
    title_con.innerText = title;
    moreinfo_con.innerText = more_info;
    Tools_con.innerText = Tools || "HTML CSS JavaScript";
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
      more_info: `
       Welcome to the Amazon Clone, a meticulously crafted e-commerce platform built using cutting-edge technologies. Leveraging the power of React.js for dynamic user interfaces, MongoDB with Mongoose for robust database management, and Firebase for seamless authentication,

Key Features:

React.js Frontend: Enjoy a smooth and intuitive browsing experience with a responsive user interface powered by React.js. Seamlessly navigate through product listings, categories, and shopping cart functionalities.
MongoDB with Mongoose: Benefit from a scalable and efficient database management system, ensuring seamless data storage and retrieval for products, orders, and user profiles.
Firebase Authentication: Safeguard user accounts and streamline login processes with Firebase authentication. Securely manage user authentication and authorization for enhanced security.
Stripe Payment Integration: Experience hassle-free payments with Stripe integration, allowing users to make secure transactions using credit or debit cards. Enjoy a seamless checkout process with robust payment processing capabilities.
SCSS Styling: Elevate the visual appeal of the platform with custom-designed SCSS stylesheets. Create a unique and captivating user interface with flexible and maintainable styling solutions.
If you're looking for a skilled and reliable developer to create a React website with advanced features such as authentication, styling with SCSS, and payment,
look no further. Let's discuss your project requirements and bring your vision to life! 
       
       `,
      Tools:
        " JavaScript, React, HTML5, Responsive, Design, Firebase, Cloud, Firestore, Stripe",
      link1: "https://clone-27335.web.app/",
      link2: "https://github.com/eidsid/amazon-clone",
    },
    {
      img_url: "./imgs/blog.png",
      data_set: "blog",
      title: "Company Website ",
      more_info: `
      
      Project description
I have developed a professional and modern company website using Next.js, a powerful React framework, combined with NextAuth for secure authentication, and SCSS for customizable styling. This website showcases the company's projects, providing an engaging portfolio for potential clients and partners.

Key Features:

Next.js Framework: Utilized Next.js for server-side rendering, enhancing performance and SEO optimization.
NextAuth Authentication: Integrated NextAuth for seamless and secure authentication, ensuring user privacy and data protection.
Customizable Styling with SCSS: Implemented SCSS styling to create a visually appealing and unique design that reflects the company's brand identity.
Project Showcase: Developed a dynamic project showcase section to highlight the company's portfolio, showcasing past projects and accomplishments.
Interactive Blog Section: Implemented a blog section where the company can publish articles, news, and updates, enhancing engagement with visitors and clients.
Responsive Design: Ensured that the website is fully responsive and compatible with various devices and screen sizes, providing a seamless user experience across platforms.
Why Choose Us:

Expertise: With extensive experience in web development and proficiency in Next.js, NextAuth, and SCSS, I have the skills to deliver a high-quality and professional website tailored to your company's needs.
Collaborative Approach: I prioritize communication and collaboration, ensuring that your vision is accurately translated into the final product.
Timely Delivery: I am committed to delivering the project within the specified timeframe, without compromising on quality.
If you're looking for a skilled and reliable developer to create a Next.js company website with advanced features such as authentication, styling with SCSS, and a blog section, look no further. Let's discuss your project requirements and bring your vision to life! 
      
      `,
      Tools: "Next.js, NextAuth.js, MongoDB, SCSS",
      link1: "https://github.com/eidsid/blog",
      link2: "https://blog-eidsid.vercel.app/",
    },
    {
      img_url: "./imgs/cuturl.png",
      data_set: "cuturl",
      title: "URL Shortener using Node.js and MongoDB",
      more_info: `
      🚀 Node.js-Powered SASS CutURL Project 🚀

Greetings, Upwork community! I'm thrilled to showcase my latest project—a dynamic CutURL service meticulously crafted with Node.js and enhanced with the power of SASS to provide a sleek and efficient URL shortening experience.

Key Features:
✅ Node.js for Robust Backend Functionality
✅ SASS for Stylish and Responsive Design
✅ Seamless URL Shortening with CutURL
✅ Modern and Efficient Workflow
✅ High-Performance Optimization

Why Opt for This CutURL Project?
This isn't just a URL shortening service; it's a dynamic platform designed to simplify and beautify your links. With the versatility of Node.js and the elegance of SASS, this CutURL project offers a user-friendly interface with a touch of modern design.

What Sets Me Apart?
As a Node.js enthusiast, I've harnessed its power to create a robust backend for seamless URL shortening. The addition of SASS ensures a stylish and responsive front end that aligns perfectly with the efficiency of the Node.js backend. This CutURL project not only streamlines link management but also adds a touch of sophistication to your online presence.

Ready to Elevate Your URL Shortening Experience?
Let's collaborate and customize this Node.js and SASS-powered CutURL project to perfectly align with your goals. Whether you're launching a new service or enhancing an existing one, this project is a testament to innovation and excellence in both functionality and design.
If you're looking for a skilled and reliable developer to create a node.js website with advanced features such as authentication, and styling with SCSS, look no further.
 Let's discuss your project requirements and bring your vision to life!
      `,
      Tools:
        "EJS, JavaScript, SCSS, Node.js, MongoDB  CSS Figma Node.js Mongoose",
      link1: "https://eidsid-cuturl.onrender.com/",
      link2: "https://github.com/eidsid/CutURL",
    },
    {
      img_url: "./imgs/companyprotifolio.png",
      data_set: "companyprotifolio",
      title: "Business Portfolio with React.js",
      more_info: `
      Project description
🚀 Dynamic React.js Business Website🚀

Hello, Upwork community! I'm excited to present my latest project—a dynamic business website meticulously crafted with React.js and SCSS to enhance your digital presence.

Key Features:
✅ React.js for Dynamic User Interactions
✅ Stylish SCSS for Modern and Responsive Design
✅ Efficient Workflow for Seamless Functionality
✅ High-Performance Optimization

Why Opt for This Business Website?
This isn't just a website; it's a dynamic platform designed to captivate your audience. Leveraging the power of React.js and SCSS, this business website offers a seamless user experience with engaging visuals and efficient task automation.

What Sets Me Apart?
As a forward-thinking developer, I've integrated React.js for interactive user interfaces and SCSS for clean and stylish code. This business website not only reflects your brand but also showcases a commitment to innovation and modern web development practices.

Ready to Transform Your Online Presence?
Let's collaborate and tailor this React.js and SCSS-powered business website to perfectly align with your business goals. Whether you're launching a new venture or revitalizing your online presence, this website is a testament to excellence in both design and functionality.

Excited about the possibilities? Let's connect and take your business to new heights in the digital landscape! 
      `,
      Tools: "React.js, SCSS, Firebase",
      link1: "https://github.com/eidsid/Company-portfolio",
      link2: "https://company-portfolio-d0917.web.app/",
    },
    {
      img_url: "./imgs/protifolio.jpg",
      data_set: "personal Protfolio",
      title: "Personal Portfolio using Pug.js and SCSS",
      more_info: `
Project description
🚀 Dynamic Portfolio Landing Page with Gulp.js, Pug.js, and SCSS 🚀

Hello, Upwork community! I'm thrilled to showcase my latest project—a dynamic portfolio landing page meticulously crafted with Gulp.js, Pug.js, and SCSS to represent my skills and achievements in the world of web development.

Key Features:
✅ Gulp.js for Streamlined Workflow
✅ Pug.js Templating for Clean HTML
✅ SCSS Styling for Elegant Design
✅ Modern and Responsive Layout
✅ High-Performance Optimization

Why Explore This Portfolio Landing Page?
This isn't just a landing page; it's a testament to the power of Gulp.js, Pug.js, and SCSS in creating an efficient, maintainable, and visually appealing web presence. Visitors can seamlessly navigate through my projects and experience a unique blend of dynamic content and elegant design.

What Sets Me Apart?
As a developer committed to staying on the cutting edge, I've utilized Gulp.js for task automation, Pug.js for clean and organized templating, and SCSS for a stylish and responsive layout. This portfolio landing page not only showcases my technical skills but also reflects my dedication to industry best practices.

Ready to Elevate Your Digital Presence?
Let's collaborate and discuss how this Gulp.js, Pug.js, and SCSS-powered portfolio landing page can be tailored to perfectly represent your unique skills and accomplishments.

Excited to embark on this digital journey? Let's connect and make your portfolio shine in the vast landscape of the web! 

`,
      Tools: "Pug.js, SCSS, JavaScript, Gulp.js",
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
