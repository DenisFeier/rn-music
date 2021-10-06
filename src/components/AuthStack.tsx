import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { AuthParamList } from "../params/AuthParamList";
import Login from '../screen/Login';
import Register from '../screen/Register';

const Stack = createStackNavigator<AuthParamList>();

interface AuthStackProps {}

const AuthStack: React.FC<AuthStackProps> = ({}) => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack;
