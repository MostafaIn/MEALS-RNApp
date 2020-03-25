import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find( cat => cat.id === catId)
    return (
        <View style={styles.container}>
            <Text>{selectedCategory.title}</Text>
            <Button
                title="see details"
                onPress={() => props.navigation.navigate('MealDetail')}
            />
        </View>
    )
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
