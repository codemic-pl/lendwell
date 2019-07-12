import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import Onboarding from '../components/Onboarding';
import Lends from '../components/Lends';
import LendView from '../components/LendView';
import AddLend from '../components/AddLend';
import EditLend from '../components/EditLend';
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
          initial
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
          title="Podgląd pożyczki"
          path="/lend/:lendId/"
          component={LendView}
        />
        <Scene
          key="editLend"
          title="Edytuj pożyczkę"
          path="/lend/:lendId/edit/"
          component={EditLend}
        />
        <Scene
          key="addLend"
          title="Dodaj pożyczkę"
          component={AddLend}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
