import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial159345Navigator from '../features/Tutorial159345/navigator';
import NotificationList159317Navigator from '../features/NotificationList159317/navigator';
import Settings159316Navigator from '../features/Settings159316/navigator';
import Settings159308Navigator from '../features/Settings159308/navigator';
import UserProfile159306Navigator from '../features/UserProfile159306/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial159345: { screen: Tutorial159345Navigator },
NotificationList159317: { screen: NotificationList159317Navigator },
Settings159316: { screen: Settings159316Navigator },
Settings159308: { screen: Settings159308Navigator },
UserProfile159306: { screen: UserProfile159306Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
