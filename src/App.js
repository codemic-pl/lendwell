import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import configStore from './configs/store'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    const { store, persistor } = configStore;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
