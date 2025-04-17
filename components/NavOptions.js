import { StyleSheet, Text, TouchableOpacity, View,FlatList,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

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
    return (
    <FlatList
    data={data}
    keyExtractor={(item) => (item.id) }
    horizontal
    renderItem={({item}) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"> 
            <View>
                <Image
                style={{width:120, height:120, resizeMode:'contain'}}
                source={{uri:item.image}}
                />
                <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                <Icon 
                className="p-3 bg-black rounded-full w-10 mt-4"
                name="arrowright" 
                color="white" 
                type="antdesign"
                size={15}
                />
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

const styles = StyleSheet.create({})

export default NavOptions

