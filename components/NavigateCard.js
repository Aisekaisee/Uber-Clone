import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/NavSlice';
import { useNavigation } from '@react-navigation/native';
import RideOptionsCard from './RideOptionsCard';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center text-xl py-5">Good Morning Vipul!</Text>
      <View className="flex-shrink">
        <View>
            <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            minLength={2}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            onPress={(data,details = null) => {
                dispatch(setDestination({
                    location:details.geometry.location,
                    description:data.description
                }))

                navigation.navigate("RideOptionsCard");
            }}
            debounce={400}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {  // "container" is the correct property name, not "InputContainer"
    flex: 0,
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textInput: {  // "textInput" is the correct property name, not "TextInput"
    backgroundColor: "white",
    color: "black",
    fontSize: 18,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  // You may also need these styles:
  listView: {
    backgroundColor: 'white',
  },
  row: {
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  description: {
    fontSize: 15,
  },
})