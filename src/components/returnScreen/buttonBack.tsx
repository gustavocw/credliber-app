import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style';

type ButtomBackProps = {
  title?: string;
  subTitle?: string;
};

export const ButtonBack: React.FC<ButtomBackProps> = ({ title, subTitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon style={styles.icon} name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : undefined}
      </View>
    </View>
  );
};
