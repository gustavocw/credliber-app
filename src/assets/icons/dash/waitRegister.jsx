import React from 'react';
import Svg, { Path } from 'react-native-svg';

const WaitRegister = (props) => {
  return (
    <Svg
      width="52"
      height="51"
      viewBox="0 0 52 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M43 23.375C43 33.9362 34.4362 42.5 23.875 42.5C13.3138 42.5 4.75 33.9362 4.75 23.375C4.75 12.8138 13.3138 4.25 23.875 4.25"
        stroke="#0C0E13"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M40.7261 43.9658C41.8524 47.3658 44.4236 47.7058 46.3999 44.7308C48.2061 42.0108 47.0161 39.7796 43.7436 39.7796C41.3211 39.7583 39.9611 41.6496 40.7261 43.9658Z"
        stroke="#0C0E13"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.25 10.625H43"
        stroke="#0C0E13"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.25 17H36.625"
        stroke="#0C0E13"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default WaitRegister;
