import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";


function Loading () {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          marginTop: 200,
        },
        horizontal: {
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10
        }
      });
    
    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={100} />
      </View>
    );
}

export default Loading;