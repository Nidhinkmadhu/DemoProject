/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Provider} from 'react-redux';
import React from 'react';

import MainNavigator from './src/navigator/mainNavigator';
import react from 'react';
import store from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
