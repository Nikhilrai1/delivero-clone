import { View, Text, Image, Platform, StyleSheet, StatusBar, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
    ChevronDownIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const safe = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
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
                <FeaturedRow
                    title="Tasty Discounts"
                    description="Everyone is enjoying juicy discount!"
                    featuredCategory="discount"
                />

                {/* Discount */}
                <FeaturedRow
                    title="Featured"
                    description="Paid placement for our partners"
                    featuredCategory="category"
                />

                {/* Offers near you */}
                <FeaturedRow
                    title="Offers near you!"
                    description="Why not support your local restaurant!"
                    featuredCategory="offers"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen