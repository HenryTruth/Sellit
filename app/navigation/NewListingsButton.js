import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingsButton({onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={25}/>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.primary,
        borderRadius:40,
        borderColor:colors.white,
        borderWidth:10,
        bottom:2,
        height:60,
        width:60,
    }
})

export default NewListingsButton;