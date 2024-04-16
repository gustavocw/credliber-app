import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const EditIcon = (props) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <Rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#EA0356" />
    <Rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="white" />
    <Path
      d="M10.6316 6.71954L6.52663 11.0645C6.37163 11.2295 6.22163 11.5545 6.19163 11.7795L6.00663 13.3995C5.94163 13.9845 6.36163 14.3845 6.94163 14.2845L8.55164 14.0095C8.77664 13.9695 9.09163 13.8045 9.24663 13.6345L13.3516 9.28954C14.0616 8.53954 14.3816 7.68454 13.2766 6.63954C12.1766 5.60454 11.3416 5.96954 10.6316 6.71954Z"
      stroke="white"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M9.94653 7.44434C10.1615 8.82434 11.2815 9.87934 12.6715 10.0193"
      stroke="white"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default EditIcon;
