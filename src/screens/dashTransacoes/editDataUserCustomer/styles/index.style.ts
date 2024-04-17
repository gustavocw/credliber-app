import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    minWidth: screenWidth,
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
  header: {
    width: 360,
    alignSelf: 'center',
    height: 140,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  headerTitle: {
    left: 80,
    width: '70%',
    height: 80,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
  },
  headerSubText: {
    fontSize: 12,
    color: '#9F9F9F',
  },
  key: {
    width: 360,
    alignSelf: 'center',
    flex: 1,
  },
  label: {
    marginBottom: 5,
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: '#0C0E13',
  },
  inputArea: {
    borderWidth: 0.5,
    borderColor: '#0C0E13',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: 'black',
    width: '100%',
    height: 44,
    alignSelf: 'center',
  },
  containerButton: {
    gap: 1,
  },
});
