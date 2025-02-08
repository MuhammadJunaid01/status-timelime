# StatusTimeline

A customizable React Native component to display a vertical timeline of statuses, perfect for tracking the progress of tasks, orders, or any other milestone-based process.

## Features

- Customizable status circles and lines.
- Option to provide custom icons for each status.
- Differentiates between completed and incomplete statuses with distinct colors.
- Fully configurable styles for labels, timestamps, and the overall layout.
- Lightweight and easy to integrate into any React Native project.

## Installation

Install the package using npm or yarn:

```bash
npm install status-timeline
```

or

```bash
yarn add status-timeline
```

You also need to install the peer dependency `react-native-vector-icons`:

```bash
npm install react-native-vector-icons
```

## Usage

```tsx
import React from 'react';
import {View} from 'react-native';
import StatusTimeline, {IStatusData} from 'status-timeline';

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
      <Icon name="checkbox-multiple-marked-circle" size={24} color="#52AB62" />
    ),
  },
];

const App = () => {
  return (
    <View>
      <StatusTimeline
        statuses={sampleStatusData}
        title="Order Progress"
        completedColor="#4CAF50"
        incompleteColor="#BDBDBD"
      />
    </View>
  );
};

export default App;
```

## Props

### Required Props

| Prop       | Type            | Description                                        |
| ---------- | --------------- | -------------------------------------------------- |
| `statuses` | `IStatusData[]` | Array of status objects representing the timeline. |

### Optional Props

| Prop                       | Type                   | Default     | Description                                                 |
| -------------------------- | ---------------------- | ----------- | ----------------------------------------------------------- |
| `completedColor`           | `string`               | `#8B4513`   | Color for completed statuses.                               |
| `incompleteColor`          | `string`               | `#E5E5E5`   | Color for incomplete statuses.                              |
| `containerStyle`           | `StyleProp<ViewStyle>` | `undefined` | Custom style for the container.                             |
| `verticalLineStyle`        | `StyleProp<ViewStyle>` | `undefined` | Custom style for the vertical line connecting the statuses. |
| `statusCircleStyle`        | `StyleProp<ViewStyle>` | `undefined` | Custom style for the status circle.                         |
| `statusContentStyle`       | `StyleProp<ViewStyle>` | `undefined` | Custom style for the content section of each status.        |
| `statusContentHeaderStyle` | `StyleProp<ViewStyle>` | `undefined` | Custom style for the header of the content section.         |
| `statusLabelStyle`         | `StyleProp<TextStyle>` | `undefined` | Custom style for the status label text.                     |
| `statusTimestampStyle`     | `StyleProp<TextStyle>` | `undefined` | Custom style for the status timestamp text.                 |
| `titleStyle`               | `StyleProp<TextStyle>` | `undefined` | Custom style for the timeline title.                        |
| `title`                    | `string`               | `undefined` | Title text for the timeline.                                |

### IStatusData Interface

| Field       | Type              | Required | Description                           |
| ----------- | ----------------- | -------- | ------------------------------------- |
| `label`     | `string`          | Yes      | Label for the status.                 |
| `timestamp` | `string`          | Yes      | Timestamp for the status.             |
| `completed` | `boolean`         | Yes      | Indicates if the status is completed. |
| `icon`      | `React.ReactNode` | No       | Optional icon for the status.         |

## Customization

You can customize the appearance of the timeline by overriding the default styles. For example, to change the status circle size or the text styles, pass your own styles through the respective props.

```tsx
<StatusTimeline
  statuses={statuses}
  statusCircleStyle={{width: 30, height: 30}}
  statusLabelStyle={{fontSize: 18, color: '#333'}}
  statusTimestampStyle={{fontSize: 14, color: '#888'}}
/>
```

## Screenshots

| Default View | Customized View |
| ------------ | --------------- |

| ![Default View](https://i.ibb.co.com/g24ttbp/Screenshot-1739040337.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)
