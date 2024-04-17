import { StyleSheet, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    paddingTop: 30,
  },
  containerHeader: {
    position: 'relative',
    width: 350,
    alignSelf: 'center',
    height: 40,
    paddingTop: 4,
    paddingBottom: 20,
  },
  containerHeaderProgresso: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: 90,
    height: 30,
    gap: 3,
  },
  titleContainer: {
    position: 'relative',
    width: '100%',
    height: 100,
  },
  form: {
    position: 'relative',
    paddingTop: 90,
    width: 350,
    height: '95%',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    // marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: 'black',
  },
  label2: {
    marginBottom: 5,
    marginTop: 20,
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: 'black',
  },
  containerLabelInput: {
    width: '97%',
    height: 15,
    // backgroundColor:'black'
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#0C0E13',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: 'black',
    width: '97%',
    height: 44,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  halfInputContainer: {
    width: '47%',
    display: 'flex',
    alignSelf: 'center',
  },
  halfInput: {
    marginBottom: 15,
    fontSize: 16,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#9F9F9F',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    color: 'black',
  },
  buttonNext: {
    marginBottom: 40,
    paddingBottom: 20,
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
