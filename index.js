/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

window.userInfo = null;

AppRegistry.registerComponent(appName, () => App);
