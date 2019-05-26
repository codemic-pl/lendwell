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
      <ScrollView style={componentStyles.itemsHolder}>
        {renderItems()}
      </ScrollView>
    );
  };
  const renderItems = () => {
    return Object.entries(lends).map(([index, lend]) => {
      return (
        <LendsListItem
          key={index}
          type={lendsType}
          lend={lend}
        />
      );
    });
  };
  const renderNoItems = () => {
    const noItems = noItemsText || 'No items.';
    return (
      <View style={componentStyles.noItemsHolder}>
        <Text style={componentStyles.noItemsText}>{noItems}</Text>
      </View>
    );
  };

  return renderComponent();
};

export { LendsList };
