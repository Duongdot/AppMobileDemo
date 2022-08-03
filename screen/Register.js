import React, {useState} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import UserInput from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Register = ({navigation}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const regPhone = /^\d{10}$/;
    if (!fullName || !phone || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }else if(reg.test(email) === false) {
      alert("Please enter a valid email");
      setLoading(false);
      return;
    // }else if(reg.test(regPhone) === false) {
    //   alert("Please enter a valid phone number");
    //   setLoading(false);
    //   return;
    }else if(password !== confirmPassword) {
      alert("Password does not match");
      setLoading(false);
      return;
    }else if (password.length < 6) {
      alert("Password must be at least 6 characters");
      setLoading(false);
      return;
    }else if (phone.length < 10) {
      alert("Phone number must be at least 10 characters");
      setLoading(false);
      return;
    };
    try {
      alert ("SignUp Success");
    } catch (error) {
      alert("SignUp Failed");
    }
  }
  
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <UserInput name="FullName" value = {fullName} setValue = {setFullName} autoCapitalize = "word"/>
      <UserInput name="Email" value={email} setValue = {setEmail} autoCompleteType = "email"/>
      <UserInput name="Phone" setValue = {setPhone} keyboardType="numeric"/>
      <UserInput name="Password" value = {password} setValue = {setPassword} secureTextEntry = {true} autoCompleteType = "password" />
      <UserInput name="ConfirmPassword" value = {confirmPassword} setValue = {setConfirmPassword} secureTextEntry = {true} autoCompleteType = "password"/>
      <TouchableOpacity style={styles.submit} onPress = {() => handleSubmit()}>
        <Text>{loading ? "waiting" : "Register"}</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Do not have account? <Text onPress={() => navigation.navigate("LogIn")} style={{ color: "blue" }}>Login</Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  logo: {
    width: 270,
    height: 150,
    marginBottom: 10,
    marginVertical: 60,
  },
  title: {
    fontSize: 27,
    color: "#2b3494",
    fontWeight: "bold",
    marginBottom: 30,
  },
  submit: {
    backgroundColor: "#FF9900",
    height: 40,
    justifyContent: "center",
    borderRadius: 24,
    marginHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
});
export default Register;
