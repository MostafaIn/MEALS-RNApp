import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is Meal Details Screen!</Text>
        </View>
    )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
