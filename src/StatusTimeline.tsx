import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IStatusData {
  label: string;
  timestamp: string;
  completed: boolean;
  icon?: React.ReactNode;
}

export interface StatusTimelineProps {
  statuses: IStatusData[];
  completedColor?: string;
  incompleteColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  verticalLineStyle?: StyleProp<ViewStyle>;
  statusCircleStyle?: StyleProp<ViewStyle>;
  statusContentStyle?: StyleProp<ViewStyle>;
  statusContentHeaderStyle?: StyleProp<ViewStyle>;
  statusLabelStyle?: StyleProp<TextStyle>;
  statusTimestampStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
}

const StatusTimeline: React.FC<StatusTimelineProps> = ({
  statuses,
  completedColor = '#8B4513',
  incompleteColor = '#E5E5E5',
  containerStyle,
  verticalLineStyle,
  statusCircleStyle,
  statusContentHeaderStyle,
  statusContentStyle,
  statusLabelStyle,
  statusTimestampStyle,
  title,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={styles.statusList}>
        {statuses.map((status, index) => (
          <View key={index} style={styles.statusItem}>
            {index < statuses.length - 1 && (
              <View
                style={[
                  styles.verticalLine,
                  verticalLineStyle,
                  {
                    backgroundColor: status.completed
                      ? completedColor
                      : incompleteColor,
                  },
                ]}
              />
            )}
            <View
              style={[
                styles.statusCircle,
                statusCircleStyle,
                {
                  backgroundColor: status.completed
                    ? completedColor
                    : incompleteColor,
                },
              ]}>
              {status.completed && (
                <Icon name="check" size={14} color="white" />
              )}
            </View>
            <View style={[styles.statusContent, statusContentStyle]}>
              <View
                style={[styles.statusContentHeader, statusContentHeaderStyle]}>
                <View>
                  <Text style={[styles.statusLabel, statusLabelStyle]}>
                    {status.label}
                  </Text>
                  <Text style={[styles.statusTimestamp, statusTimestampStyle]}>
                    {status.timestamp}
                  </Text>
                </View>
                {status.icon}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
  },
  statusList: {
    position: 'relative',
  },
  statusItem: {
    flexDirection: 'row',
    marginBottom: 32,
    position: 'relative',
  },
  verticalLine: {
    position: 'absolute',
    left: 12,
    top: 24,
    width: 1,
    height: 64,
  },
  statusCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusContent: {
    marginLeft: 16,
    flex: 1,
  },
  statusContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statusLabel: {
    fontWeight: '500',
    fontSize: 16,
  },
  statusTimestamp: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 4,
  },
});

export default StatusTimeline;
