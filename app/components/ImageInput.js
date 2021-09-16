import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback,Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from "../config/colors";


function ImageInput({imgUri, onChangeImage}){
    useEffect(() => {
        requestPermission();
    },[])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted){
          Alert.alert('You need to enable permission to access the libary.')
        }
      }

    const handlePress = () => {
        if(!imgUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image',[{text:'yes', onPress:() => onChangeImage(null)},
        {text:'No'}])
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality:0.5
          });
          if(!result.cancelled){
            onChangeImage(result.uri)
          }
        } catch (error) {
          console.log('Erro reading an image', error)
        }
    }
      
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imgUri && (<MaterialCommunityIcons name="camera" color={colors.medium} size={40}/>)}
                {imgUri && <Image  source={{ uri:imgUri }} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.light,
        borderRadius:15,
        height:100,
        overflow:'hidden',
        justifyContent:'center',
        width:100
    },
    image:{
        height:'100%',
        width:'100%'
    }
})

export default ImageInput;