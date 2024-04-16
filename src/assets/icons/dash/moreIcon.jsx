import React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const MoreIcon = (props) => (
  <Svg width="52" height="52" viewBox="0 0 52 52" fill="none" {...props}>
    <G>
      <Rect x="12" y="4" width="28" height="28" rx="14" fill="white" />
      <Path
        d="M22 18H30"
        stroke="#EA0356"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26 22V14"
        stroke="#EA0356"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default MoreIcon;
