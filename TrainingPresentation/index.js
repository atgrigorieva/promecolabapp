import { DrawerNavigator } from 'react-navigation';
import presentations from "./presentations.js";
import turningOnB1200 from "./TurningOnB1200/index.js";


const presentationsRoute = DrawerNavigator({
    //Home: { screen: HomePage },
    presentationsScreen: { screen: presentations},
    turningOnB1200: {screen: turningOnB1200},

    ///Profile: { screen: ProfileScreen },
});

export default presentationsRoute;