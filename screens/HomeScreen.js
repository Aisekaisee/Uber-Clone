import { View, Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/NavSlice';

const HomeScreen = () => {
  // If you need to use UUID, call it inside the component
  const uniqueId = uuidv4();
  console.log(uniqueId);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/uber-removebg-preview.png')}
        />
        
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: styles.autocompleteContainer,
            textInput: styles.textInput,
            listView: styles.listView,
          }}
          onPress={(data, details = null) => {
            console.log('Google Places Details (Origin):', details);
            dispatch(setOrigin({
              location:details.geometry.location,
              description:data.description
            })) 
            
            dispatch(setDestination(null));
          }}
          returnKeyType={"search"}
          minLength={2}
          fetchDetails={true}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  autocompleteContainer: {
    flex: 0,
    width: '100%',
    zIndex: 1, // Ensures it appears above other elements
  },
  textInput: {
    height: 50,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  listView: {
    position: 'absolute',
    top: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    zIndex: 1000,
  },
});

export default HomeScreen;