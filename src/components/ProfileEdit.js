import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../contants';

const ProfileEdit = ({name, icon}) => {
    return (
        <View style={styles.container}>
            <Ionicons
                name={icon}
                size={24}
                color={Colors.DEFAULT_GREY}
                />
            <Text style={styles.profileText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 40,
        marginVertical: 2,
    },
    profileText: {
        color: Colors.DEFAULT_BLACK,
        marginLeft: 25,
        fontWeight: 'bold'
    }
})

export default ProfileEdit