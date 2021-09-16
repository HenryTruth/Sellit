import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Text from '../components/Text';
import * as Progress from 'react-native-progress'
import colors from '../config/colors';
import LottieView from 'lottie-react-native'

function UploadScreen({onDone, progress = 0, visible = false}){
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {onDone, progress < 1 ? <Progress.Bar color={colors.primary} progress={progress} width={200}/>: (<LottieView autoPlay loop={false} onAnimationFinish={onDone} style={styles.animation} source={require('../assets/animations/done.json')}/>)}
                
                <Text>{progress * 100}%</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    animation:{
        width:500
    },
    container:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    }
})

export default UploadScreen;