import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import React from 'react';

const MatchFixture = props => {
  const fixture = [
    {
      id: '1',
      team1: 'East Bengal',
      team2: 'Pune City',
      date: '15-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '2',
      team1: 'Mohun Bagan',
      team2: 'Bengaluru',
      date: '16-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '3',
      team1: 'Mumbai City FC',
      team2: 'Odisha',
      date: '17-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '4',
      team1: 'Mohamadan FC',
      team2: 'Punjab FC',
      date: '18-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '5',
      team1: 'Pune City',
      team2: 'Goa',
      date: '19-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '6',
      team1: 'Nort-East United',
      team2: 'East Bengal',
      date: '20-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '7',
      team1: 'Kerala FC',
      team2: 'Mohun Bagan',
      date: '21-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '8',
      team1: 'Goa',
      team2: 'Mumbai City FC',
      date: '22-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '9',
      team1: 'Punjab FC',
      team2: 'Bengaluru',
      date: '23-02-2025',
      time: '07:30 Pm',
    },
    {
      id: '10',
      team1: 'Jamsshedpur',
      team2: 'Odisha',
      date: '24-02-2025',
      time: '07:30 Pm',
    },
  ];

  const renderItems = ({item}) => {
    return (
      <View style={styles.fixtureItem}>
        <Text style={styles.team}>
          {item.team1} vs {item.team2}
        </Text>
        <View style={styles.dtView}>
          <Text style={styles.dateTxt}>Date: {item.date}</Text>
          <Text style={styles.timeTxt}> Time: {item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000080'}}>
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
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#000080',
        }}>
        <Image
          source={{
            uri: 'https://images.news18.com/ibnlive/uploads/2024/10/screenshot-2024-10-16-155734-2024-10-96f214aa91f8c072806de0507c34d290.png?impolicy=website&width=0&height=0',
          }}
          style={{height: 200, width: '100%'}}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={fixture}
          renderItem={renderItems}
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
    backgroundColor: '#000080',
    padding: 15,
  },
  fixtureItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#6495ED',
    borderRadius: 15,

    marginBottom: 30,
    backgroundColor: '#8A2BE2',
    width: '100%',
    height: 120,
    justifyContent: 'space-around',
    shadowColor: '#008B8B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 3,
  },
  team: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  dtView: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  dateTxt: {
    fontSize: 15,
    color: 'white',
  },
  timeTxt: {
    fontSize: 15,
    paddingLeft: 100,
    color: 'white',
  },
});

export default MatchFixture;
