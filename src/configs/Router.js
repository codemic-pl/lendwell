import React from 'react';
import { Actions, Scene, Stack, Router } from 'react-native-router-flux';
import Blank from '../components/Blank';
import Onboarding from '../components/Onboarding';
import Lends from '../components/Lends';
import LendView from '../components/LendView';
import AddLend from '../components/AddLend';
import EditLend from '../components/EditLend';
import { TabBar, TabIcon, NavBar } from '../components/common/';
import TabBarStyles from '../assets/styles/common/TabBar';
import {
  ACCENT_COLOR,
  ACCENT_COLOR_RGB_VALUES,
  ACCENT_LIGHT_COLOR
} from '../assets/styles/common/Variables';

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
          tabBarComponent={TabBar}
          tabBarStyle={TabBarStyles.tabBar}
          tabStyle={TabBarStyles.tab}
          addLendButtonStyle={TabBarStyles.addLendButton}
          labelStyle={TabBarStyles.label}
          activeTintColor={ACCENT_COLOR}
          inactiveTintColor={`rgba(${ACCENT_COLOR_RGB_VALUES}, 0.33)`}
          tabBarPosition="bottom"
          activeBackgroundColor={ACCENT_LIGHT_COLOR}
          inactiveBackgroundColor={ACCENT_LIGHT_COLOR}
          tabBarOnPress={({ navigation, defaultHandler }) => {
            const { key } = navigation.state;
            if (key === 'tabBarAddLend') {
              Actions.addLend();
              return;
            }
            if (!navigation.focused) {
              defaultHandler();
            }
          }}
        >
          <Scene
            key="lends"
            component={Lends}
            icon={TabIcon}
            hideNavBar
            title="Pożyczki"
          />
          <Scene
            key="tabBarAddLend"
            component={Blank}
            icon={TabIcon}
          />
          <Scene
            key="settings"
            component={Onboarding}
            icon={TabIcon}
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
