import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn14159389Navigator from '../features/SignIn14159389/navigator';
import SignUp15159388Navigator from '../features/SignUp15159388/navigator';
import UserProfile6159387Navigator from '../features/UserProfile6159387/navigator';
import UserProfile159346Navigator from '../features/UserProfile159346/navigator';
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
SignIn14159389: { screen: SignIn14159389Navigator },
SignUp15159388: { screen: SignUp15159388Navigator },
UserProfile6159387: { screen: UserProfile6159387Navigator },
UserProfile159346: { screen: UserProfile159346Navigator },
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
