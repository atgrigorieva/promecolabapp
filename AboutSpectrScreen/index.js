import { DrawerNavigator } from 'react-navigation';
import AboutSpectrScreen from "./AboutSpectrScreen.js";
import B1100 from "./B-1100.js";

const AboutSpectrRouter = DrawerNavigator({
  //Home: { screen: HomePage },
  AboutSpectr: { screen: AboutSpectrScreen },
  B1100: {
  	screen: B1100
  },
    ///Profile: { screen: ProfileScreen },
});

export default AboutSpectrRouter ;