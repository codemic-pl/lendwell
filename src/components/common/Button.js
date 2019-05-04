import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import buttonStyles from '../../assets/styles/common/Button';

const Button = ({ onPress, children, buttonStyle, textStyle, text }) => {
  const renderChildren = () => {
    if (text) {
      return (
        <Text style={[buttonStyles.text, textStyle]}>
        {text}
        </Text>
      );
    }
    return (
      <View>{children}</View>
    );
  };
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyles.button, buttonStyle]}>
      {renderChildren()}
    </TouchableOpacity>
  );
};

export { Button };
