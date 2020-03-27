import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MEALS } from '../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.container}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}

    MealDetailsScreen.navigationOptions = (navigationData) =>{
        const mealId = navigationData.navigation.getParam('mealId');
        const selectedMeal = MEALS.find(meal => meal.id === mealId);
        return{
            headerTitle: selectedMeal.title,
            headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="star"
                        onPress={() => console.log('Marked as Favorite!')}
                    />
                </HeaderButtons>
        }

    };

export default MealDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
