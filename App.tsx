/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IStatusData, StatusTimeline} from './src';

function App(): React.JSX.Element {
  const sampleStatusData: IStatusData[] = [
    {
      label: 'Order Placed',
      timestamp: '23 Aug 2025, 04:25 PM',
      completed: true,
      icon: <Icon name="file-document-outline" size={24} color="#52AB62" />,
    },
    {
      label: 'In Progress',
      timestamp: '23 Aug 2025, 03:54 PM',
      completed: true,
      icon: <Icon name="package-variant-closed" size={24} color="#52AB62" />,
    },
    {
      label: 'Shipped',
      timestamp: 'Expected 02 Sep 2025',
      completed: false,
      icon: <Icon name="truck-delivery-outline" size={24} color="#52AB62" />,
    },
    {
      label: 'Delivered',
      timestamp: 'Expected 23 Aug 2025',
      completed: false,
      icon: (
        <Icon
          name="checkbox-multiple-marked-circle"
          size={24}
          color="#52AB62"
        />
      ),
    },
  ];
  return (
    <View>
      <Text>Hello</Text>
      <StatusTimeline statuses={sampleStatusData} completedColor="#52AB62" />
    </View>
  );
}

export default App;
