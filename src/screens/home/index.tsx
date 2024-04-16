import { RouteProp, useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';

import { RootStackParamList } from '../../routes';

type HomeSreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const router = useRoute<HomeSreenRouteProp>();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Showing details for user {router.params.name}.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
