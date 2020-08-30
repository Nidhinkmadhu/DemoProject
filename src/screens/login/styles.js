import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  loginButton: {
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#07936C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  inputView: {
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#07936C',
    borderWidth: 1,
    color: 'black',
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInputContainer: {flexDirection: 'row'},
  inputText: {flex: 1, color: 'black'},
  loginText: {color: 'white'},
  errorText: {color: 'red'},
  drawableLeft: {width: 20, height: 20, alignSelf: 'center'},
  appLogo: {width: 100, height: 100, alignSelf: 'center'},
});
export default styles;
