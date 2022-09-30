// Imports
import { useState } from "react";
import { Pressable, TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Component

/**
 * 
 * @param {inputPassword} param0 If the InputBox will contain a hide password button (It's false by default).
 * @param {onChange} param1 The funtion to execute everytime the InputBox value changes.
 * @param {value} param2 The written value inside de InputBox.
 * @param {placeholder} param3 The InputBox placeholder.
 * @returns A customize TextInput component.
 */
const InputBox = ({inputPassword=false, onChange, value, placeholder}) => {
  const [passwordVisibility, setVisibility] = useState(true);
  const [icon, setIcon] = useState("eye");

  /**
   * Handles the hide password button click event.
   * Change the password visibility everytime the button gets clicked.
   */
  const handleOnClick = () => {
    if(icon === "eye") {
      setIcon("eye-off");
    } else if(icon === "eye-off") {
      setIcon("eye");
    }
    setVisibility(!passwordVisibility);
  };

  /**
   * @returns A new hide password button.
   */
  const createhideButton = () => {
    return (
      <Pressable onPress={handleOnClick}>
        <MaterialCommunityIcons name={icon} size={22} color="black" />
      </Pressable>
    );
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={inputPassword ? passwordVisibility : false}
      />
      {inputPassword && createhideButton()}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  inputField: {
    width: "90%",
  },

  inputContainer: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    marginBottom: 10
  },

});

// Export
export default InputBox;