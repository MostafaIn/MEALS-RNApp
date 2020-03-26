import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealScreen = (props) => {
    const renderMealItem = itemData =>{
        return <MealItem 
                    title={itemData.item.title} 
                    onSelectMeal={() => console.log('meal')} 
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}
                    image={itemData.item.imageUrl}
                />
    };

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
        </View>
    )
}

    CategoryMealScreen.navigationOptions = navigationData =>{
        const catId = navigationData.navigation.getParam('categoryId');
        const selectedCategory = CATEGORIES.find( cat => cat.id === catId)

        return{
            headerTitle: selectedCategory.title,
        }
    }

export default CategoryMealScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
