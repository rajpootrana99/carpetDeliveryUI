import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ServiceList = ({name, photo}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={photo}
                style={styles.serviceImage}
            />
            <Text style={styles.serviceTitle}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
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
