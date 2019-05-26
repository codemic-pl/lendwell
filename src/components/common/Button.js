import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import componentStyles from '../../assets/styles/common/Button';

const Button = ({ onPress, children, buttonStyle, textStyle, text }) => {
  const renderChildren = () => {
    if (text) {
      return (
        <Text style={[componentStyles.text, textStyle]}>
        {text}
        </Text>
      );
    }
    return (
      <View>{children}</View>
    );
  };
  return (
    <TouchableOpacity onPress={onPress} style={[componentStyles.button, buttonStyle]}>
      {renderChildren()}
    </TouchableOpacity>
  );
};

export { Button };
