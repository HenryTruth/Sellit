import React,{useEffect} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingsButton from './NewListingsButton';
import expoPushTokensApi from '../api/expoPushToken'
import { Notification } from "expo";
import navigation from './rootNavigation';
import useNotification from '../hooks/useNotification';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useNotification()       
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Feed" component={FeedNavigator}
            options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size}/>
            }}
            />

            <Tab.Screen name="ListingEdit" component={ListingEditScreen} options={({navigation}) => ({
                tabBarButton:() => <NewListingsButton onPress={() => navigation.navigate('ListingEdit')} />,
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="plus-circle" color={color} size={size}/>
            })}/>

            <Tab.Screen name="Account" component={AccountNavigator} options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size}/>
            }}/>
        </Tab.Navigator>
    )
}

export default AppNavigator