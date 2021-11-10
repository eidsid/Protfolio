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
        if (
            scrollPosition >= section.offsetTop -
            section.offsetHeight * 0.5 &&
            scrollPosition < section.offsetTop * 1.1
        ) {
            // get the id of section add add active class to link 
            let currentId = section.attributes.id.value;
            linkStat(currentId);
        }
    });

})


let linkStat = (id) => {
    asid.querySelectorAll('li').forEach((link) => {
        link.classList.remove('active');
    });
    let linkSelector = document.querySelector(` .sidebare ul li a[href="#${id}"]`);
    linkSelector.parentElement.classList.add("active");


}



// document.querySelector('.top').addEventListener('click', () => {
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// });

// let section1 = ""
//     // add stacky for nave bar and 
// if (scrollPosition > section1.offsetTop + 300) {

// } else {

// }