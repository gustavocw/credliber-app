import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = (props) => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.66671 14.0002C11.1645 14.0002 14 11.1646 14 7.66683C14 4.16903 11.1645 1.3335 7.66671 1.3335C4.1689 1.3335 1.33337 4.16903 1.33337 7.66683C1.33337 11.1646 4.1689 14.0002 7.66671 14.0002Z"
      stroke="#13151D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.6667 14.6668L13.3334 13.3335"
      stroke="#13151D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SearchIcon;
