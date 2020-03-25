import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';

import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

import Colors from '../constants/colors'


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});
export default createAppContainer(MealsNavigator);