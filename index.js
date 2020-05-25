import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Providers from './src/ThemeProvider';

AppRegistry.registerComponent(appName, () => Providers);
