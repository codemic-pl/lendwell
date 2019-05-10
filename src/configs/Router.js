import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Onboarding from '../components/Onboarding';
import Lends from '../components/Lends';
import { NavBar } from '../components/common/';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="root"
        hideNavBar
        headerLayoutPreset="center"
      >
        <Scene
          key="tutorial"
        >
          <Scene
            key="onboarding"
            hideNavBar
            component={Onboarding}
            onRight={() => { Onboarding.endOnboarding(); }}
          />
        </Scene>
        <Scene
          key="home"
          tabs
          initial
        >
          <Scene
            key="Lends"
            component={Lends}
            navBar={NavBar}
            paddingBottom={32} // padding for tabs
            title="Twoje pożyczki"
          />
          <Scene
            key="Settings"
            component={Onboarding}
            hideNavBar
            title="Settings"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
