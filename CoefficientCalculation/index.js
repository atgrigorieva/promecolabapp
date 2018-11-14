import { DrawerNavigator } from 'react-navigation';
import CoefficientCalculation from "./CoefficientCalculation.js";


const CoefficientCalculationRoute = DrawerNavigator({
  //Home: { screen: HomePage },
  CoefficientCalculationScreen: { screen: CoefficientCalculation},
  
    ///Profile: { screen: ProfileScreen },
});

export default CoefficientCalculationRoute;