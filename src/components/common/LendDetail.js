import React from 'react';
import { Text, View } from 'react-native';
import componentStyles from '../../assets/styles/common/LendDetail';

const LendDetail = ({ label, text }) => {
  return (
    <View style={[componentStyles.detail]}>
      <Text style={[componentStyles.label]}>{label || ' '}</Text>
      <Text style={[componentStyles.value]}>{text || ' '}</Text>
    </View>
  );
};

export { LendDetail };
