import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppIcon } from './';
import componentStyles from '../../assets/styles/common/LendsListItem';
import {
  ACCENT_VERY_DARK_COLOR,
  ACTIVE_LEND_DARK_COLOR
} from '../../assets/styles/common/Variables';

const LendsListItem = ({ lend, type }) => {
  const lendsType = (type === 'completed' ? ACCENT_VERY_DARK_COLOR : ACTIVE_LEND_DARK_COLOR);

  return (
    <TouchableOpacity
      style={[componentStyles.container]}
    >
      <View
        style={[
          componentStyles.logo,
          (type === 'completed' ? '' : componentStyles.logoLendCompleted)
        ]}
      >
        <AppIcon
          name="Logo"
          width="24"
          height="20"
          fill={lendsType}
        />
      </View>
      <View style={[componentStyles.content]}>
        <View style={[componentStyles.details]}>
          <View style={[componentStyles.detail]}>
            <Text style={[componentStyles.detailName]}>Data</Text>
          </View>
          <View style={[componentStyles.detail]}>
            <Text style={[componentStyles.detailName]}>{lend.person}</Text>
          </View>
          <View style={[componentStyles.detail]}>
            <Text style={[componentStyles.detailName]}>Dni</Text>
          </View>
        </View>
        <View style={[componentStyles.lendNameHolder]}>
          <Text style={[componentStyles.lendName]}>{lend.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { LendsListItem };
