import { StyleSheet, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    alignSelf: 'center',
    paddingTop: 40,
    height: screenHeight,
  },
  containerHeader: {
    position: 'relative',
    height: 160,
    top: 20,
  },
  titleContainer: {
    position: 'relative',
    width: '100%',
    height: 100,
  },
  titleTextContainer: {
    position: 'relative',
    width: 280,
    height: 80,
    left: 77,
  },
  textTitle: {
    fontSize: 17,
    fontFamily: 'Montserrat_600SemiBold',
  },
  form: {
    position: 'relative',
    flex: 1,
    width: '100%',
    display: 'flex',
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
    borderRadius: 13,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: 'black',
    width: 350,
    alignSelf: 'center',
  },
  containerInput: {
    width: '95%',
    height: 80,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    bottom: 100,
  },
});
