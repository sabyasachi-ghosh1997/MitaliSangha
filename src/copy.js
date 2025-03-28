// (1)----------------------------------- LOG IN PAGE ------------------------------------------------------------------------------

// const users = [
//   {
//     Email: 'abc@gmail.com',
//     Phoneno: '1111111111',
//     Name: 'Tirtho',
//     Role: 'Supporter',
//   },
//   {
//     Email: 'xyz@gmail.com',
//     Phoneno: '2222222222',
//     Name: 'Vikram Sir',
//     Role: 'Player',
//   },
//   {
//     Email: 'admin@gmail.com',
//     Phoneno: '3333333333',
//     Name: 'Suman Da',
//     Role: 'Member',
//   },
// ];

// const user = users.find(
//   u => u.Email === mail && u.Phoneno === phoneno && u.Role === role,
// );

// if (user) {
//   alert(`Welcome ${user.Name}`);
//   props.navigation.replace('Dashboard');
// } else {
//   alert('Invalid User');
// }

// console.log('User Data:', {phoneno, mail, role});
// setPhoneno('');
// setMail('');
// alert('Your Are Login');

// --------------------------------------------------------------------------------------------------------------------





 <View style={styles.Header}>
           <TouchableOpacity
             onPress={() => props.navigation.navigate('DashboardDrawer')}>
             <Image style={styles.Logo} source={require('../src/logo.png')} />
           </TouchableOpacity>
         </View>
         <Text> SCHEDULE {user.phoneno}</Text>  





          <ImageBackground
               source={{
                 uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcA9m7PceJAp6HbS5JIEvoObdR439b2Km7g&s',
               }}
               blurRadius={80}
               style={{
                 height: 350,
                 flex: 1,
                 // paddingBottom: 20,
               }}>
               <View style={styles.up}>
                 <Image source={{uri: user.selectImage}} style={styles.userImage} />
                 <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
                   {user.username}
                 </Text>
                 <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                   {user.role}
                 </Text>
               </View>
               <View
                 style={{
                   flex: 1.5,
                   paddingTop: 30,
                   backgroundColor: 'lightblue',
                   borderWidth: 2,
                   borderTopRightRadius: 55,
                   borderTopLeftRadius: -55,
                 }}>
                 <Text style={styles.ProHeder}>Profile Details :</Text>
                 <Text style={styles.text}>Name : {user.username}</Text>
                 <Text style={styles.text}>Phone Number : {user.phoneno}</Text>
                 <Text style={styles.text}>Role : {user.role}</Text>
                 <Text style={styles.text}>Email Id : {user.mail}</Text>
                 <Text style={styles.text}>Address : {user.address}</Text>
                 <Text style={styles.text}>Date Of Birth : {user.selectedDate}</Text>
               </View>
             </ImageBackground>