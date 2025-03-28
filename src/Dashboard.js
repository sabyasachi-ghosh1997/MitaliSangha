import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');

const Dashboard = props => {
  const user = props.route.params?.user
    ? JSON.parse(props.route.params.user)
    : {};

  console.log('dashboard user', user);

  const carouselRef = useRef(null);
  const images = [
    {
      id: '1',
      url: 'https://emamieastbengal.com/wp-content/uploads/img1111241337-2.webp',
    },
    {
      id: '2',
      url: 'https://emamieastbengal.com/wp-content/uploads/img239241444-8.jpeg',
    },
    {
      id: '3',
      url: 'https://emamieastbengal.com/wp-content/uploads/IMG-20240313-WA0016.jpg',
    },
    {
      id: '4',
      url: 'https://emamieastbengal.com/wp-content/uploads/WhatsApp-Image-2024-02-27-at-15.29.11_5da8298d.jpg',
    },
  ];
  // console.log('dashboard user', props.user);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const currentIndex = carouselRef.current.getCurrentIndex();
        const nextIndex = (currentIndex + 1) % images.length;
        carouselRef.current.scrollTo({index: nextIndex, animated: true});
      }
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const scale1 = useRef(new Animated.Value(1)).current;
  const translateY1 = useRef(new Animated.Value(0)).current;

  const scale2 = useRef(new Animated.Value(1)).current;
  const translateY2 = useRef(new Animated.Value(0)).current;

  const scale3 = useRef(new Animated.Value(1)).current;
  const translateY3 = useRef(new Animated.Value(0)).current;

  const scale4 = useRef(new Animated.Value(1)).current;
  const translateY4 = useRef(new Animated.Value(0)).current;

  // Modified animateButton function with separate scale and translateY
  const animateButton = (scale, translateY) => {
    Animated.sequence([
      // Press down effect (scale)
      Animated.timing(scale, {
        toValue: 0.8, // Scale down (pressing effect)
        duration: 200,
        useNativeDriver: true,
      }),
      // Move up effect (translateY)
      Animated.timing(translateY, {
        toValue: -5, // Move up slightly
        duration: 200,
        useNativeDriver: true,
      }),
      // Scale back to normal
      Animated.timing(scale, {
        toValue: 1, // Reset scale back to 1
        duration: 200,
        useNativeDriver: true,
      }),
      // Return to original position (translateY)
      Animated.timing(translateY, {
        toValue: 0, // Return to initial position
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={{uri: item.url}} style={styles.Images} />
    </View>
  );

  return (
    // main view
    <View style={styles.MainView}>
      {/* header view */}
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image style={styles.Menulogo} source={require('../src/menu.png')} />
        </TouchableOpacity>
        <Image style={styles.Logo} source={require('../src/logo.png')} />
      </View>

      {/* body view */}
      <View style={styles.BodyView}>
        <View>
          <Text style={styles.WelcomeText}>Welcome {user.username}</Text>
        </View>

        {/* image view */}
        <View style={styles.ImageView}>
          {/* <View style={{marginTop: 60}}> */}
          <Carousel
            ref={carouselRef}
            data={images}
            renderItem={renderItem}
            width={width} // Ensure width is explicitly defined
            height={450}
            // sliderWidth={600}
            // itemWidth={600 * 0.8}
            loop
            // layout="default"
            autoplay={true}
            autoplayInterval={9000}
            scrollAnimationDuration={2000}
          />
          {/* </View> */}
        </View>

        {/* button table view */}
        <View style={styles.ButtonView}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Animated.View
              style={{
                transform: [{translateY: translateY1}, {scale: scale1}],
              }}>
              <TouchableOpacity
                onPress={() => {
                  animateButton(scale1, translateY1);
                  props.navigation.navigate('PointTable');
                }}
                style={styles.PointTable1}>
                <Image
                  style={styles.pointPic}
                  source={require('../src/pointtablelogo.png')}
                />
                <Text style={styles.buttonText1}>Point Table </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                transform: [{translateY: translateY2}, {scale: scale2}],
              }}>
              <TouchableOpacity
                onPress={() => {
                  animateButton(scale2, translateY2);
                  props.navigation.navigate('UserList');
                }}
                style={styles.PointTable2}>
                <Image
                  style={styles.userPic}
                  source={require('../src/userlogo.png')}
                />
                <Text style={styles.buttonText2}>User List </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Animated.View
              style={{
                transform: [{translateY: translateY3}, {scale: scale3}],
              }}>
              <TouchableOpacity
                onPress={() => {
                  animateButton(scale3, translateY3);
                  props.navigation.navigate('Schedule', {user: user});
                }}
                style={styles.PointTable3}>
                <Image
                  style={styles.schedulePic}
                  source={require('../src/schedulelogo.png')}
                />
                <Text style={styles.buttonText3}>Schedule </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                transform: [{translateY: translateY4}, {scale: scale4}],
              }}>
              <TouchableOpacity
                onPress={() => {
                  animateButton(scale4, translateY4);
                  props.navigation.navigate('MatchFixture');
                }}
                style={styles.PointTable4}>
                <Image
                  style={styles.fixturePic}
                  source={require('../src/fixturelogo.png')}
                />
                <Text style={styles.buttonText4}>Match Fixture </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  BodyView: {
    flex: 1,
    backgroundColor: 'white',
  },

  ImageView: {
    alignItems: 'center',
    flex: 2,
    marginTop: 30,
  },
  Images: {
    marginTop: -20,
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: 'black',
  },

  ButtonView: {
    flex: 1,
    alignItems: 'center',
    margin: 1,
  },

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
  Menulogo: {
    flex: 1,
    height: 40,
    width: 45,
    marginLeft: 350,
    marginBottom: -55,
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 70,
    marginTop: 5,
    color: 'darkblue',
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 75,
    marginTop: 2,
    color: 'darkblue',
  },
  buttonText3: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 75,
    marginTop: 5,
    color: 'darkblue',
  },
  buttonText4: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 75,
    marginTop: -30,
    color: 'darkblue',
  },
  PointTable1: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFFAF0',
    padding: 1,
    borderBottomWidth: 6,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    width: 185,
    height: 60,
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
    marginRight: 5,
    paddingTop: 8,
    shadowColor: 'black',
    elevation: 5,
    borderStartEndRadius: 15,
    borderStartStartRadius: 15,
    borderColor: '#2F4F4F',
  },
  PointTable2: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFFAF0',
    padding: 1,
    borderBottomWidth: 6,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    width: 185,
    height: 60,
    borderStartEndRadius: 15,
    borderStartStartRadius: 15,
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
    borderColor: '#2F4F4F',

    marginLeft: 5,
    paddingTop: 8,
    shadowColor: 'black',
    elevation: 5,
  },
  PointTable3: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFFAF0',
    padding: 1,
    borderBottomWidth: 6,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    width: 185,
    height: 60,
    marginRight: 10,
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
    borderStartEndRadius: 15,
    borderStartStartRadius: 15,
    borderColor: '#2F4F4F',
    marginRight: 5,
    paddingTop: 8,
    shadowColor: 'black',
    elevation: 5,
  },
  PointTable4: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFFAF0',
    padding: 1,
    borderBottomWidth: 6,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
    width: 185,
    height: 60,
    borderStartEndRadius: 15,
    borderStartStartRadius: 15,
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
    marginLeft: 5,
    paddingTop: 8,
    borderColor: '#2F4F4F',
    elevation: 5,
  },
  pointPic: {
    height: 40,
    width: 70,
    marginBottom: -40,
    marginLeft: -10,
    marginTop: 1,
  },
  schedulePic: {
    height: 40,
    width: 55,
    marginBottom: -40,
    marginLeft: 10,
    marginTop: 1,
  },
  userPic: {
    height: 65,
    width: 85,
    marginBottom: -50,
    marginLeft: -15,
    marginTop: -12,
  },
  fixturePic: {
    height: 45,
    width: 40,
    marginBottom: -20,
    marginLeft: 5,
    marginTop: 1,
  },
  WelcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: -10,
    color: 'darkblue',
  },
  slide: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  // image: {
  //   width: '100%',
  //   height: '100%',
  //   borderRadius: 10,
  // },
});

export default Dashboard;
