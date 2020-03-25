import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = (props) => {
    let TouchableCmp = TouchableOpacity;

    if( Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <TouchableCmp 
            style={{flex:1}}
            onPress={props.onSelect}
        >
            <View style={{...{backgroundColor: props.color}, ... styles.container}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableCmp>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:45,
        height:150,
        borderRadius:15,
        overflow:'hidden'
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        // fontFamily:'AbrilFatface',
        fontSize:14
    }
})
