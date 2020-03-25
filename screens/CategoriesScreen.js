import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
    const renderGridItem = itemData =>{
        return <CategoryGridTile 
                    title={itemData.item.title}
                    color={itemData.item.color}
                    onSelect={() =>{
                        props.navigation.navigate({
                            routeName: 'CategoryMeals',
                            params: {
                                categoryId : itemData.item.id
                            }
                        })
                    }}
                />
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
      }
})
