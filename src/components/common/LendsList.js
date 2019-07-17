import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { LendsListItem } from './';
import componentStyles from '../../assets/styles/common/LendsList';

const LendsList = ({ lends, lendsType, noItemsText }) => {
  const renderComponent = () => {
    if (!lends || !lends.length) {
      return renderNoItems();
    }
    return (
      <ScrollView style={componentStyles.container}>
        <View style={componentStyles.items}>
          {renderItems()}
        </View>
      </ScrollView>
    );
  };
  const renderItems = () => {
    return Object.entries(lends).map(([index, lend]) => (
      <LendsListItem
        key={index}
        type={lendsType}
        lend={lend}
      />
    ));
  };
  const renderNoItems = () => {
    const noItems = noItemsText || 'No items.';
    return (
      <View style={componentStyles.container}>
        <View style={componentStyles.items}>
          <Text style={componentStyles.noItemsText}>{noItems}</Text>
        </View>
      </View>
    );
  };

  return renderComponent();
};

export { LendsList };
