import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            showHorizontalScrollIndicator={false}
        >
            <CategoryCard
                title="testing"
                imgUrl="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
            />
            <CategoryCard
                title="testing"
                imgUrl="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
            />
            <CategoryCard
                title="testing"
                imgUrl="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
            />
            <CategoryCard
                title="testing"
                imgUrl="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
            />
            <CategoryCard
                title="testing"
                imgUrl="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
            />
            <CategoryCard
                title="testing"
                imgUrl="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
            />
        </ScrollView>
    )
}

export default Categories