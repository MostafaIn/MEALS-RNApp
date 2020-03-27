import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FlitersScreen = () => {
    return (
        <View>
            <Text>here is Filters meals</Text>
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
            </HeaderButtons>
        } 
    };

export default FlitersScreen

const styles = StyleSheet.create({})
