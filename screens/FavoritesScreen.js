import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(!favMeals || favMeals >= 0){
        return <View style={styles.content}>
            <AntDesign name="antdesign" size={100} color="#12f" />
            <View style={{alignItems:'center'}}>
                <DefaultText>NOT FOUND</DefaultText>
                <DefaultText>start adding some!</DefaultText>
            </View>
        </View>
    }
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

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    }
})
