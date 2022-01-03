import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from "react-native"
import { Separator, BookingDropdown } from "../components"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors, Images } from "../contants"
import { FlatList } from 'react-native-gesture-handler';

const getDropdownStyle = (y) => ({...styles.serviceDropdown, top: y + 60})

const ScheduleBooking = ({ navigation }) => {
    const [carpetService, setCarpetService] = useState([
        { key: 1,
          name: "Carpet Cleaning", 
          photo: Images.CARPET_CLEANING, 
          price: 400, 
          description: "Lorem ipsum anna bore illy tha min go so min chu wal hin na kresain tu menu ary bou" },
        { key: 2, 
          name: "Carpet Repairing", 
          photo: Images.CARPET_REPAIRING, 
          price: 1000, 
          description: "Lorem ipsum anna bore illy tha min go so min chu wal hin na kresain tu menu ary bou" },
        { key: 3, 
          name: "Carpet Stretching", 
          photo: Images.CARPET_STRETCHING, 
          price: 1500, 
          description: "Lorem ipsum anna bore illy tha min go so min chu wal hin na kresain tu menu ary bou" },
        { key: 4, 
          name: "Upholstrey Cleaning", 
          photo: Images.UPHOLSTERY_CLEANING, 
          price: 2000, 
          description: "Lorem ipsum anna bore illy tha min go so min chu wal hin na kresain tu menu ary bou" },
        {
          key: 5,
          name: "Hardwood Floor Cleaning",
          photo: Images.HARDWOOD_FLOOR_CLEANING,
          price: 2500,
          description: "Lorem ipsum anna bore illy tha min go so min chu wal hin na kresain tu menu ary bou",
        },
        {
          key: 6,
          name: "Flooring Installation",
          photo: Images.FLOORING_INSTALLATION,
          price: 3000,
          description: "Lorem ipsum anna bore illy tha min go so min chu wal hin na kresain tu menu ary bou",
        },
      ]);

    const [inputsContainerY, setInputsContainerY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownLayout, setDropdownLayout] = useState({});
    const [selectedService, setSelectedService] = useState({
        key: 1,
        name: "Carpet Cleaning", 
        photo: Images.CARPET_CLEANING, 
        price: 400, 
        description: "Lorem ipsum anna bore illy tha min go so min chu wal hin na kresain tu menu ary bou",
    });
    const closeDropdown = (pageX, pageY) => {
    if(isDropdownOpen){
        if(pageX < dropdownLayout?.x || 
        pageX > dropdownLayout?.x + dropdownLayout?.width || 
        pageY < dropdownLayout?.y || 
        pageY > dropdownLayout?.y + dropdownLayout?.height){
            setIsDropdownOpen(false);
        }
    }
    }
    return (
        <View style={styles.container} onStartShouldSetResponder={({nativeEvent: {pageX, pageY}}) => closeDropdown(pageX, pageY)}>
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
            <View style={styles.inputsContainer} onLayout={({
                nativeEvent: {
                layout: {y},
                },
            }) => setInputsContainerY(y)}>
                <TouchableOpacity style={styles.serviceListContainer} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Image 
                    source={selectedService.photo}
                    style={styles.serviceIcon}
                />
                <Text style={styles.serviceText}>{ selectedService.name }</Text>
                <MaterialIcons name="keyboard-arrow-down"></MaterialIcons>
                </TouchableOpacity>
            </View>
            {isDropdownOpen && (
                <View style={getDropdownStyle(inputsContainerY)} 
                onLayout={({
                    nativeEvent: {
                    layout: {x, y, height, width},
                    },
                    }) => setDropdownLayout({x, y, height, width})}>
                <FlatList
                    data={carpetService}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => <BookingDropdown {...item} onPress={(service) => {
                    setSelectedService(service)
                    setIsDropdownOpen(false)
                    }}/>} 
                />
                </View>
            )}
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
    inputsContainer: {
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 20,
    },
    serviceIcon: {
        height: 20,
        width: 20,
    },
    serviceListContainer: {
        backgroundColor: Colors.DEFAULT_LIGHT,
        width: 280,
        marginHorizontal: 20,
        borderRadius: 8,
        height: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.DEFAULT_GREY,
        flexDirection: 'row',
      },
      serviceDropdown: {
        backgroundColor: Colors.DEFAULT_LIGHT,
        position: 'absolute',
        width: 280,
        height: 130,
        marginHorizontal: 40,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.DEFAULT_GREY,
        zIndex: 3,
        paddingVertical: 5,
      }
})

export default ScheduleBooking
