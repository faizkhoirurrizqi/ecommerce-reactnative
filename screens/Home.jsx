import { StyleSheet, Text, View, Image } from "react-native"; // Import Image component
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          {/* Use the Image component to display the location icon from the image asset */}
          <Image
            source={require("../assets/images/location.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />

          <Text style={styles.location}>Shanghai China</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 8 </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
