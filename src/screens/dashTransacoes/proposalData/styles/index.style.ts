import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: screenHeight,
  },
  containerBack: {
    position: 'relative',
    width: 370,
    alignSelf: 'center',
    height: 100,
    top: 20,
  },
  content2: {
    position: 'relative',
    width: 370,
    alignSelf: 'center',
    height: 150,
    top: 50,
  },
  textSimple: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    color: '#0C0E13',
  },
  textBold: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 32,
    color: '#0C0E13',
  },
  listDetails: {
    width: 370,
    height: 400,
    alignSelf: 'center',
    borderTopColor: '#E5E5E5',
    borderTopWidth: 0.5,
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textListSimple: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    textAlign: 'left',
    color: '#9F9F9F',
  },
  textListBold: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    textAlign: 'left',
    color: '#0C0E13',
  },
  buttonEdit: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    width: 370,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  continueButton: {
    backgroundColor: '#EA0356',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    width: 326,
    height: 52,
    padding: 16,
    gap: 10,
  },
  continueButtonText: {
    color: 'white',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  arrow: {
    marginLeft: 10,
  },
  continueButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
