import { injectGlobal } from 'styled-components';

import stylesCore from '@blueprintjs/core/lib/css/blueprint.css';
import stylesIcons from '@blueprintjs/icons/lib/css/blueprint-icons.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  ${stylesCore}
  ${stylesIcons}

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;