import '../imports/client/modules/core/components/style.css'
import { createApp } from 'mantra-core';
import initContext from '../imports/client/configs/context';

// modules
import coreModule from '../imports/client/modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
