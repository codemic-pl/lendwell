import React from 'react';
import { View } from 'react-native';
import componentStyles from '../../assets/styles/common/SwiperPage';

const SwiperPage = ({ children, customStyle }) => {
  return (
    <View style={[componentStyles.slide, customStyle]}>
      {children}
    </View>
  );
};

export { SwiperPage };
