import { AppRegistry } from "react-native";
import setup from "./js/setup";
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

AppRegistry.registerComponent("F82017", setup);
