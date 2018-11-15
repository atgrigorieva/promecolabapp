import { DrawerNavigator } from 'react-navigation';
import graduation from "./Graduation.js";


const CoefficientCalculationRoute = DrawerNavigator({
  //Home: { screen: HomePage },
  graduationScreen: { screen: graduation},
  
    ///Profile: { screen: ProfileScreen },
});

export default CoefficientCalculationRoute;