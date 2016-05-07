import publications from '../imports/server/publications';
import methods from '../imports/server/methods';
import addInitialData from '../imports/server/config/fixtures.js';

publications();
methods();
addInitialData();
