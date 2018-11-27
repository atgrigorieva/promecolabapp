import { DrawerNavigator } from 'react-navigation';
import turningOnB1200 from "./TurningOnB1200.js"
import inspectionOfDevice from "./InspectionOfDevice.js"
import inspectionOfDeviceStep1 from "./inspectionOfDeviceStep1.js"
import inspectionOfDeviceStep2 from "./inspectionOfDeviceStep2.js"
import inspectionOfDeviceStep3 from "./inspectionOfDeviceStep3.js"
import PowerConnection from "./PowerConnection.js"
import PowerConnectionStep2 from "./PowerConnectionStep2.js"
import PowerConnectionStep3 from "./PowerConnectionStep3.js"
import PowerConnectionStep4 from "./PowerConnectionStep4.js"
import PowerConnectionStep5 from "./PowerConnectionStep5.js"
import PowerConnectionStep6 from "./PowerConnectionStep6.js"
import SystemInitialization from "./SystemInitialization.js"
import NextPage1 from "./NextPage1.js"
import Lamps from "./Lamps.js"
import Filters from "./Filters.js"
import AutomaticHolder from "./AutomaticHolder.js"
import NextPage2 from "./NextPage2.js"
import Pass from "./Pass.js"

const turningOnB1200Route = DrawerNavigator({
    turningOnB1200: {screen:turningOnB1200},
    inspectionOfDevice: {screen: inspectionOfDevice},
    inspectionOfDeviceStep1: {screen: inspectionOfDeviceStep1},
    inspectionOfDeviceStep2: {screen: inspectionOfDeviceStep2},
    inspectionOfDeviceStep3: {screen: inspectionOfDeviceStep3},
    PowerConnection: {screen: PowerConnection},
    PowerConnectionStep2: {screen: PowerConnectionStep2},
    PowerConnectionStep3: {screen: PowerConnectionStep3},
    PowerConnectionStep4: {screen: PowerConnectionStep4},
    PowerConnectionStep5: {screen: PowerConnectionStep5},
    PowerConnectionStep6: {screen: PowerConnectionStep6},
    SystemInitialization: {screen: SystemInitialization},
    NextPage1: {screen: NextPage1},
    Lamps: {screen: Lamps},
    Filters: {screen: Filters},
    AutomaticHolder: {screen: AutomaticHolder},
    NextPage2: {screen: NextPage2},
    Pass: {screen: Pass},

    ///Profile: { screen: ProfileScreen },
});

export default turningOnB1200Route;