import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Separator } from "../components";
import { Service } from "../components";
import { Colors } from "../contants";

const bookingsURL = 'http://192.168.10.10:8000/api/fetchBookings';

const Booking = ({ navigation }) => {
  const [serviceList, setServiceList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getBookings = () => {
    fetch(bookingsURL)
      .then((response) => response.json())
      .then((json) => setServiceList(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getBookings();
    }, []);
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
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>
      <View style={styles.headerDownBar}></View>
      <ScrollView style={styles.serviceBox}>
        {serviceList.map((item) => (
          <Service {...item} />
        ))}
        <View style={styles.bookingButton}>
          <Ionicons name="add-circle" size={90} color="#CCCCCC" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.boldText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

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
    height: 20,
    backgroundColor: "#fff",
  },
  serviceBox: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  bookingButton: {
    marginVertical: 40,
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.DEFAULT_BLUE,
    width: 170,
    alignItems: "center",
    paddingVertical: 13,
    borderRadius: 20,
    marginVertical: 15,
  },
  boldText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
  },
});

export default Booking;
