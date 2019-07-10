import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppIcon } from './';
import componentStyles from '../../assets/styles/common/LendsListItem';
import {
  ACCENT_VERY_DARK_COLOR,
  ACTIVE_LEND_DARK_COLOR,
  LIGHT_GRAY_COLOR
} from '../../assets/styles/common/Variables';

const LendsListItem = ({ lend, type }) => {
  const lendsType = (type === 'completed' ? ACCENT_VERY_DARK_COLOR : ACTIVE_LEND_DARK_COLOR);
  const formatDate = (someDate) => {
    const date = someDate || new Date();
    return new Date(date).toLocaleDateString('pl-PL');
  };

  const getDateYMD = (someDate) => {
    const date = someDate || new Date();
    return `${new Date(date).getFullYear()}-
            ${new Date(date).getMonth() + 1}-
            ${new Date(date).getDate()}`;
  };

  const isToday = (someDate) => {
    if (!someDate) {
      return;
    }
    const today = new Date();
    const date = new Date(someDate);
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const returnIn = (deadlineDate, returnDate) => {
    if (isToday(deadlineDate)) {
      return 0;
    }
    let daysCount = ((new Date(deadlineDate) - new Date(getDateYMD(returnDate))) /
                    (1000 * 60 * 60 * 24));
    if (daysCount < 0) {
      daysCount = Math.floor(daysCount * -1) * -1;
    } else {
      daysCount = Math.floor(daysCount);
    }
    return daysCount;
  };

  const onSelectLend = () => {
    if (!lend.id) {
      return false;
    }
    Actions.lend({ id: lend.id });
  };

  const renderReturnInDays = (deadlineDate, returnDate) => {
    if (type === 'completed') {
      return (
        <Text
          style={[
            componentStyles.detailText,
            (returnIn(deadlineDate, returnDate) < 0 ? componentStyles.textNegative : null)
          ]}
        >
          {returnIn(deadlineDate, returnDate)} dni
        </Text>
      );
    }
    return (
      <Text
        style={[
          componentStyles.detailText,
          (returnIn(deadlineDate) === 0 ? componentStyles.textPositive : null),
          (returnIn(deadlineDate) < 0 ? componentStyles.textNegative : null)
        ]}
      >
        {returnIn(deadlineDate) === 0 ? 'dzisiaj' : `${returnIn(deadlineDate)} dni`}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      style={[componentStyles.container]}
      onPress={onSelectLend}
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
            <Text style={[componentStyles.detailText]}>{formatDate(lend.createdDate)}</Text>
          </View>
          <View style={[componentStyles.detail]}>
            <AppIcon
            name="Clock"
            width="16"
            height="16"
            fill={LIGHT_GRAY_COLOR}
            />
            {renderReturnInDays(lend.deadlineDate, lend.returnDate)}
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
