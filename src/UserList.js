import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserList = props => {
  const [users, setUsers] = useState([]);

  const allUsers = async () => {
    try {
      const allData = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(allData);
      const allUserData = result.map(req => JSON.parse(req[1]));
      setUsers(allUserData);
      console.log('User Details:', allUserData);
    } catch (e) {
      console.error('Faield to load,', e);
    }
  };

  const deleteAllUsers = async () => {
    try {
      await AsyncStorage.clear(); // Clears all data in AsyncStorage
      setUsers([]); // Clear the local state
      alert('Success', 'All users have been deleted.');
    } catch (e) {
      console.error('Failed to delete users:', e);
      alert('Error', 'Failed to delete users. Please try again.');
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{margin: 10, paddingBottom: 10, borderWidth: 2}}>
        <Text style={{fontSize: 15}}> Email: {item.mail}</Text>
        <Text style={{fontSize: 15}}> Name: {item.username}</Text>
        <Text style={{fontSize: 15}}> Phone NO: {item.phoneno}</Text>
        <Text style={{fontSize: 15}}> Role: {item.role}</Text>
        <Text style={{fontSize: 15}}> Pic: {item.selectImage}</Text>
        <Text style={{fontSize: 15}}> Address: {item.address}</Text>
        <Text style={{fontSize: 15}}> Date Of Birth: {item.selectedDate}</Text>
        <Text style={{fontSize: 15}}> Gender: {item.gender}</Text>
        gender
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <View style={styles.Header}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('DashboardDrawer')}>
            <Image style={styles.Logo} source={require('../src/logo.png')} />
          </TouchableOpacity>
        </View>
        <Text> USER LIST</Text>
      </View>
      <View>
        <Button title="Show Users" onPress={allUsers} />
        <Button title="Delete All Users" onPress={deleteAllUsers} color="red" />
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    width: 410,
    backgroundColor: '#ee1c1c',
    height: 60,
    marginLeft: 3,
    marginRight: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  Logo: {
    height: 53,
    width: 53,
    marginLeft: 15,
    marginTop: 3,
    marginBottom: 4,
  },
});

export default UserList;
