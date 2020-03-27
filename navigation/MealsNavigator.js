import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React from 'react'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

import Colors from '../constants/colors'


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
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals:{
        screen:MealsNavigator,
        navigationOptions:{
          tabBarIcon: (tabInfo) =>{
              return <MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor} />
          }  
        }
    },
    Favorites:{
        screen: FavoritesScreen,
        navigationOptions:{
            tabBarIcon: (tabInfo) =>{
                return <MaterialIcons name="stars" size={25} color={tabInfo.tintColor} />
            }
        }
    }
},{
    tabBarOptions:{
        activeTintColor: '#12f'
    }
});
export default createAppContainer(MealsFavTabNavigator);