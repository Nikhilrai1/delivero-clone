import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {ArrowRightIcon} from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, featuredCategory }) => {
    return (
        <View>
            <View className="mt-4 flex-row justify-between items-center px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color={"#00CCBB"} />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="pt-4"
                showHorizontalScrollIndicator={false}
            >
            
            <RestaurantCard 
             id="123"
             imgUrl="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/3:4/w_2303,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg"
             title="Yo! sushi"
             rating={4.5}
             genre="Japanese"
             address="123 main st"
             short_description="This is a famous restro"
             dishes={[]}
             long={20}
             lat={0}
            />
              <RestaurantCard 
             id="123"
             imgUrl="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/3:4/w_2303,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg"
             title="Yo! sushi"
             rating={4.5}
             genre="Japanese"
             address="123 main st"
             short_description="This is a famous restro"
             dishes={[]}
             long={20}
             lat={0}
            />  <RestaurantCard 
            id="123"
            imgUrl="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/3:4/w_2303,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg"
            title="Yo! sushi"
            rating={4.5}
            genre="Japanese"
            address="123 main st"
            short_description="This is a famous restro"
            dishes={[]}
            long={20}
            lat={0}
           />  <RestaurantCard 
           id="123"
           imgUrl="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/3:4/w_2303,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg"
           title="Yo! sushi"
           rating={4.5}
           genre="Japanese"
           address="123 main st"
           short_description="This is a famous restro"
           dishes={[]}
           long={20}
           lat={0}
          />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow