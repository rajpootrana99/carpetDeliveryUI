import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Colors, Images } from "../contants";
import { Separator, ServiceList } from "../components";

const { width } = Dimensions.get("window");
const SPACING = 10;
const THUMB_SIZE = 80;

const Home = ({ navigation }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  const [carpetService, setCarpetService] = useState([
    { key: 1, name: "Carpet Cleaning", photo: Images.CARPET_CLEANING },
    { key: 2, name: "Carpet Repairing", photo: Images.CARPET_REPAIRING },
    { key: 3, name: "Carpet Stretching", photo: Images.CARPET_STRETCHING },
    { key: 4, name: "Upholstrey Cleaning", photo: Images.UPHOLSTERY_CLEANING },
    {
      key: 5,
      name: "Hardwood Floor Cleaning",
      photo: Images.HARDWOOD_FLOOR_CLEANING,
    },
    {
      key: 6,
      name: "Flooring Installation",
      photo: Images.FLOORING_INSTALLATION,
    },
  ]);

  const [images, setImages] = useState([
    { id: "1", image: Images.RECTANGLE },
    { id: "2", image: Images.RECTANGLE },
    { id: "3", image: Images.RECTANGLE },
    { id: "4", image: Images.RECTANGLE },
  ]);
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);
  };
  return (
    <View style={styles.container}>
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.containerHeader}>
        <View style={styles.addressInput}>
          <Ionicons
            name="ios-location-sharp"
            size={24}
            color={Colors.DEFAULT_GREY}
          />
          <Text style={styles.textBold}>
            330 Amity Rd, Woodbridge, CT, 06525
          </Text>
        </View>
        <View style={styles.searchInput}>
          <Ionicons name="search" size={24} color={Colors.DEFAULT_LIGHT_GREY} />
          <TextInput
            style={styles.inputSearch}
            placeholder="Search for services and packages"
          />
        </View>
        <View style={styles.sliderStyle}>
          <Carousel
            layout="default"
            data={images}
            sliderWidth={width}
            itemWidth={width}
            renderItem={({ item }) => (
              <Image
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
                source={item.image}
              />
            )}
          />
          <Pagination
            inactiveDotColor="gray"
            dotColor={"orange"}
            activeDotIndex={indexSelected}
            dotsLength={images.length}
            animatedDuration={150}
            inactiveDotScale={1}
          />
        </View>
      </View>
      <View style={styles.containerBody}>
        <Text style={styles.bodyTitle}>Our Services</Text>
        <View style={styles.serviceListContainer}>
          <FlatList
            numColumns={3}
            data={carpetService}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <ServiceList {...item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: Colors.DEFAULT_LIGHT,
  },
  containerHeader: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  addressInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  textBold: {
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_LIGHT_GREY,
  },
  inputSearch: {
    paddingHorizontal: 20,
  },
  sliderStyle: {
    marginTop: 20,
    marginHorizontal: 20,
    height: 200,
  },
  containerBody: {
    backgroundColor: "#fff",
    marginVertical: 15,
    paddingVertical: 10,
  },
  bodyTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: Colors.DEFAULT_GREY,
  },
  serviceListContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
});

export default Home;
