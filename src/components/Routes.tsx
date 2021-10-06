import React, { useEffect } from 'react'
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase/app'
import 'firebase/auth'

import AuthStack from './AuthStack'

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {

    useEffect(() => {
        firebase.auth().onAuthStateChanged((currentState) => {
            console.log('Auth State: ', JSON.stringify(currentState));
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
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default Routes;
