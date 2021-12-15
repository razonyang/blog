import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import {
    faCode, faDatabase, faServer,
} from '@fortawesome/free-solid-svg-icons';
import {
   faCss3, faGoogle, faHtml5, faJs, faLinux, faPhp,
} from '@fortawesome/free-brands-svg-icons';

config.searchPseudoElements = true;

library.add(
    // Solid icons
    faCode, faDatabase, faServer,

    // Brand icons
   faCss3, faGoogle, faHtml5, faJs, faLinux, faPhp,
);

dom.watch();
