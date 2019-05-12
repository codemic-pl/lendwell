import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import Onboarding from '../components/Onboarding';
import Lends from '../components/Lends';
import { NavBar } from '../components/common/';

const RouterComponent = () => {
  return (
    <Router>
      <Stack
        key="root"
        hideNavBar
        navBar={NavBar}
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
            hideNavBar
          />
          <Scene
            key="Settings"
            component={Onboarding}
            title="Settings"
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
