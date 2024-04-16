import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
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
  iconMid: {
    width: 43,
    height: 43,
  },
  texts: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    fontFamily: 'Montserrat_500Medium',
  },
  h1: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 32,
    color: '#EB5757',
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
    fontFamily: 'Montserrat_500Medium',
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
    width: 326,
    height: 52,
    gap: 10,
    backgroundColor: '#F7F7F7',
  },
  textButtonContinue: {
    color: '#EA0356',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
});
