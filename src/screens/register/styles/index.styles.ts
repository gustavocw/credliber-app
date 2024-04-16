import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    width: 350,
    height: 'auto',
    alignSelf: 'center',
    paddingTop: 40,
  },
  content: {
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
    color: 'black',
    marginVertical: 20,
    marginLeft: 12,
  },
  inputContainer: {
    marginBottom: 50,
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
    width: 350,
    height: 44,
    alignSelf: 'center',
  },
  helpText: {
    fontSize: 10,
    color: '#262933',
    fontFamily: 'Montserrat_500Medium',
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: 'black',
    textAlign: 'center',
  },
  loginButton: {
    color: '#EA0356',
    textAlign: 'center',
    textDecorationLine: 'none',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 20,
    width: 350,
    height: 52,
    padding: 16,
    gap: 10,
  },
});

export default styles;
