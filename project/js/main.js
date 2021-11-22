let asid = document.querySelector('aside'),
    asid_open = asid.querySelector('.open'),
    aside_close = asid.querySelector('.close');
let sections = document.querySelectorAll("section");

// side bar  
[asid_open, aside_close].forEach(el => {
    el.addEventListener('click', () => {
        menus_stat();
    })
})
let menus_stat = () => {
    [asid, asid_open, aside_close].forEach((el) => {
        el.classList.toggle('active');
    })
    asid.classList.toggle('mini');
}


window.addEventListener('scroll', () => {
    // get the scroll position
    let scrollPosition = document.documentElement.scrollTop;
    // make loop in sections and get the position of it and controll classs
    sections.forEach((sc) => {
        let position = sc.getBoundingClientRect();
        // checking for partial visibility
        if (position.top + 500 < window.innerHeight && position.bottom >= 0) {
            // get the id of section add add active class to link 
            let currentId = sc.attributes.id.value;
            console.log(sc.id);
            sc.classList.add('active');
            linkStat(currentId);
        }
    });
    scrolltop(scrollPosition);
})

let linkStat = (id) => {
    asid.querySelectorAll('li').forEach((link) => {
        link.classList.remove('active');
    });
    let linkSelector = document.querySelector(` .sidebare ul li a[href="#${id}"]`);
    linkSelector.parentElement.classList.add("active");

}

document.querySelector('.scrollDown').addEventListener('click', () => {
    document.documentElement.scrollTop = document.querySelector('#home').offsetHeight + 35;

})

scrolltop = (scrollPosition) => {
    let section1 = document.querySelector('#about').offsetHeight,
        scrolltop = document.querySelector('#home .top a');
    // add stacky for nave bar and 
    if (scrollPosition + 700 > section1) {
        scrolltop.classList.add("active");

    } else {
        scrolltop.classList.remove("active");

    }

}

// add projects =>
class project {
    img_url;
    data_set;
    title;
    more_info;
    language;
    usedtool;
    info1;
    info2;
    info3;
    link1;
    link2;
    constructor(img_url, data_set, title, more_info, language, usedtool, info1, info2, info3, link1, link2) {
        this.img_url = img_url;
        this.data_set = data_set;
        this.title = title;
        this.more_info = more_info;
        this.language = language;
        this.usedtool = usedtool;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.link1 = link1;
        this.link2 = link2;
    };
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
    static project_card_click() {
        setTimeout(() => {
            let cards = document.querySelectorAll('#experience .cards div .card ');
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    let data_set = card.querySelector('.card-head a').getAttribute('data-set');
                    this.project_info_data(data_set);
                    document.querySelector('.projects_info').classList.add('active');

                })
            })
        }, 1000)
    }
    static project_info_data(data) {
        let project_info;
        projects_array.forEach((value) => {
            value.data_set === data ? project_info = value : '';
        });

        let project_info_container = document.querySelector('.projects_info');
        let close = project_info_container.querySelector('.close');
        close.addEventListener('click', () => {
            project_info_container.classList.remove('active');
        })
        let img = project_info_container.querySelector('img');

        let text_content = project_info_container.querySelector('.text-content');
        let title_con = text_content.querySelector('.title');
        let moreinfo_con = text_content.querySelector('.more-info');
        let language_con = text_content.querySelector('.language');
        let usedtool_con = text_content.querySelector('.usedtool');
        let info1_con = text_content.querySelector('.info1');
        let info2_con = text_content.querySelector('.info2');
        let info3_con = text_content.querySelector('.info3');

        let links = text_content.querySelector('.links');
        let link1_con = links.querySelector('.link1');
        let link2_con = links.querySelector('.link2');

        const { img_url, data_set, title, more_info, language, usedtool, info1, info2, info3, link1, link2 } = project_info;
        img.setAttribute('src', `${img_url}`);
        title_con.innerText = title;
        moreinfo_con.innerText = more_info;
        language_con.innerText = language;
        usedtool_con.innerText = usedtool;
        info1_con.innerText = info1;
        info2_con.innerText = info2;
        info3_con.innerText = info3;
        link1_con.setAttribute('href', link1);
        link2_con.setAttribute('href', link2);

    }

};
project.project_card_click();
let projects_array = [];
let hotel_project = new project("./imgs/hotel.png", "hotel", "HoTel project Details ", "i create this web site with Pug-js, CSS3, and some JavaScript", "languages:  HTML5  CSS3  JAVASCRIPT", "   <= i have used  Glup-js to =>", " Compile and convert SCSS files into a CSS file and add prefixes to fit the old browsers and reduce their size", "Compile, convert Pug-js files into pretty HTML file ", "Reduce JS file size", 'https://eidsid.github.io/Hotel/dist/html', "https://github.com/eidsid/Hotel");

let resturant_project = new project("./imgs/resturant.jpg", "resturant", "Resturant project Details ", "i create this web site with Pug-js, CSS3,jquery,JavaScript ", "languages:  HTML5  CSS3  JAVASCRIPT", "   <= i have used  Glup-js to =>", " Compile and convert SCSS files into a CSS file and add prefixes to fit the old browsers and reduce their size", "Compile, convert Pug-js files into pretty HTML file ", "Reduce JS file size", 'https://eidsid.github.io/Restaurant/dist/html/index.html', "https://github.com/eidsid/Restaurant");

let anim_project = new project("./imgs/anime.jpg", "Anime", "Anime project Details ", "i create this web site with HTML  CSS3 , some jquery, ", "languages:  HTML5  CSS3  JAVASCRIPT", "   <= using  html css some jquery =>", "HTML to create the html page", "css to add style to the page ", "jquery to manage menu ", 'https://eidsid.github.io/Anime/index.html', "https://github.com/eidsid/Anime");

let profile = new project("./imgs/protifolio.jpg", "Protfolio", "Protfolio project Details ", "this web site also one of my best projects,i create this web site with Pug-js, scss,JavaScript ", "languages:  HTML5  CSS3  JAVASCRIPT", "   <= i have used  Glup-js to =>", " Compile and convert SCSS files into a CSS file and add prefixes to fit the old browsers and reduce their size", "Compile, convert Pug-js files into pretty HTML file ", "Reduce JS file size", '#', "https://github.com/eidsid/Protfolio");

projects_array[0] = hotel_project;
projects_array[1] = resturant_project;
projects_array[2] = anim_project;
projects_array[3] = profile;

let projects = document.querySelector('#experience .cards');
for (let i = 0; i <= projects_array.length; i++) {
    let card_container = document.createElement('div');
    card_container.innerHTML = project.template(projects_array[i]);
    projects.appendChild(card_container);
}


console.log("git  diff ");