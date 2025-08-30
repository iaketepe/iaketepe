
document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById("lazy-loading");
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
    AMT.classList.remove("hidden");
});
