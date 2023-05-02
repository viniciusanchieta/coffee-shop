/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from './src/presentation/common/themes/theme';
// import imageCoffee from './src/presentation/common/imgs/coffee.png'

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.imgMain}
          source={require('./src/presentation/common/imgs/coffee.png')}
        />
      </View>
      <View>
        <Text style={styles.textMain}>
        Coffee so good, your taste buds will love it.
        </Text>
        <Text style={styles.descriptionMain}>
        The best grain, the finest roast, the powerful flavor.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonMain}>
          <Text style={styles.textButtonMain}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    width: '100%',
    height: '100%',
  },
  imgMain: {
    width: '100%',
    marginTop: -200,
  },
  textMain: { 
    color: theme.colors.white,
    textAlign: 'center',
    fontSize: 34,
    paddingHorizontal: 36,
    fontFamily: theme.fonts.semiBold,
  },
  descriptionMain: {
    color: theme.colors.gray[100],
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    marginTop: 15,
  },
  buttonMain: {
    backgroundColor: theme.colors.brown[100],
    marginHorizontal: 30,
    marginTop: 40,
    height: 62,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonMain: {
    color: theme.colors.white,
    fontFamily: theme.fonts.semiBold,
    fontSize: 16,
  },
});

export default App;
