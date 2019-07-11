import React from 'react';
import { Text, View } from 'react-native';
import componentStyles from '../../assets/styles/common/LendDetail';

const LendDetail = ({
  label,
  text,
  containerStyle,
  labelStyle,
  textStyle,
  labelColor,
  textColor
}) => {
  return (
    <View
      style={[
        componentStyles.detail,
        containerStyle
      ]}
    >
      <Text
        style={[
          componentStyles.label,
          labelStyle,
          (labelColor ? { color: labelColor } : null)
        ]}
      >
        {label || ' '}
      </Text>
      <Text
        style={[
          componentStyles.value,
          textStyle,
          (textColor ? { color: textColor } : null)
        ]}
      >
        {text || ' '}
      </Text>
    </View>
  );
};

export { LendDetail };
