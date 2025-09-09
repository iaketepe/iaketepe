//const { create } = require("domain");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        formData.append('token', token); //formdata.append('cf-turnstile-response', token);
        const formBody = Object.fromEntries(formData.entries());


        const res = await fetch('/submit', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formBody)
        });

        const data = await res.json();
        console.log(data);
    })

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
