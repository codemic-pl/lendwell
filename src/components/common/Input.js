import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import componentStyles from '../../assets/styles/common/Input';
import { GRAY_COLOR } from '../../assets/styles/common/Variables';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  disabled,
  isRow,
  keyboardType,
  hide,
  onDisabledClick,
  onBlur,
  onFocus,
  onEndEditing,
  autoCapitalize,
  numberOfLines,
  labelStyle,
  inputStyle,
  containerStyle,
  inputContainerStyle
}) => {
  if (hide) {
    return null;
  }

  const renderLabel = () => {
    if (label) {
      return <Text style={[componentStyles.label, labelStyle]}>{label}</Text>;
    }
    return null;
  };

  const renderFormControl = () => {
    if (disabled && onDisabledClick) {
      return (
        <View
          style={[
            componentStyles.inputContainer,
            inputContainerStyle
          ]}
        >
          <TouchableOpacity
            onPress={onDisabledClick}
          >
            {renderInput()}
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View
        style={[
          componentStyles.inputContainer,
          inputContainerStyle
        ]}
      >
        {renderInput()}
      </View>
    );
  };

  const renderInput = () => {
    if (disabled) {
      return (
        <Text
          style={[
            componentStyles.input,
            componentStyles.disabled,
            inputStyle,
            {
              minHeight: (numberOfLines && numberOfLines > 1 ? numberOfLines * 20 : 0)
            }
          ]}
          multiline={(numberOfLines && numberOfLines > 1)}
          numberOfLines={numberOfLines || 1}
        >
          {value}
        </Text>
      );
    }

    if (keyboardType) {
      return (<TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[
          componentStyles.input,
          inputStyle,
          {
            minHeight: (numberOfLines && numberOfLines > 1 ? numberOfLines * 20 : 0)
          }
        ]}
        placeholderTextColor={GRAY_COLOR}
        multiline={(numberOfLines && numberOfLines > 1)}
        numberOfLines={numberOfLines || 1}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        onEndEditing={onEndEditing}
        autoCapitalize={autoCapitalize}
      />);
    }
    return (<TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      style={[
        componentStyles.input,
        inputStyle,
        {
          minHeight: (numberOfLines && numberOfLines > 1 ? numberOfLines * 20 : 0)
        }
      ]}
      placeholderTextColor={GRAY_COLOR}
      multiline={(numberOfLines && numberOfLines > 1)}
      numberOfLines={numberOfLines || 1}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      onEndEditing={onEndEditing}
      autoCapitalize={autoCapitalize}
    />);
  };

  return (
    <View
      style={[
        componentStyles.container,
        (isRow ? componentStyles.containerInline : null),
        (label ? componentStyles.containerWithLabel : null),
        containerStyle
      ]}
    >
      {renderLabel()}
      {renderFormControl()}
    </View>
  );
};


export { Input };
