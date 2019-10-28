import React from 'react';
import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import createRouter from './routes';

function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  SplashScreen.hide();

  return <Routes />;
}

export default App;
