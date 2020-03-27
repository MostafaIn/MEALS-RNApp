import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import React from 'react'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

import Colors from '../constants/colors'

const defaultStackOptions ={
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator({
    Categories:{
        screen: CategoriesScreen 
    },
    CategoryMeals:{
        screen: CategoryMealScreen
    },
    MealDetail:{
        screen: MealDetailsScreen
    }
},{
    defaultNavigationOptions: defaultStackOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions: defaultStackOptions
});

const tabScreenConfig = {
    Meals:{
        screen:MealsNavigator,
        navigationOptions:{
          tabBarIcon: (tabInfo) =>{
              return <MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor} />
          },
          tabBarColor: Colors.secondary  
        },
    },
    Favorites:{
        screen: FavNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) =>{
                return <MaterialIcons name="stars" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary
        },
    }
}

const MealsFavTabNavigator = Platform.OS === 'android'
    ?
    createMaterialBottomTabNavigator(tabScreenConfig,{
        activeColor: '#12f',
        shifting: true
    })
    :
    createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor: '#12f'
    }
});
export default createAppContainer(MealsFavTabNavigator);