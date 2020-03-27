import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import MealItem from '../components/MealItem'

const MealList = (props) => {
    const renderMealItem = itemData =>{
        return <MealItem 
                    title={itemData.item.title} 
                    onSelectMeal={() => props.navigation.navigate({
                        routeName:'MealDetail', 
                        params:{mealId: itemData.item.id}
                        })} 
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}
                    image={itemData.item.imageUrl}
                />
    };

    return (
        <View style={styles.list}>
        <FlatList
            keyExtractor={item => item.id}
            data={props.listData}
            renderItem={renderMealItem}
            style={{width:'100%'}}
        />
    </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    list:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
