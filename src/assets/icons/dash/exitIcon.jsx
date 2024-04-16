import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExitIcon = (props) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M12 4L4 12"
      stroke="#1D1D1D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 4L12 12"
      stroke="#1D1D1D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ExitIcon;
