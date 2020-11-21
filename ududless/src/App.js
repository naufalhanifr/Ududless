import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

function App() {
  return (
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
  );
}

export default App;
