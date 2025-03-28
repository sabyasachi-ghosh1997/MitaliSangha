import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Schedule = props => {
  const user = props.route.params?.user || {};
  return (
    <View style={{flex: 1, backgroundColor: 'lightpink'}}>
      <View style={styles.Header}>
        <Text style={styles.ProText}>Profile Details :</Text>
        <View style={styles.up}>
          <Image source={{uri: user.selectImage}} style={styles.userImage} />
        </View>
        <View style={styles.proBox}>
          <View style={styles.DetailsBox}>
            <Text style={styles.boxText}>
              Name : <Text style={styles.boxText1}> {user.username} </Text>
            </Text>
            <Text style={styles.boxText}>
              Role : <Text style={styles.boxText1}> {user.role} </Text>
            </Text>
            <Text style={styles.boxText}>
              Mobile Number :{' '}
              <Text style={styles.boxText1}> {user.phoneno}</Text>
            </Text>
            <Text style={styles.boxText}>
              Date of Birth :{' '}
              <Text style={styles.boxText1}>{user.selectedDate}</Text>
            </Text>
            <Text style={styles.boxText}>
              Email I'D :<Text style={styles.boxText1}> {user.mail} </Text>
            </Text>
            <Text style={styles.boxText}>
              Address : <Text style={styles.boxText1}>{user.address} </Text>{' '}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.Box}></View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.BackBtn}> Back to Dashboard </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  up: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
  },
  proBox: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 35,
    height: 400,
    marginTop: 120,
    borderBlockColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 15,
  },
  DetailsBox: {
    flex: 1,
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    paddingTop: 30,
    marginBottom: 5,
    color: '#8B008B',
    fontWeight: 'bold',
    // borderBottomWidth: 0.5,
  },

  Header: {
    flex: 1,
    backgroundColor: '#5F9EA0',
    borderBottomEndRadius: 80,
    borderBottomStartRadius: 80,
  },
  ProText: {
    fontSize: 30,
    paddingLeft: 120,
    paddingTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  boxText1: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    paddingTop: 30,
    marginBottom: 5,
    color: 'black',

    // borderBottomWidth: 0.5,
  },
  BackBtn: {
    paddingLeft: 100,
    paddingBottom: 30,
    fontSize: 25,
  },

  Box: {
    position: 'absolute',
    top: '50%',
    left: '25%', // Centering horizontally
    width: '50%',
    height: '25%', // 50% inside top, 50% outside
    backgroundColor: 'green',
    transform: [{translateY: -'12.5%'}],
  },

  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 4,
  },
  Logo: {
    height: 53,
    width: 53,
    marginLeft: 15,
    marginTop: 3,
    marginBottom: 4,
  },
  text: {
    fontSize: 22,
    padding: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    backgroundColor: 'gold',
  },
});

export default Schedule;
