import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 26,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FFFFFF',
    top: 76,
    left: 32,
    width: 322,
    height: 96,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    width: 326,
    height: 52,
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 38,
    marginBottom: 30,
    width: 159,
    height: 52,
    gap: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
