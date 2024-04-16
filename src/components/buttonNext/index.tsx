import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import style from './style/index.style';

type Props = {
  navigation: StackNavigationProp<any>;
  navigateTo: string;
  data?: object;
};

const ContinueButton: React.FC<Props> = ({ navigation, navigateTo, data }) => {
  return (
    <TouchableOpacity
      style={style.buttonNext}
      onPress={() => navigation.navigate(navigateTo, data)}>
      <Icon name="rightcircle" size={50} color="#EA0356" />
    </TouchableOpacity>
  );
};

export default ContinueButton;
