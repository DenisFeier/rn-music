import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';

import { AppParamList } from '../params/AppParamList';
import Home from '../screen/Home';
import Favorite from '../screen/Favorite';
import Search from '../screen/Search';
import Top from '../screen/Top';

interface AppTabBottomProps {

}

const BottomTab = createBottomTabNavigator<AppParamList>();

const AppTabBottom: React.FC<AppTabBottomProps> = ({}) => {
    return (
        <BottomTab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                switch (route.name) {
                    case 'Favorite':
                        return <Feather name="bookmark" size={24} color={color} />
                    case 'Home':
                        return <Feather name="home" size={24} color={color} />
                    case 'Search':
                        return <FontAwesome name="search" size={24} color={color} />
                    case 'Top':
                        return <Ionicons name="musical-notes" size={24} color={color} />
                    default:
                        return <Feather name="home" size={24} color={color} />
                }
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          })}>  
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Top" component={Top} />
            <BottomTab.Screen name="Favorite" component={Favorite} />
            <BottomTab.Screen name="Search" component={Search} />
        </BottomTab.Navigator>
    )
}

export default AppTabBottom
