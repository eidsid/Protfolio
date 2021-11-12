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
    sections.forEach((section) => {
        section.classList.remove('active');
        if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.9) {
            // get the id of section add add active class to link 
            let currentId = section.attributes.id.value;
            section.classList.add('active');
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

    let section1 = document.querySelector('#home').offsetHeight,
        scrolltop = document.querySelector('.top');
    // add stacky for nave bar and 
    if (scrollPosition > section1.offsetTop + 500) {
        scrolltop.classList.add("active");
    } else {
        scrolltop.classList.remove("active");

    }


}