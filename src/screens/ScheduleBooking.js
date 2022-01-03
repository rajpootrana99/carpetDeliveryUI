import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Button } from "react-native"
import { Separator, Faq } from "../components"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Colors } from "../contants"
import DatePicker from "react-native-date-picker"

const ScheduleBooking = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    return (
        <View style={styles.container}>
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Ionicons
                name="arrow-back-outline"
                size={24}
                color="#fff"
                onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerTitle}>Schedule Booking</Text>
            </View>
            <DatePicker date={date} onDateChange={setDate} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_LIGHT,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerContainer: {
        backgroundColor: Colors.DEFAULT_BLUE,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: "#fff",
        paddingLeft: 15,
        fontSize: 16,
        lineHeight: 20 * 1.4,
        width: 200,
    },
})

export default ScheduleBooking
