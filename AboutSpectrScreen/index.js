import { DrawerNavigator } from 'react-navigation'
import AboutSpectrScreen from "./AboutSpectrScreen.js"
import B1100 from "./B-1100.js"
import YF1100 from "./YF-1100.js"
import B1200 from "./B-1200.js"
import YF1200 from "./YF-1200.js"
import YF1800 from "./YF-1800.js"
import YF3000 from "./YF-3000.js"
import YF3100 from "./YF-3100.js"
import YF3200 from "./YF-3200.js"
import YF6100 from "./YF-6100.js"

const AboutSpectrRouter = DrawerNavigator({
  //Home: { screen: HomePage },
    AboutSpectr: { screen: AboutSpectrScreen },
    B1100: {
  	    screen: B1100
    },

    YF1100:{
      screen: YF1100
    },
    B1200: {
        screen: B1200
    },
    YF1200:{
      screen: YF1200
    },
    YF1800:{
      screen: YF1800
    },
    YF3000:{
      screen: YF3000
    },
    YF3100:{
      screen: YF3100
    },
    YF3200:{
      screen: YF3200
    },
    YF6100:{
      screen: YF6100
    },
    ///Profile: { screen: ProfileScreen },
});

export default AboutSpectrRouter ;