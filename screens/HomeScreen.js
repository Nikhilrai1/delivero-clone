import { View, Text, Image, Platform, StyleSheet, StatusBar, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { UserIcon, SearchIcon, AdjustmentsIcon, ChevronDownIcon } from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native';
import FeaturedRow from '../components/FeaturedRow';
import Categories from '../components/Categories';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import sanityClient from "../sanity";

// safe area in android
const safe = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});


// Home Screen
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->
            }
        }`).then(data => {
            setFeaturedCategories(data)
        })
    }, [])

    return (
        <SafeAreaView style={safe.AndroidSafeArea} className="bg-gray-100">
            {/* headers */}
            <View className="flex-row items-center mx-1 space-x-2 bg-white">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="h-7 w-7 bg-gray rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
                    <Text className="font-bold text-x">Currunt Location
                        <ChevronDownIcon size={20} color={"#00CCBB"} />
                    </Text>
                </View>
                <UserIcon size={35} color={"#00CCBB"} />
            </View>
            {/* search */}
            <View className="flex-row items-center p-3 space-x-2 bg-white">
                <View className="flex-row items-center space-x-2 bg-gray-300 flex-1 p-2">
                    <SearchIcon size={20} color="gray" />
                    <TextInput
                        keyboardType="default"
                        placeholder="Resturants & Causines"
                        className="flex-1"
                    />
                </View>
                <AdjustmentsIcon size={20} color="#00CCBB" />
            </View>

            {/* scrollview */}
            <ScrollView>
                <Categories />

                {/* Featured */}
               {
                featuredCategories?.map(category => {
                    return (
                        <FeaturedRow 
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                        />
                    )
                })
               }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen