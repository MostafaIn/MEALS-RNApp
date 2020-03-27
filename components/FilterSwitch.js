import React from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native'

import Colors from '../constants/colors';

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                    value={props.state} 
                    onValueChange={props.onChange} 
                    trackColor={{true: Colors.primary}}
                    thumbColor={Platform.OS === 'android' ? Colors.primary : ''}    
                />
            </View>
    )
}

export default FilterSwitch

const styles = StyleSheet.create({
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'70%',
        marginVertical:10
    },
})
