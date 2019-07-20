import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import DropdownAlert from 'react-native-dropdownalert';
import { AlertHelper } from './helpers/AlertHelper';
import Router from './configs/Router';
import configStore from './configs/store';

class App extends Component {
  render() {
    const { store, persistor } = configStore;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
        <DropdownAlert ref={ref => AlertHelper.setDropDown(ref)} closeInterval={6000} />
      </Provider>
    );
  }
}

export default App;
