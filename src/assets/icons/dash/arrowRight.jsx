import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightArrow = (props) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M5.96667 2.71979L10.3133 7.06645C10.8267 7.57979 10.8267 8.41979 10.3133 8.93312L5.96667 13.2798"
      stroke="#EA0356"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default RightArrow;
