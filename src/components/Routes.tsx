import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';

import AuthStack from './AuthStack';
import AppTabBottom from './AppTabBottom';
import User from '../model/User';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {

    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            console.log('Auth State: ', JSON.stringify(currentUser));
            setUserData(currentUser as unknown as User);
        }, (error) => {
            const errorMessage = error.message;
            Alert.alert('Server Error!', errorMessage, [ 
                {
                    text: 'Ok'
                }
            ]);
        })
    }, [])

    return (
        <NavigationContainer theme={DarkTheme}>
            { !userData ? <AuthStack /> : <AppTabBottom /> }
        </NavigationContainer>
    )
}

export default Routes;
