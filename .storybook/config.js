import { configure } from '@kadira/storybook';
import { disable } from 'react-komposer';

disable();

function loadStories() {
  require('../imports/client/modules/core/components/.stories');
  require('../imports/client/modules/navigation/components/.stories');
  require('../imports/client/modules/form/components/.stories');
  // require as many as stories you need.
}

configure(loadStories, module);
