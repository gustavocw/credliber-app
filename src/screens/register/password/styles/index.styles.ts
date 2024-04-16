import { StyleSheet, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: 350,
    height: screenHeight,
    alignSelf: 'center',
    paddingTop: 50,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#0C0E13',
    paddingTop: 20,
  },
  description: {
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: '#262933',
    marginTop: 10,
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: 'black',
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#0C0E13',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: 'black',
    width: 326,
    height: 44,
    alignSelf: 'center',
  },
  helpText: {
    fontSize: 10,
    color: 'gray',
  },
  arrow: {
    marginLeft: 10,
  },
  continueButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
