import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Main from '~/pages/Main';
import Anime from '~/pages/Anime';
import Completed from '~/pages/Completed';
import Watching from '~/pages/Watching';
import Later from '~/pages/Later';

const animeSearch = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      title: 'My Anime List',
    },
  },
  Anime: {
    screen: Anime,
    navigationOptions: {
      title: 'Anime Page',
    },
  },
});

const watchingSearch = createStackNavigator({
  Home: {
    screen: Watching,
    navigationOptions: {
      title: 'Watching',
    },
  },
  Anime: {
    screen: Anime,
    navigationOptions: {
      title: 'Anime Page',
    },
  },
});

const laterSearch = createStackNavigator({
  Home: {
    screen: Later,
    navigationOptions: {
      title: 'Later',
    },
  },
  Anime: {
    screen: Anime,
    navigationOptions: {
      title: 'Anime Page',
    },
  },
});

const completedSearch = createStackNavigator({
  Home: {
    screen: Completed,
    navigationOptions: {
      title: 'Completed',
    },
  },
  Anime: {
    screen: Anime,
    navigationOptions: {
      title: 'Anime Page',
    },
  },
});

const Routes = createAppContainer(
  createBottomTabNavigator({
    Search: animeSearch,
    Watching: watchingSearch,
    Completed: completedSearch,
    Later: laterSearch,
  }),
);

export default Routes;
