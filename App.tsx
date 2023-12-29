import { StatusBar } from 'react-native';

import { Colors } from './src/Configs';
import RouterContainer from './src/routes';


export default function App() {
  return (
    <>
      <RouterContainer />
      <StatusBar translucent={false} barStyle={'light-content'} backgroundColor={Colors.theme} />
    </>
  );
}

