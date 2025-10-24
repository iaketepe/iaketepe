import { library, dom } from "@fortawesome/fontawesome-svg-core";
//import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Add only the icons you need
library.add(faGithub, faLinkedin);

// Replaces <i class="fa-..."> tags with inline SVGs automatically
dom.watch();
