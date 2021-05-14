import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 100,
    marginBottom: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 3,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 30,
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  signUpButton: {
    textAlign: 'center',
    paddingTop: 40,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
});
