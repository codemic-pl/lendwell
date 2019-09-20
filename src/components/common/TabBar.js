import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { AppIcon } from './';
import { ACCENT_COLOR } from '../../assets/styles/common/Variables';

class TabBar extends React.Component {
  renderButtons() {
    const state = { ...this.props };
    const navigationState = state.navigation.state;
    return state.navigation.state.routes.map((route, index) => {
      const isFocused = navigationState.index === index;
      if (route.key === 'tabBarAddLend') {
        return (
          <TouchableOpacity
            key={route.key}
            style={[
              state.addLendButtonStyle
            ]}
            onPress={() => {
              state.onTabPress({ route });
            }}
          >
            <AppIcon
              name="Plus"
              width="24"
              height="24"
              fill={ACCENT_COLOR}
            />
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity
          key={route.key}
          style={[
            state.tabStyle,
            {
              flex: 1,
            }
          ]}
          onPress={() => {
            state.onTabPress({ route });
          }}
        >
          {state.renderIcon({ route, focused: isFocused })}
          <Text
            style={[
              state.labelStyle,
              {
                color: (isFocused ? state.activeTintColor : state.inactiveTintColor)
              }]
            }
          >
            {state.getLabelText({ route })}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const state = { ...this.props };
    return (
      <View
        style={[
          state.style
        ]}
      >
        <View
          style={[
            state.tabBarBackgroundStyle
          ]}
        />
        <SafeAreaView
          style={{
            flexDirection: 'row',
          }}
        >
          {this.renderButtons()}
        </SafeAreaView>
      </View>
    );
  }
}

export { TabBar };
