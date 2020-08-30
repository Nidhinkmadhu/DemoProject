import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const renderItem = (item) => (
  <>
    <View style={styles.cardItem}>
      <Image
        style={styles.userImage}
        source={require('../../assets/avatar.png')}
      />
      <View style={styles.container}>
        <Item type={'Id'} value={item.id} />
        <Item type={'Name'} value={item.name} />
        <Item type={'Email'} value={item.email} />
        <Item type={'Phone No'} value={item.phoneNo} />
        <Item type={'Gender'} value={item.gender} />
        <Item type={'Age'} value={item.age} />
      </View>
      <View />
    </View>
  </>
);

function Item({type, value}) {
  return (
    <View style={styles.itemStyle}>
      <Text style={styles.content}>{type}</Text>
      <Text style={styles.content}>{value}</Text>
    </View>
  );
}

function DetailsScreen() {
  const state = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <FlatList
        data={state.userData.employeeList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
}

export default DetailsScreen;
