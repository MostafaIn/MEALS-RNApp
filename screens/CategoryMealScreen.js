import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryMealScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is Category Meal Screen!</Text>
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
