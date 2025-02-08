"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var StatusTimeline = function (_a) {
    var statuses = _a.statuses, _b = _a.completedColor, completedColor = _b === void 0 ? '#8B4513' : _b, _c = _a.incompleteColor, incompleteColor = _c === void 0 ? '#E5E5E5' : _c, containerStyle = _a.containerStyle, verticalLineStyle = _a.verticalLineStyle, statusCircleStyle = _a.statusCircleStyle, statusContentHeaderStyle = _a.statusContentHeaderStyle, statusContentStyle = _a.statusContentStyle, statusLabelStyle = _a.statusLabelStyle, statusTimestampStyle = _a.statusTimestampStyle, title = _a.title, titleStyle = _a.titleStyle;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, containerStyle] },
        react_1.default.createElement(react_native_1.Text, { style: [styles.title, titleStyle] }, title),
        react_1.default.createElement(react_native_1.View, { style: styles.statusList }, statuses.map(function (status, index) { return (react_1.default.createElement(react_native_1.View, { key: index, style: styles.statusItem },
            index < statuses.length - 1 && (react_1.default.createElement(react_native_1.View, { style: [
                    styles.verticalLine,
                    verticalLineStyle,
                    {
                        backgroundColor: status.completed
                            ? completedColor
                            : incompleteColor,
                    },
                ] })),
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.statusCircle,
                    statusCircleStyle,
                    {
                        backgroundColor: status.completed
                            ? completedColor
                            : incompleteColor,
                    },
                ] }, status.completed && (react_1.default.createElement(MaterialCommunityIcons_1.default, { name: "check", size: 14, color: "white" }))),
            react_1.default.createElement(react_native_1.View, { style: [styles.statusContent, statusContentStyle] },
                react_1.default.createElement(react_native_1.View, { style: [styles.statusContentHeader, statusContentHeaderStyle] },
                    react_1.default.createElement(react_native_1.View, null,
                        react_1.default.createElement(react_native_1.Text, { style: [styles.statusLabel, statusLabelStyle] }, status.label),
                        react_1.default.createElement(react_native_1.Text, { style: [styles.statusTimestamp, statusTimestampStyle] }, status.timestamp)),
                    status.icon)))); }))));
};
var styles = react_native_1.StyleSheet.create({
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
exports.default = StatusTimeline;
