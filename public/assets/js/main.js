document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formBody = Object.fromEntries(formData.entries());;

        const res = await fetch('/submit', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formBody)
        });

        const data = await res.json();

        showToast(data);
    })

});

  function showToast(data) {
    const container = document.getElementById('toastContainer');
    if (container.toastTimeout) clearTimeout(container.toastTimeout);

    const toast = document.createElement('div');
    toast.className = `rounded-lg shadow text-white font-bold text-center ${ data.success ? 'bg-green-800' : 'bg-red-800'}`;
    toast.innerText = data.success ? 'Email sent Successfully' : data.error || 'Something went wrong';

    container.replaceChildren(toast);
    container.classList.remove('hidden');

    // Remove after 3 seconds
    container.toastTimeout = setTimeout(() => {
        toast.remove();
        container.classList.add('hidden');
        container.toastTimeout = null;
    }, 3000);
  }


let carousel = { "slideID": "#domain_slide", "currentIndex" : 1, "totalSlides": 4, "container": document.querySelector("#two .carousel"), "inner" : document.querySelector("#two .carousel-inner")};
let carousel2 = { "slideID": "#experience_slide","currentIndex" : 1, "totalSlides": 4, "container": document.querySelector("#three .carousel")};
const arr = [carousel, carousel2];


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


// traverse totalslides 
    // create and add slide indicators to DOM
    // create addlisteners for each indicator

carousel.container.querySelector("#s1").addEventListener("click", () => {
    carousel.currentIndex = 1;
    handleSliding(carousel);
});

carousel.container.querySelector("#s2").addEventListener("click", () => {
    carousel.currentIndex = 2;
    handleSliding(carousel);
});


carousel.container.querySelector("#s3").addEventListener("click", () => {
    carousel.currentIndex = 3;
    handleSliding(carousel);
});

carousel.container.querySelector("#s4").addEventListener("click", () => {
    carousel.currentIndex = 4;
    handleSliding(carousel);
});

carousel2.container.querySelector(".carousel-inner").addEventListener('touchend', () => {
    const nearestIndex = getCurrentIndex(carousel);
    carousel2.currentIndex = nearestIndex; 
});

carousel2.container.querySelector("#s1").addEventListener("click", () => {
    carousel2.currentIndex = 1;
    handleSliding(carousel2);
});

carousel2.container.querySelector("#s2").addEventListener("click", () => {
    carousel2.currentIndex = 2;
    handleSliding(carousel2);
});


carousel2.container.querySelector("#s3").addEventListener("click", () => {
    carousel2.currentIndex = 3;
    handleSliding(carousel2);
});

carousel2.container.querySelector("#s4").addEventListener("click", () => {
    carousel2.currentIndex = 4;
    handleSliding(carousel2);
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
    const targetSlide = document.querySelector(`${carouselObj.slideID}${carouselObj.currentIndex}`);

    requestAnimationFrame(() => {
        carouselObj.container.querySelector(".carousel-inner").scrollTo({
            left: targetSlide.offsetLeft,
            behavior: 'smooth'
        });
    });
}

function createProject(projectObj) {
    const article = document.createElement("article");

    const imgAnchor = document.createElement("a");
    imgAnchor.href = projectObj.app || projectObj.repository;
    imgAnchor.className = "image";

    const img = document.createElement("img");
    img.src = projectObj.img || "assets/images/pic04.jpg";
    img.alt = "Go to " + projectObj.name;

    imgAnchor.appendChild(img);

    const cardText = document.createElement("div");
    cardText.className = "card-text";

    const mainText = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.className = "major";
    h4.textContent = projectObj.name;

    const p = document.createElement("p");
    p.textContent = projectObj.description;

    mainText.appendChild(h4);
    mainText.appendChild(p);

    const anchorDiv = document.createElement("div");
    anchorDiv.className = "flex justify-between"

    const repoAnchor = document.createElement("a");
    repoAnchor.textContent = "View Repository";
    repoAnchor.href = projectObj.repository;
    repoAnchor.alt = "Go to " + projectObj.name + " Code Repository";
    repoAnchor.className = "repo-link";

    anchorDiv.appendChild(repoAnchor);

    if(projectObj.app) {
        const appAnchor = document.createElement("a");

        appAnchor.textContent = "View App";
        appAnchor.href = projectObj.app;
        appAnchor.alt = "Go to " + projectObj.name;
        appAnchor.className = "repo-link";

        anchorDiv.appendChild(appAnchor);
    }


    cardText.appendChild(mainText);
    cardText.appendChild(anchorDiv);

    article.appendChild(imgAnchor);
    article.appendChild(cardText);

    return article;
}

const projectsList = document.getElementById("projectsList");
const projects = [
    { "name" : "Play Off Rentals 2", "img" : "", "description" : "A full stack project simulating the web store of a local business", "repository" : "https://github.com/iaketepe/play-off-rentals-2.0", "app" : "https://play-off-rentals-2-0.onrender.com"},
    { "name" : "Hangman PHP", "img" : "", "description" : "A hangman game, coded in PHP, HTML, JS and CSS, as well as SQL for the database", "repository" : "https://github.com/iaketepe/Hangman", "app" : "https://hangman-3x9r.onrender.com"},
    { "name" : "Stand Up Timer", "img" : "", "description" : "A timer that helps people stand up regularly after sitting for long periods of time", "repository" : "https://github.com/iaketepe/Stand-Up-Timer-Desktop", "app" : ""},
    { "name" : "Wine Analysis", "img" : "", "description" : "A data analysis project turned into a data app, using streamlit", "repository" : "https://github.com/iaketepe/Wine-Analysis", "app" : "https://analysing-red-wine.streamlit.app"},
];

for (let index = 0; index < projects.length; index++) {
    projectsList.appendChild(createProject(projects[index]));
}
