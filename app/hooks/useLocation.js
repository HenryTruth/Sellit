import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
    const [location, setLocation] = useState()

    const getLoaction = async () => {
        try{
            const { granted } = await Location.requestPermissionsAsync
            if(!granted) return;
            const{
                coords :{latitude, longtitude},
            } = await Location.getLastKnownPositionAsync()
            setLocation({latitude, longtitude});
        }catch(error){
            console.log(error)
        }
    }
    return location
}