import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCompass, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCompass as faCompassR, faEnvelope as faEnvelopeR } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Add only the icons you need
library.add(faCompass, faEnvelope, faCompassR, faEnvelopeR, faGithub, faLinkedin);

// Replaces <i class="fa-..."> tags with inline SVGs automatically
//dom.watch();


// icons.js
//export const githubIcon = icon(faGithub, { classes: "scale-150 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out" }).html.join("");
//export const linkedinIcon = icon(faLinkedin, { classes: "scale-150 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out" }).html.join("");
