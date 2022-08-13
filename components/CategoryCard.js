import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title }) => {
    return (
        <TouchableOpacity className="mr-2 relative">
            <Image
                source={{ uri: imgUrl}}
                className="h-20 w-20 rounded"
            />
            <Text className="absolute left-1 font-bold text-white bottom-1">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard