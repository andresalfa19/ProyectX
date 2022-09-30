import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputBox from "./InputBox";

const SignUpScreen = () => {
    // Username Input
    const [username, setUsername] = useState("");
    // Password Input
    const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyect X</Text>
      <InputBox onChange={setUsername} value={username} placeholder="Username"/>
      <InputBox inputPassword={true} onChange={setPassword} value={password} placeholder="Password"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    width: "60%",
  },

  title: {
    fontSize: 40,
    marginBottom: 30,
  }
});

export default SignUpScreen;