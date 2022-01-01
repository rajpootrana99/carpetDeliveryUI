import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ServiceList = ({name, photo, price, description, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress({name, photo, price, description})}>
            <Image 
                source={photo}
                style={styles.serviceImage}
            />
            <Text style={styles.serviceTitle}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        width: 90,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    serviceImage: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
    serviceTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default ServiceList
