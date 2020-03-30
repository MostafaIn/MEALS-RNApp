import React,{ useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native'

import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/meals'

import Colors from '../constants/colors'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import FilterSwitch from '../components/FilterSwitch'

const FlitersScreen = (props) => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch();

    const saveFilters = useCallback(() =>{
        const appliedFilters={
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilters))
    },[isGlutenFree, isLactoseFree, isVegan, isVegetarian]);  

    useEffect(()=>{
        navigation.setParams({ save: saveFilters })
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                label="Gluten-Free" 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} 
            />
            <FilterSwitch 
                label="Lactose-Free" 
                state={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)} 
            />
            <FilterSwitch 
                label="Vegan" 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)} 
            />
            <FilterSwitch 
                label="Vegetarian" 
                state={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)} 
            />
        </View>
    )
};
    FlitersScreen.navigationOptions= navData =>{
        return{
            headerTitle:'Filters Meals',
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="menu" 
                    iconName="menufold" 
                    onPress={() => navData.navigation.toggleDrawer()}  />
            </HeaderButtons>,
            headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="save" 
                iconName="save" 
                onPress={navData.navigation.getParam('save')}  />
        </HeaderButtons>,
        } 
    };

export default FlitersScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:22,
        fontFamily:'AbrilFatface',
        margin:20,
        textAlign:'center'
    }
})
