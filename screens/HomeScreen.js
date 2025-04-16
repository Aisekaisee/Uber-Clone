import { View, Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="pl-2 py-5 pr-2">
        <Image
          style={styles.image}
          source={require('../assets/uber-removebg-preview.png')}
        />
      <NavOptions/>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
