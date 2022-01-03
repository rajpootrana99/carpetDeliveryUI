import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput } from "react-native";
import { Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../contants";

const ManageAddress = ({ navigation }) => {
    const [address, setAddress] = useState("330 Amity Rd, Woodbridge, CT, 06525")
    const [addressInput, setAddressInput] = useState("330 Amity Rd, Woodbridge, CT, 06525")
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
                <Text style={styles.headerTitle}>Manage Address</Text>
            </View>
            <View style={styles.headerDownBar}>
                <Ionicons
                    name="ios-location-sharp"
                    size={24}
                    color={Colors.DEFAULT_GREY}
                />
                <Text style={{ marginLeft: 10 }}>{ address }</Text>
            </View>
            <View style={styles.addressSection}>
                <View style={styles.addressInput}>
                    <Ionicons name="ios-location-sharp" size={24} color={Colors.DEFAULT_LIGHT_GREY} />
                    <TextInput
                        style={styles.inputAddress}
                        placeholder="Enter Address"
                        onChangeText={(text) => setAddressInput(text)}
                    />
                </View>
                <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8}
                    onPress={() => setAddress(addressInput)}>
                    <Text style={styles.btnText}>Change</Text>
                </TouchableOpacity>
            </View>
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
    headerDownBar: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        backgroundColor: Colors.WHITE,
        alignItems: "center",
        marginBottom: 5,
    },
    addressSection: {
        backgroundColor: Colors.WHITE,
        marginVertical: 5,
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressInput: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 300,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.DEFAULT_BLACK,
    },
    inputAddress: {
        paddingHorizontal: 10,
    },
    btnPrimary: {
        width: 150,
        padding: 18,
        marginVertical: 10,
        backgroundColor: Colors.DEFAULT_BLUE,
        borderRadius: 10,
    },
    btnText: {
        color: "white",
        fontSize: 15,
        textAlign: 'center',
        fontWeight: "700",
    },
})

export default ManageAddress
