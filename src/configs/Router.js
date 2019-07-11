import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import Onboarding from '../components/Onboarding';
import Lends from '../components/Lends';
import LendView from '../components/LendView';
import AddLend from '../components/AddLend';
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
        >
          <Scene
            key="lends"
            component={Lends}
            hideNavBar
            title="Pożyczki"
          />
          <Scene
            key="settings"
            component={Onboarding}
            title="Ustawienia"
          />
        </Scene>
        <Scene
          key="lend"
          path="/lend/:id/"
          component={LendView}
        />
        <Scene
          initial
          key="addLend"
          title="Dodaj pożyczkę"
          component={AddLend}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
