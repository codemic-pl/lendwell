import React from 'react';
import { View } from 'react-native';
import { AppIcon } from '../../components/common/';
import {
  ACCENT_COLOR,
  ACCENT_COLOR_RGB_VALUES
} from '../../assets/styles/common/Variables';
// import componentStyles from '../../assets/styles/common/TabBar';

const TabIcon = ({ title, focused }) => {
  let iconName;
  switch (title) {
    case 'Pożyczki':
      iconName = 'LendsList';
      break;
    case 'Ustawienia':
      iconName = 'Settings';
      break;
    default:
      break;
  }

  if (!iconName) {
    return (<View />);
  }

  return (
    <AppIcon
      name={iconName}
      width="32"
      height="32"
      fill={(focused ? ACCENT_COLOR : `rgba(${ACCENT_COLOR_RGB_VALUES}, 0.33)`)}
    />
  );
};

export { TabIcon };
