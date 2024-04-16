import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  content: {
    alignItems: 'center',
  },
  header: {
    zIndex: 9999,
    marginLeft: 10,
    left: 15,
    top: 60,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    color: 'black',
  },
  swiperContainer: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    overflow: 'hidden',
  },
  slide: {
    flex: 1,
    width: '101%',
    height: '101%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    margin: -5,
  },
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slideText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
  },
  inputGroup: {
    alignSelf: 'center',
    width: 326,
    flex: 1,
    backgroundColor: 'red',
    gap: 20,
    zIndex: 9999,
  },
  input: {
    alignSelf: 'center',
    width: 326,
    height: 39,
    borderWidth: 0.5,
    borderColor: '#9F9F9F',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    marginBottom: 5,
  },
  contentInput: {
    flex: 1,
    marginTop: 30,
  },
  accessButton: {
    backgroundColor: '#EA0356',
    width: 326,
    height: 52,
    padding: 16,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    top: 50,
  },
  accessButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  icon: {
    marginLeft: 10,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 10,
    fontFamily: 'Montserrat_500Medium',
  },
  welcomeBackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 326,
  },
  welcomeBackText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    textAlign: 'left',
  },
  switchAccountText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    textAlign: 'left',
    color: '#EA0356',
  },
  containerName: {
    width: 326,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
  },
  switchAccountContainer: {},
  userNameContainer: {},
  userNameText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 29,
    textAlign: 'left',
    color: '#0C0E13',
    paddingVertical: 20,
  },
});

export default styles;
