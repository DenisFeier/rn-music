import React from 'react'
import { Text, TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native'

interface RoundedButtonProps {
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    title?: string;
}


const RoundedButton: React.FC<RoundedButtonProps> = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        justifyContent: 'center',   
        alignItems: 'center',
        height: 50,
        width: '85%',
        borderRadius: 50
    },
    title: {
        margin: 2,
        color: 'black'
    }
})

export default RoundedButton
