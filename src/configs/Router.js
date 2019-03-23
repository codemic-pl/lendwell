import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Onboarding from '../components/Onboarding';


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
            component={Onboarding}
            hideNavBar
            onRight={() => { Onboarding.endOnboarding(); }}
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
