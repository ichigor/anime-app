import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Anime from '~/pages/Anime';

const Routes = createAppContainer(createSwitchNavigator({ Main, Anime }));

export default Routes;
