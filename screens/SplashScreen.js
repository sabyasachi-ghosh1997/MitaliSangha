import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';

export default function SplashScreen() {
  // Create animated values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(50)).current;
  const slideLeftAnim = useRef(new Animated.Value(-50)).current;
  const slideRightAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      // Slide up animation for top container
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 1200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      // Slide animations for bottom text
      Animated.timing(slideLeftAnim, {
        toValue: 0,
        duration: 1000,
        delay: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(slideRightAnim, {
        toValue: 0,
        duration: 1000,
        delay: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Images/clubLogo.png')}
        style={styles.backgroundImage}
        resizeMode="contain">
        <View style={styles.overlay}>
          {/* Animated Text above the image */}
          <Animated.View
            style={[
              styles.topContainer,
              {
                opacity: fadeAnim,
                transform: [{translateY: slideUpAnim}],
              },
            ]}>
            <Text style={styles.aboveText}>Mitali Sangha</Text>
            <Text style={styles.addressText}>Duttapukur, Chandrapur</Text>
          </Animated.View>

          {/* Animated Text on both sides at the bottom */}
          <Animated.View
            style={[
              styles.bottomContainer,
              {
                opacity: fadeAnim,
                transform: [{translateY: slideUpAnim}],
              },
            ]}>
            <Animated.Text
              style={[
                styles.welcomeText,
                {
                  opacity: fadeAnim,
                  transform: [{translateY: slideUpAnim}],
                },
              ]}>
              Welcome to Our Community
            </Animated.Text>

            <View style={styles.sideBySideContainer}>
              <Animated.Text
                style={[
                  styles.leftText,
                  {
                    opacity: fadeAnim,
                    transform: [{translateX: slideLeftAnim}],
                  },
                ]}>
                Est: 1954
              </Animated.Text>
              <Animated.Text
                style={[
                  styles.rightText,
                  {
                    opacity: fadeAnim,
                    transform: [{translateX: slideRightAnim}],
                  },
                ]}>
                Reg.no: s/59055
              </Animated.Text>
            </View>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 123, 255, 0.2)',
    paddingVertical: 50,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  aboveText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  addressText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    fontStyle: 'italic',
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 100,
    width: '100%',
  },
  sideBySideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 50,
  },
  leftText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  rightText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  activityIndicator: {
    marginTop: 10,
  },
});
