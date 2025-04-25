import { StyleSheet, Text, TouchableOpacity, View,FlatList,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/NavSlice';

const data=[
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"     
    },
    {
        id:"456",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatScreen"     
    }
]

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle="px-3"
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              disabled={!origin}
              className={`p-3 pb-5 pl-4 bg-gray-200 m-2 w-40 rounded-lg ${!origin ? 'opacity-30' : ''}`}
            >
              <View className="items-center">
                <Image
                  className="w-32 h-32"
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
                <Text className="mt-2 text-lg font-semibold text-center">{item.title}</Text>
                <View className="bg-black rounded-full w-8 h-8 items-center justify-center mt-4">
                  <Icon 
                    name="arrowright" 
                    color="white" 
                    size={15}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      );    
}

const styles = StyleSheet.create({})

export default NavOptions

