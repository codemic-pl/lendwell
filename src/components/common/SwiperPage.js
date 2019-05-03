import React from 'react';
import { View } from 'react-native';
import swiperPageStyle from '../../assets/styles/common/SwiperPage';

const SwiperPage = ({ children }) => {
  return (
    <View style={[swiperPageStyle.slide]}>
      {children}
    </View>
  );
};

export { SwiperPage };
