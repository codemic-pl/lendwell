import React from 'react';
import { View } from 'react-native';
import swiperPageStyle from '../../assets/styles/common/SwiperPage';

const SwiperPage = ({ children, customStyle }) => {
  return (
    <View style={[swiperPageStyle.slide, customStyle]}>
      {children}
    </View>
  );
};

export { SwiperPage };
