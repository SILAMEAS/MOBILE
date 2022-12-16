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
  const [list, setList] = useState([
    { name: "Coca", id: 1 },
    { name: "Fanta", id: 2 },
    { name: "Beer", id: 3 },
    { name: "Spire", id: 4 },
    {
      name: "Black Panter",
      id: 5,
    },
  ]);
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome back {name}. You are {age} years old.{" "}
        </Text>
        <Text>Name : </Text>
        <input
          value={name}
          style={styles.input}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <Text>Age : </Text>
        <input
          value={age}
          style={styles.input}
          onChange={(e) => setAge(Number(e.target.value))}
        />{" "}
        {/* <TextInput style={styles.input} onChangeText={(val) => setAge(val)} /> */}
        <View>
          {" "}
          <Button title="Submit" onPress={show}></Button>
        </View>
        <ScrollView>
          {list.map((item) => {
            return (
              <View key={item.name}>
                <Box
                  bg={"pink.400"}
                  marginTop={"2"}
                  fontWeight={"bold"}
                  fontSize={"10rem"}
                  color={"white"}
                >
                  {item.name}
                </Box>
              </View>
            );
          })}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 10,
    borderColor: "blue",
    padding: 8,
    margin: 10,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  welcome: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "red",
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    color: "white",
    backgroundColor: "blue",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
});
