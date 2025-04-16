import { StyleSheet, Text, TouchableOpacity, View,FlatList,Image } from 'react-native'
import React from 'react'

const data=[
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"Map Screen"     
    },
    {
        id:"456",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"Eat Screen"     
    }
]

const NavOptions = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => (item.id) }
    horizontal
    renderItem={({item}) => (
        <TouchableOpacity> 
            <View>
                <Image
                style={{width:120, height:120, resizeMode:'contain'}}
                source={{uri:item.image}}
                />
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

const styles = StyleSheet.create({})

export default NavOptions

