//const { create } = require("domain");

document.addEventListener('DOMContentLoaded', () => {

    /*const container = document.getElementById("lazy-loading");
    const skeleton = document.getElementById("skeleton");
    const AMT = document.getElementById("AMT");



    const AboutMeText = ["I'm a systems-based thinker with experience across information technology, data science, and enterprise architecture. Whether I'm streamlining workflows, writing documentation, or designing software and data/information systems to support future objectives, I adapt to different roles and challenges to keep things running smoothly.",
        "Currently, I'm focused on deepening my understanding of how software systems communicate and handle data—working with backend services, APIs, and data pipelines—to build effective, connected solutions.",
        "Outside of work, I enjoy reading, discovering new music, and diving into stories—whether they come from books, people, or data."];

    AboutMeText.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        AMT.appendChild(p);
      });


    skeleton.remove();
    AMT.classList.remove("hidden");*/

});


    const projectNames = ["Hangman PHP","Stand Up Timer","Wine Analysis","Perviewwaves"];
    const projectLinks = ["https://hangman-3x9r.onrender.com/","https://github.com/iaketepe/Stand-Up-Timer/tree/master","https://analysing-red-wine.streamlit.app/","https://perviewwaves.netlify.app/"];
    const projectDescriptions = ["A hangman game, coded in PHP, HTML, JS and CSS, as well as SQL for the database","A timer that helps people stand up regularly after sitting for long periods of time","A data analysis project turned into a data app, using streamlit","A UI prototype designed to model the website of a Psychology Clinic"];



function createProject(projectHeader,projectLink, projectImg, projectDescription) {
    const projectsList = document.createElement("projectsList");

    const article = document.createElement("article");

    const link = document.createElement("a");
    link.href = projectLink;
    link.className = "image";

    const img = document.createElement("img");
    img.src = projectImg; //"images/pic04.jpg"
    img.alt = "";

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
    const article = createProject(projectNames[index],projectLinks[index],"images/pic04.jpg",projectDescriptions[index]);
    projectsList.appendChild(article);
}
