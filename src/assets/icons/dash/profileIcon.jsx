import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = (props) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M10.1334 9.05817C10.05 9.04984 9.95005 9.04984 9.85838 9.05817C7.87505 8.9915 6.30005 7.3665 6.30005 5.3665C6.30005 3.32484 7.95005 1.6665 10 1.6665C12.0417 1.6665 13.7 3.32484 13.7 5.3665C13.6917 7.3665 12.1167 8.9915 10.1334 9.05817Z"
      stroke="#0C0E13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.96672 12.1335C3.95006 13.4835 3.95006 15.6835 5.96672 17.0252C8.25839 18.5585 12.0167 18.5585 14.3084 17.0252C16.3251 15.6752 16.3251 13.4752 14.3084 12.1335C12.0251 10.6085 8.26672 10.6085 5.96672 12.1335Z"
      stroke="#0C0E13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileIcon;
