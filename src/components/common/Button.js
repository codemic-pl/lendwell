import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../../assets/styles/common/Button';

const Button = ({ onPress, children, buttonStyle, textStyle }) => {
  const { button, text } = buttonStyles;

  return (
    <TouchableOpacity onPress={onPress} style={[button, buttonStyle]}>
      <Text style={[text, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
