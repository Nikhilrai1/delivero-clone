import { View, ScrollView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"]
        `).then(data => {
            setCategories(data)
        })
    }, [])
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            showHorizontalScrollIndicator={false}
        >
            {
                categories?.map(data => {
                    return (
                        <CategoryCard
                            key={data._id}
                            id={data._id}
                            title={data.name}
                            imgUrl={urlFor(data.image).width(200).url()}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default Categories