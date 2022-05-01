import {Home} from './src/screens/Home'
import {Files} from    './src/screens/Files'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home: Home,
    About: Files,
  })
);

export default Routes;