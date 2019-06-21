import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppIcon } from './';
import componentStyles from '../../assets/styles/common/LendsListItem';
import {
  ACCENT_VERY_DARK_COLOR,
  ACTIVE_LEND_DARK_COLOR,
  LIGHT_GRAY_COLOR
} from '../../assets/styles/common/Variables';

const LendsListItem = ({ lend, type }) => {
  const lendsType = (type === 'completed' ? ACCENT_VERY_DARK_COLOR : ACTIVE_LEND_DARK_COLOR);
  const formatDate = (date) => new Date(date).toLocaleDateString('pl-PL');
  const returnIn = (lendDate, returnDate) =>
    Math.round((new Date(returnDate) - new Date(lendDate)) / (1000 * 60 * 60 * 24));

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
            <AppIcon
              name="Calendar"
              width="16"
              height="16"
              fill={LIGHT_GRAY_COLOR}
            />
            <Text style={[componentStyles.detailText]}>{formatDate(lend.lendDate)}</Text>
          </View>
          <View style={[componentStyles.detail]}>
            <AppIcon
            name="Clock"
            width="16"
            height="16"
            fill={LIGHT_GRAY_COLOR}
            />
            <Text style={[componentStyles.detailText]}>
              {returnIn(lend.lendDate, lend.returnDate)} Dni
            </Text>
          </View>
          <View
            style={[
              componentStyles.detail,
              componentStyles.detailPersonName
            ]}
          >
            <AppIcon
              name="Person"
              width="16"
              height="16"
              fill={LIGHT_GRAY_COLOR}
            />
            <Text style={[componentStyles.detailText]} numberOfLines={1}>{lend.person}</Text>
          </View>
        </View>
        <View style={[componentStyles.lendNameHolder]}>
          <Text style={[componentStyles.lendName]} numberOfLines={1}>{lend.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { LendsListItem };
