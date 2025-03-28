import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

const Pointable = props => {
  const tableData = [
    {id: '1', team: 'East Bengal', match: 12, point: 28},
    {id: '2', team: 'Mohun Bagan', match: 12, point: 26},
    {id: '3', team: 'Mumbai City FC', match: 12, point: 25},
    {id: '4', team: 'Mohamadan FC', match: 12, point: 21},
    {id: '5', team: 'Pune City', match: 12, point: 18},
    {id: '6', team: 'Nort-East United', match: 12, point: 18},
    {id: '7', team: 'Kerala FC', match: 12, point: 15},
    {id: '8', team: 'Goa', match: 12, point: 13},
    {id: '9', team: 'Punjab FC', match: 12, point: 12},
    {id: '10', team: 'Jamsshedpur', match: 12, point: 9},
    {id: '11', team: 'Odisha', match: 12, point: 5},
    {id: '12', team: 'Bengaluru', match: 12, point: 3},
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rankCell}>{index + 1}</Text>
        <Text style={styles.ClubCell}>{item.team}</Text>
        <Text style={styles.cell}>{item.match}</Text>
        <Text style={styles.cell}>{item.point}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.Header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DashboardDrawer')}>
          <Image style={styles.Logo} source={require('../src/logo.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Image
          source={{
            uri: 'https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/10/New-Project-2024-10-20T004919.986.webp',
          }}
          style={{height: 200, width: '100%', borderRadius: 15}}
        />
      </View>
      <View style={styles.container}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Rank</Text>
          <Text style={styles.ClubHeaderCell}>Club</Text>
          <Text style={styles.headerCell}>Match</Text>
          <Text style={styles.headerCell}>Pts</Text>
        </View>
        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  tableHeader: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#6200ee',
    borderRadius: 5,
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  ClubHeaderCell: {
    flex: 2,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingRight: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    backgroundColor: 'lightgreen',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    // backgroundColor: 'skyblue',
  },
  ClubCell: {
    flex: 2,
    textAlign: 'left',
    fontSize: 15,
    // backgroundColor: 'red',
    // paddingLeft: 100,
  },
  rankCell: {
    flex: 1,
    textAlign: 'left',
    fontSize: 15,
    marginLeft: 20,
    // backgroundColor: 'gold',
  },
});

export default Pointable;
