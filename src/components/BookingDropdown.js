import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../contants'

const BookingDropdown = ({ key, name, photo, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => onPress({key, name, photo})}>
            <Image 
                source={photo}
                style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    serviceIcon: {
        marginRight: 10,
        height: 17,
        width: 17,
    },
    serviceText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: Colors.DEFAULT_BLACK,
        marginRight: 10,
    }
})

export default BookingDropdown
