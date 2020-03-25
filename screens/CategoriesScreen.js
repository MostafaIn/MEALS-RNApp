import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = (props) => {
    const renderGridItem = itemData =>{
        return(
            <TouchableOpacity 
            onPress={() => props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId : itemData.item.id
                }
            })}
            >
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
