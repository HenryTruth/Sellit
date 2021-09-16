import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator'
import AuthContext from './app/auth/context';
import { navigationRef } from './app/navigation/rootNavigation'
// import logger from './app/utility/logger'
// import {AppLoading } from 'expo'
import AppLoading from 'expo-app-loading'
import authStorage from './app/auth/storage'
import OfflineNotice from './app/components/OfflineNotice';

export default function App(){
    const [user, setUser] = useState()
    const [isReady, setIsReady] = useState(false)

    const restoreUser = async () => {
        const user = await authStorage.getToken()
        if(user) setUser(user);
    }


    if(!isReady) return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn}/>

    return (
        <>
            <OfflineNotice/>
                <AuthContext.Provider value={{user, setUser}}>
                <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                    {user ? <AppNavigator/>:<AuthNavigator/>}
                    {/* <AppNavigator /> */}
                </NavigationContainer>
            </AuthContext.Provider>
        </>
        
    )
}

const styles = StyleSheet.create({
    container:{}
})