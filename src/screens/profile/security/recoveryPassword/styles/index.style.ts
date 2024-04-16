import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    minWidth: screenWidth,
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
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
    color: 'black',
    marginBottom: 20,
    marginLeft: 12,
  },
  description: {
    color: '#9F9F9F',
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    marginBottom: 20,
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
});
