import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

import { MEALS } from '../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';


const ListItem = props =>{
    return <View style={styles.listItem}>
             <Text>{props.children}</Text>
           </View>
};


const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map( ingredient =>(
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                ))}
            <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map( step =>(
                    <ListItem key={step}>{step}</ListItem>
                ))}
        </ScrollView>
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
    image:{
        width:'100%',
        height:200
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    title:{
        fontFamily:'Lobster',
        fontSize:22,
        textAlign:'center'
    },
    listItem:{
        padding:10,
        borderColor:'#ccc',
        borderWidth:1,
        marginVertical:10,
        marginHorizontal:20
    }
})
