import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList listData={favMeals} navigation={props.navigation} />
};

    FavoritesScreen.navigationOptions= navData =>{
        return{
            headerTitle:'Your Favorites',
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="menu" 
                    iconName="menufold" 
                    onPress={() => navData.navigation.toggleDrawer()}  />
            </HeaderButtons>
        } 
    };


export default FavoritesScreen

const styles = StyleSheet.create({})
