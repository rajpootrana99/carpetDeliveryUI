import React, {useState} from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { Separator, ProfileEdit } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../contants';

const Profile = ({navigation}) => {
    const [profileEdit, setProfileEdit] = useState([
        {name: 'Call Us', icon: 'ios-logo-whatsapp'},
        {name: 'Help Center', icon: 'ios-help-circle'},
        {name: 'Manage Address', icon: 'ios-location-sharp'},
        {name: 'Pricing', icon: 'ios-pricetag'},
        {name: 'Setting', icon: 'ios-settings'},
        {name: 'Schedule Booking', icon: 'ios-calendar'},
        {name: 'Payment Option', icon: 'ios-card-sharp'},
        {name: 'Rate Us', icon: 'ios-star'},
        {name: 'Reviews', icon: 'ios-eye'},
        {name: 'Share Michelangelo Enterprises', icon: 'ios-share-social'},
        {name: 'Log Out', icon: 'md-log-out-outline'},
    ])
    return (
        <View style={styles.container}>
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Ionicons
                    name="arrow-back-outline"
                    size={24}
                    color="#fff"
                    onPress={() => navigation.goBack() }
                />
                <Text style={styles.headerTitle}>My Profile</Text>
            </View>
            <View style={styles.headerDownBar}>
                <View>
                    <Text style={styles.textBold}>John Parker</Text>
                    <Text style={styles.textLight}>+1 8822882288</Text>
                </View>
                <Ionicons
                    name="ios-pencil"
                    size={30}
                    style={styles.editIcon}
                    color={Colors.DEFAULT_LIGHT_GREY}
                />
            </View>
            <ScrollView>
                {profileEdit.map(item => (
                    <ProfileEdit {...item}/>
                ))}
            </ScrollView>
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: '#fff',
        paddingLeft: 15,
        fontSize: 16,
        lineHeight: 20 * 1.4,
        width: 200,
    },
    headerDownBar: {
        paddingHorizontal: 40,
        paddingVertical: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 5,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    textLight: {
        color: Colors.DEFAULT_LIGHT_GREY,
        fontWeight: 'bold',
    },
    editIcon: {
        textAlign: 'right',
        paddingRight: 40,
        marginLeft: 120,
    }
});

export default Profile;