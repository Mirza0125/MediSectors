import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ApointmentCard from '../../../components/ApointmentCard';

const data = [
    {
        id: 1,
        name: 'Dr. Marcus Horizon',
        category: 'Chardiologist',
        profile: require('../../../assets/images/doctor1.png'),
        rated : true,

    },
    {
        id: 2,
        name: 'Dr. Maria Elena',
        category: 'Psychologist',
        profile: require('../../../assets/images/doctor2.png'),
        rated : false,

    },
    {
        id: 3,
        name: 'Dr. Stefi Jessi',
        category: 'Orthopedist',
        profile: require('../../../assets/images/doctor3.png'),
        rated : false,

    },
    {
        id: 4,
        name: 'Dr. Gerty Cori',
        category: 'Orthopedist',
        profile: require('../../../assets/images/doctor4.png'),
        rated : true,

    },
]

const Completed = () => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ApointmentCard name={item.name} category={item.category} profile={item.profile} buttonTitle = {'Reschedule'} status={'Completed'} upcomig={false} completed={true} rateStatus={item.rated} />
                    )
                }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 140 }}
            />
        </View>
    )
}

export default Completed

const styles = StyleSheet.create({

})