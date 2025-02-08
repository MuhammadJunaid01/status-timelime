import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
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
declare const StatusTimeline: React.FC<StatusTimelineProps>;
export default StatusTimeline;
