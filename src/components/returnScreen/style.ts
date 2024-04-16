import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    zIndex: 999,
  },
  icon: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    color: '#0C0E13',
  },
  subTitle: {
    fontSize: 12,
    color: '#9F9F9F',
  },
});
