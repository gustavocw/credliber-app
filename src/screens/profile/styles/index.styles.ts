import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    minWidth: screenWidth,
  },
  header: {
    height: '13%',
    marginLeft: 20,
  },
  icon: {
    alignSelf: 'center',
  },
  containerPhoto: {},
  goBackButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 80,
    justifyContent: 'center',
  },
  profileImageContainer: {
    marginTop: 40,
    marginLeft: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIconContainer: {
    position: 'relative',
    borderRadius: 20,
    bottom: 20,
    left: 60,
  },
  editIcon: {
    fontSize: 20,
    padding: 15,
    position: 'relative',
    bottom: 14,
    left: 2,
  },
  names: {
    paddingLeft: 20,
  },
  userName: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#0C0E13',
  },
  userJoined: {
    fontSize: 10,
    fontFamily: 'Montserrat_500Medium',
    color: '#9F9F9F',
  },
  userTeam: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    color: '#434343',
  },
  buttonContainer: {
    width: '100%',
    height: 253,
    marginTop: 32,
  },
  button: {
    gap: 10,
    marginTop: 10,
    width: '100%',
    height: 52,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#9F9F9F',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#0C0E13',
    fontFamily: 'Montserrat_500Medium',
  },
  logoutButton: {
    backgroundColor: '#F7F7F7',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#EB5757',
    fontFamily: 'Montserrat_500Medium',
  },
  conditions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  conditionsText: {
    color: '#1960AB',
    fontSize: 14,
  },
});
