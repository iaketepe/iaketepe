//const { create } = require("domain");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        //formData.append('token', token); //formdata.append('cf-turnstile-response', token);
        const formBody = Object.fromEntries(formData.entries());
        //const token = formData.get('token');
        console.log(formBody);
        //console.log(formData.get('token'));


        const res = await fetch('/submit', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formBody)
        });

        const data = await res.json();
        console.log(data);
    })

});


let carousel = { "slideID": "#domain_slide", "currentIndex" : 1, "totalSlides": 4, "container": document.querySelector("#two .carousel"), "inner" : document.querySelector("#two .carousel-inner")};
let carousel2 = { "slideID": "#experience_slide","currentIndex" : 1, "totalSlides": 4, "container": document.querySelector("#three .carousel")};
const arr = [carousel, carousel2];
//const container = document.querySelector(".carousel-inner");


function getCurrentIndex(carouselObj) {
    const container = document.querySelector(".carousel-inner");
    const slides = document.querySelectorAll(`${carouselObj.slideID}`);
    let closestIndex = 1;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
        const distance = Math.abs(slide.offsetLeft - container.scrollLeft);
        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = idx + 1;
        }
    });

    return closestIndex;
}


carousel.container.querySelector(".carousel-inner").addEventListener('touchend', () => {
    const nearestIndex = getCurrentIndex(carousel);
    carousel.currentIndex = nearestIndex; 
});

carousel.container.querySelector("#prev").addEventListener("click", () => handlePrev(0));

carousel.container.querySelector("#next").addEventListener("click", () => handleNext(0));

carousel2.container.querySelector(".carousel-inner").addEventListener('touchend', () => {
    const nearestIndex = getCurrentIndex(carousel);
    carousel.currentIndex = nearestIndex; 
});

carousel2.container.querySelector("#prev").addEventListener("click", () => handlePrev(1));

carousel2.container.querySelector("#next").addEventListener("click", () => handleNext(1));


function handleNext(val) {
    const carouselObj = arr[val] ?? arr[0];
    if (carouselObj.currentIndex < carouselObj.totalSlides) {
        carouselObj.currentIndex++; // just increment
        handleSliding(carouselObj);
    }
}

function handlePrev(val) {
    const carouselObj = arr[val] ?? arr[0];
    if (carouselObj.currentIndex > 1) {
        carouselObj.currentIndex--; // just decrement
        handleSliding(carouselObj);
    }
}

function handleSliding(carouselObj) { 
    const targetSlide = document.querySelector(`${carouselObj.slideID}${carouselObj.currentIndex}`); //"#slide" carouselObj.slideID + carouselObj.currentIndex

    requestAnimationFrame(() => {
        carouselObj.container.querySelector(".carousel-inner").scrollTo({
            left: targetSlide.offsetLeft,
            behavior: 'smooth'
        });
    });

}


    const projectNames = ["Hangman PHP","Stand Up Timer","Wine Analysis","Play Off Rentals 2"];
    const projectLinks = ["https://hangman-3x9r.onrender.com/","https://github.com/iaketepe/Stand-Up-Timer-Desktop","https://analysing-red-wine.streamlit.app/","https://github.com/iaketepe/play-off-rentals-2.0"];
    const projectDescriptions = ["A hangman game, coded in PHP, HTML, JS and CSS, as well as SQL for the database","A timer that helps people stand up regularly after sitting for long periods of time","A data analysis project turned into a data app, using streamlit","a full stack project simulating the web store of a local business."];




function createProject(projectHeader,projectLink, projectImg, projectDescription) {
    const projectsList = document.createElement("projectsList");

    const article = document.createElement("article");

    const link = document.createElement("a");
    link.href = projectLink;
    link.className = "image";

    const img = document.createElement("img");
    img.src = projectImg; //"assets/images/pic04.jpg"
    img.alt = "Go to " + projectHeader;

    link.appendChild(img);

    const h4 = document.createElement("h4");
    h4.className = "major";
    h4.textContent = projectHeader;

    const p = document.createElement("p");
    p.textContent = projectDescription; //"Sed feugiat lorem"

    article.appendChild(link);
    article.appendChild(h4);
    article.appendChild(p);

    return article;

}


for (let index = 0; index < projectNames.length; index++) {
    const article = createProject(projectNames[index],projectLinks[index],"assets/images/pic04.jpg",projectDescriptions[index]);
    projectsList.appendChild(article);
}
