import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { RFPercentage } from "react-native-responsive-fontsize";

//componenets
import AppModal from "../components/AppModal";

export default function BikingScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [fourthmodalVisible, setFourthModalVisible] = useState(false);
  const mapViewRef = useRef(null);

  // camera
  const [image, setImage] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (newLocation) => {
          setLocation(newLocation);
          if (isTracking) {
            setLocationData((prevData) => [
              ...prevData,
              {
                latitude: newLocation.coords.latitude,
                longitude: newLocation.coords.longitude,
              },
            ]);
          }
        }
      );
    })();
  }, [isTracking]);

  const handleStartTracking = () => {
    setIsTracking(true);
    setLocationData([]);
  };

  const handleStopTracking = () => {
    setIsTracking(false);
  };

  let marker = null;
  let polyline = null;

  if (location) {
    marker = (
      <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        title="My Location"
        image={require("../../assets/images/bikemainlogo.png")}
        style={{ zIndex: 1, width: 30, height: 30 }}
      />
    );
  }

  if (locationData.length > 0) {
    polyline = (
      <Polyline
        ref={mapViewRef}
        coordinates={locationData}
        strokeColor={Colors.green}
        strokeWidth={5}
      />
    );
  }

  // camera photo taking
  const takePhoto = async () => {
    if (cameraPermission) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      alert("Camera permission not granted");
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          zIndex: 1,
          position: "absolute",
          top: RFPercentage(4),
          right: RFPercentage(3),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setFourthModalVisible(true)}
          style={{
            backgroundColor: Colors.green,
            padding: RFPercentage(1),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: RFPercentage(1),
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2),
            }}
          >
            Upload Picture
          </Text>
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {marker}
        {polyline}
      </MapView>
      <View style={styles.buttonContainer}>
        {!isTracking ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleStartTracking}
            style={{
              backgroundColor: Colors.green,
              width: RFPercentage(20),
              height: RFPercentage(7),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: RFPercentage(5),
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
              }}
            >
              Start
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleStopTracking}
            style={{
              backgroundColor: Colors.green,
              width: RFPercentage(20),
              height: RFPercentage(7),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: RFPercentage(5),
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
              }}
            >
              Stop
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* 4th modal */}
      <AppModal
        modalVisible={fourthmodalVisible}
        setModalVisible={setFourthModalVisible}
        style={{ justifyContent: "flex-end" }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.modallineclose}
          onPress={() => setFourthModalVisible(!fourthmodalVisible)}
        />

        <View
          style={{
            marginTop: RFPercentage(3),
            marginBottom: RFPercentage(4),
          }}
        >
          {image ? null : (
            <Image
              style={{
                width: RFPercentage(12),
                height: RFPercentage(12),
                borderRadius: RFPercentage(6),
              }}
              source={require("../../assets/images/person1.png")}
            />
          )}

          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: RFPercentage(12),
                height: RFPercentage(12),
                borderRadius: RFPercentage(6),
              }}
            />
          )}
        </View>

        {/* //upload picture */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={takePhoto}
          style={{
            backgroundColor: Colors.green,
            width: RFPercentage(30),
            height: RFPercentage(6),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: RFPercentage(1),
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2.2),
            }}
          >
            Upload Bike Photo
          </Text>
        </TouchableOpacity>

        {/* //upload picture */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setFourthModalVisible(false)}
          style={{
            marginTop: RFPercentage(1.5),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.grey,
            width: RFPercentage(30),
            height: RFPercentage(6),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: RFPercentage(1),
          }}
        >
          <Text
            style={{
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2.2),
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </AppModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  modallineclose: {
    width: RFPercentage(10),
    height: RFPercentage(0.5),
    backgroundColor: Colors.third,
    borderRadius: RFPercentage(4),
    position: "absolute",
    top: 20,
  },
});
