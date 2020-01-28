import 'react-native-gesture-handler';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SongDetail from '../../features/playlists/screens/SongDetails';
import PlaylistDetail from '../../features/playlists/screens/PlaylistsDetails';
import Playlists from '../../features/playlists/screens/Playlists';

const App = createStackNavigator(
  {
    Playlists: {
      screen: Playlists,
      navigationOptions: {
        header: null,
      },
    },
    PlaylistDetail: {
      screen: PlaylistDetail,
      navigationOptions: {
        header: null,
      },
    },
    SongDetail: {
      screen: SongDetail,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);
const Navigation = createSwitchNavigator(
  {
    App,
  },
  {
    initialRouteName: 'App',
  },
);
const AppContainer = createAppContainer(Navigation);

export default AppContainer;
