import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { NativeBaseProvider, Box, ScrollView, Text } from "native-base";

//===========================================

export default function InputData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const show = () => {
    alert(name + " : " + age);
    setAge(0);
    setName("");
  };

  return (
    // <NativeBaseProvider>
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome back {name}. You are {age} years old.{" "}
    //     </Text>
    //     <Text>Name : </Text>
    //     {/* <input
    //       value={name}
    //       style={styles.input}
    //       onChange={(e) => setName(e.target.value)}
    //     />{" "}
    //     <Text>Age : </Text>
    //     <input
    //       value={age}
    //       style={styles.input}
    //       onChange={(e) => setAge(Number(e.target.value))}
    //     />{" "} */}
    //     {/* <TextInput style={styles.input} onChangeText={(val) => setAge(val)} /> */}
    //     <View>
    //       {" "}
    //       <Button title="Submit" onPress={show}></Button>
    //     </View>
    //     <StatusBar style="auto" />
    //   </View>
    // </NativeBaseProvider>
    <NativeBaseProvider>
      <View>
        <Text mt={"10"}>sdfsfsdsdfsfsfdssd</Text>
      </View>
    </NativeBaseProvider>
  );
}
