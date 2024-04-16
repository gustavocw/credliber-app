import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  checkIcon: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '7%',
  },
  texts: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  },
  iconMid: {
    width: 40,
    height: 40,
  },
  h1: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 32,
    color: '#27AE60',
  },
  p: {
    position: 'relative',
    top: 5,
    width: '72%',
    height: '60%',
  },
  textAproved: {
    fontSize: 12,
    textAlign: 'center',
    color: '#0C0E13',
  },
  containerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 238,
    width: '100%',
    height: '7%',
  },
  buttonContinue: {
    alignItems: 'center',
    borderRadius: 100,
    padding: 16,
    gap: 10,
    width: 326,
    height: 52,
    backgroundColor: '#EA0356',
  },
  textButtonContinue: {
    color: '#FFFF',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
});
