import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../services/colors';
import { Shadow } from 'react-native-shadow-2';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../../../redux/theme/theme';

const data = [
    {
        id: 1,
        name: 'Covid-19'
    },
    {
        id: 2,
        name: 'Fitness'
    },
    {
        id: 3,
        name: 'Diet'
    },
    {
        id: 4,
        name: 'Health'
    },
]


const data2 = [
    {
        id: 1,
        title: 'Comparing the AstraZeneca and Sinovac COVID-19 Vaccines',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/Article1.png'),
        category: 'Covid-19'
    },
    {
        id: 2,
        title: 'The Horror Of The Second Wave Of COVID-19',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/Article5.png'),
        category: 'Covid-19'

    },
    {
        id: 3,
        title: 'Comparing the AstraZeneca and Sinovac COVID-19 Vaccines',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/Article5.png'),
        category: 'Covid-19'
    },
    {
        id: 4,
        title: 'The Horror Of The Second Wave Of COVID-19',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/Article1.png'),
        category: 'Covid-19'

    },


]

const data3 = [
    {
        id: 1,
        title: 'Comparing the AstraZeneca and Sinovac COVID-19 Vaccines',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/Article1.png')
    },
    {
        id: 2,
        title: 'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/article2.png')
    },
    {
        id: 3,
        title: 'Traditional Herbal Medicine Treatments for COVID-19',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/article3.png')
    },
    {
        id: 4,
        title: `Beauty Tips For Face: 10 Dos and Don'ts for Naturally Beautiful Skin`,
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/article4.png')
    },


]


const Articles = () => {
    const navigation = useNavigation()
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <SafeAreaView style={[styles.safeArea,{backgroundColor:currentTheme.background}]}>
            <ScrollView>

                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Entypo name='chevron-thin-left' size={20} color={currentTheme.primary} />
                        </TouchableOpacity>
                        <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 18 }}>Articles</Text>
                        <TouchableOpacity>
                            <Entypo name='dots-three-vertical' size={20} color={currentTheme.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <View style={{ width: '100%', height: 44, borderWidth: 1, borderColor: currentTheme.searchBorderColor, borderRadius: 22, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, backgroundColor: currentTheme.searchBarColor }}>
                            <TouchableOpacity>
                                <AntDesign name='search1' size={22} color={COLORS.lightGrey} />
                            </TouchableOpacity>
                            <TextInput placeholder='Search articles, news...' placeholderTextColor={COLORS.lightGrey} style={{ left: 5, width: 300, color: currentTheme.primary, fontFamily: 'Poppins-Regular', top: 2 }} />
                        </View>
                    </View>
                </View>
                <View style={{}}>
                    <View style={{ paddingHorizontal: 24, marginTop: 20 }}>
                        <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Popular Articles</Text>
                    </View>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <View style={{ width: 120, height: 38, borderRadius: 10, backgroundColor: COLORS.greenColor, alignItems: 'center', justifyContent: 'center', marginHorizontal: 5, marginTop: 15 }}>
                                        <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium' }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                    />

                </View>
                <View style={{ paddingLeft: 10 }}>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 24 }}>
                        <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Medium', fontSize: 18, left: 12 }}>Trending Articles</Text>
                        <TouchableOpacity>
                            <Text style={{ color: COLORS.greenColor, fontFamily: 'Poppins-Medium', fontSize: 14 }}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={data2}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <Shadow style={{}} startColor={currentTheme.shadow} distance={10} containerStyle={{ alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}>

                                    <View style={{ width: 180, borderWidth: 1, borderColor: currentTheme.searchBorderColor, borderRadius: 14, marginHorizontal: 10, paddingHorizontal: 6, paddingVertical: 10, height: 246, right: 10, backgroundColor:currentTheme.categories }}>
                                        <View style={{ flex: 1 }}>

                                            <Image source={item.profile} style={{ width: 166, height: 87 }} resizeMode='cover' borderRadius={10} />
                                            <Text style={{ backgroundColor: currentTheme.lightGreen2, paddingHorizontal: 4, color: COLORS.greenColor, fontFamily: 'Poppins-Medium', width: 75, borderRadius: 3, marginTop: 10 }}>
                                                {item.category}
                                            </Text>
                                            <View style={{ width: 130,top:4 }}>
                                                <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Medium', fontSize: 14 }}>
                                                    {item.title}
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ color: COLORS.lightGrey, fontSize: 12 }}>{item.date} . </Text>
                                            <Text style={{ color: COLORS.greenColor, fontSize: 12 }}>{item.time}</Text>

                                        </View>

                                    </View>
                                </Shadow>

                            )
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />

                </View>
                <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 24 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{
                            color: currentTheme.primary, fontFamily: 'Poppins-Medium', fontSize: 16,
                        }}>
                            Related Article
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
                            <Text style={{
                                color: COLORS.greenColor, fontFamily: 'Poppins-Medium', fontSize: 14,
                            }}>
                                See All
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <FlatList
                        data={data3}
                        keyExtractor={item => item.id.toString()} // Ensure key is a string
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Shadow style={{}} startColor={currentTheme.shadow} distance={10} containerStyle={{ alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}>

                                        <View style={{
                                            width: 354, height: 80, borderRadius: 14, borderColor: currentTheme.searchBorderColor, borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 4, backgroundColor:currentTheme.categories
                                        }}>
                                            <View style={{ width: 70, height: 70, borderRadius: 24, backgroundColor: currentTheme.searchBarColor, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                                <Image source={item.profile} resizeMode='cover' style={{ width: 70, height: 70 }} borderRadius={10} />
                                            </View>

                                            <View style={{ width: 220, left: 10 }}>
                                                <Text style={{
                                                    color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 12,
                                                }}>
                                                    {item.title}
                                                </Text>

                                                <View style={{ marginTop: 3, flexDirection: 'row' }}>
                                                    <Text style={{
                                                        color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                                    }}>
                                                        {item.date}.
                                                    </Text>
                                                    <Text style={{
                                                        color: COLORS.greenColor, fontFamily: 'Poppins-Regular', fontSize: 12, left: 3
                                                    }}>
                                                        {item.time}
                                                    </Text>
                                                </View>

                                            </View>
                                            <View style={{}}>
                                                <Image source={require('../../../assets/images/Bookmark.png')} resizeMode='contain' style={{ width: 20, height: 22, bottom: 13, left: 20 }} />

                                            </View>

                                        </View>
                                    </Shadow>
                                </View>

                            )
                        }}

                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Articles

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingTop: 40
    },
    container: {
        paddingHorizontal: 24,
        // flex: 1,
        paddingTop: 20
    }
})