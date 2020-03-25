import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/colors';

const CategoriesScreen = (props) => {
    const renderGridItem = itemData =>{
        return(
            <TouchableOpacity onPress={() => props.navigation.navigate('CategoryMeals')}>
                <View style={styles.gridItem}>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        ) 
    };
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
};

    CategoriesScreen.navigationOptions ={
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      gridItem:{
          flex:1,
          margin:45,
          height:150
      }
})
