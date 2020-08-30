import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  content: {width: '50%'},
  container: {flex: 1},
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  userImage: {height: 80, width: 80, alignSelf: 'center'},
});
export default styles;
