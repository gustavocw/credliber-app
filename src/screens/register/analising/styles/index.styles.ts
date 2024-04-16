import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  h1: {
    fontSize: 32,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
  },
  title: {
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '30%',
  },
  textP: {
    fontSize: 12,
    textAlign: 'center',
    color: '#787878',
  },
  iconMid: {
    width: 51,
    height: 51,
    bottom: 20,
  },
  containerImageIcon: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '4%',
    marginBottom: -27,
  },
  buttonUpdate: {
    alignItems: 'center',
    borderRadius: 50,
    padding: 16,
    width: 153,
    height: 52,
    backgroundColor: '#EA0356',
  },
  textButtonUpdate: {
    color: '#FFFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
  buttonsScreenAprove: {
    position: 'relative',
    top: 200,
    alignSelf: 'center',
    width: 326,
    height: 52,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  buttonQuit: {
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 38,
    gap: 10,
    width: 153,
    height: 52,
    backgroundColor: '#F7F7F7',
  },
  textButtonQuit: {
    color: '#EA0356',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
