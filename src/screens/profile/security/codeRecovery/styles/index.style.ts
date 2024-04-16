import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    minWidth: screenWidth,
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 360,
    alignSelf: 'center',
  },
  codeInput: {
    borderBottomWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 22,
    width: 40,
  },
  header: {
    width: 360,
    alignSelf: 'center',
    height: 140,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  TitleBox: {
    width: 360,
    alignSelf: 'center',
  },
  description: {
    color: '#9F9F9F',
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    marginBottom: 20,
    textAlign: 'center',
  },
});
