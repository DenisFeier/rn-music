import React from 'react'
import { View } from 'react-native'

interface SpacerProps {
    spaceX: number;
    spaceY: number;
}

const Spacer: React.FC<SpacerProps> = ({ spaceX, spaceY }) => {
    return (
        <View style={{ width: `${spaceX % 101}%`, height: `${spaceY % 101}%` }}/>
    )
}



export default Spacer
