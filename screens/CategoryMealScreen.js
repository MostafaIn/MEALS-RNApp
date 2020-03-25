import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoryMealScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is Category Meal Screen!</Text>
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
