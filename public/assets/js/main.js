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

function createProject(projectHeader,projectLink, projectImg, projectDescription, projectRepo) {
    const article = document.createElement("article");

    const link = document.createElement("a");
    link.href = projectLink;
    link.className = "image";

    const img = document.createElement("img");
    img.src = projectImg;
    img.alt = "Go to " + projectHeader;

    link.appendChild(img);

    const h4 = document.createElement("h4");
    h4.className = "major";
    h4.textContent = projectHeader;

    const textDiv = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = projectDescription;

    const a = document.createElement("a");
    a.textContent = "View Repository";
    a.href = projectRepo;
    a.alt = "Go to " + projectHeader + " Code Repository";
    a.className = "repo-link";

    textDiv.appendChild(p);
    textDiv.appendChild(a);

    article.appendChild(link);
    article.appendChild(h4);
    article.appendChild(textDiv);
    //article.appendChild(p);
    //article.appendChild(a);

    return article;
}

const projectsList = document.getElementById("projectsList");
const projectNames = ["Hangman PHP","Stand Up Timer","Wine Analysis","Play Off Rentals 2"];
const projectLinks = ["https://hangman-3x9r.onrender.com","https://github.com/iaketepe/Stand-Up-Timer-Desktop","https://analysing-red-wine.streamlit.app","https://play-off-rentals-2-0.onrender.com"];
const projectDescriptions = ["A hangman game, coded in PHP, HTML, JS and CSS, as well as SQL for the database","A timer that helps people stand up regularly after sitting for long periods of time","A data analysis project turned into a data app, using streamlit","a full stack project simulating the web store of a local business."];
const projectRepos = ["https://github.com/iaketepe/Hangman","https://github.com/iaketepe/Stand-Up-Timer-Desktop","https://github.com/iaketepe/Wine-Analysis","https://github.com/iaketepe/play-off-rentals-2.0"];


for (let index = 0; index < projectNames.length; index++) {
    const article = createProject(projectNames[index],projectLinks[index],"assets/images/pic04.jpg",projectDescriptions[index], projectRepos[index]);
    projectsList.appendChild(article);
}
