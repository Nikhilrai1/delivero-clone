import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';

const RestuarantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
    }
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url()
          }}
          className="w-full h-56 bg-white p-4"
        />
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-white rounded-full">
          <ArrowLeftIcon size={20} color={"#00CCBB "} />
        </TouchableOpacity>
      </View>

      <View className="bg-white px-4">
        <View className="pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
        </View>
        <View className="flex-row space-x-2 my-1">

          <View className="flex-row items-center space-x-1">
            <StarIcon color={"green"} size={22} />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-500 ">{rating}</Text> . {genre}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon color={"green"} size={22} />
            <Text className="text-xs text-gray-500">
              Nearby. {address}
            </Text>
          </View>
        </View>
        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
      </View>

      <View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={"#00CCBB"} />
          </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        

        {
          dishes?.map(dish => (
            <DishRow 
            key={dish._id}
            id={dish.id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            imgUrl={urlFor(dish.image).url()}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default RestuarantScreen