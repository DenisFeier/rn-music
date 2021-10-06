import React, { useState } from "react";
import { 
    StyleSheet, 
    TextInput, 
    View, 
    Text, 
    TouchableOpacity, 
    SafeAreaView,  
    Keyboard, 
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from "firebase";
import 'firebase/auth'

import Colors from '../constants/Colors';
import RoundedButton from '../components/RoundedButton';
import { AuthNavProps } from "../params/AuthParamList";
import { validateEmail, validatePassword } from '../util/AuthUtility';

interface RegisterProps extends AuthNavProps<"Register"> {

}

const Register: React.FC<RegisterProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [rePassword, setRePassword] = useState<string | undefined>();

    const backToLogin = () => {
        navigation.goBack()
    }

    const createAccount = () => {

        if (password !== rePassword) {
            Alert.alert(
                "Password dosen't match!", 
                "Password and Re-Password must match.", [
                    {
                        text: 'Ok',
                    }
            ])
            return;   
        }

        if (validatePassword(password || '')) {
            Alert.alert(
                "Password not valid!", 
                "You need a stronger password.", [
                    {
                        text: 'Ok',
                    }
            ])
            return;
        }

        if (validateEmail(email || '')) {
            Alert.alert(
                "Email not valid!", 
                "This is not a valid email.", [
                    {
                        text: 'Ok',
                    }
            ])
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email as string, password as string)
            .then((userCredential) => {
                // Signed in 
                backToLogin()
                
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(
                    "Sign up error!", 
                    errorMessage, [
                        {
                            text: 'Ok',
                        }
                ])

             });
    }

    return (
        <LinearGradient 
            colors={[Colors.darkRed, 'black']}
            style={styles.loginScreen} 
            end={{ x: 0.5, y: 0.75 }} > 
            <SafeAreaView style={styles.loginContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginContainer}>
                        <View>
                            <View style={{...styles.alignCenterContainer, ...styles.marginContainer}} > 
                                <Text style={styles.titleScreen}> Sign Up</Text>
                            </View>
                            <View style={styles.alignCenterContainer} > 
                                <TextInput 
                                    style={styles.inputs} 
                                    placeholder="Email" 
                                    placeholderTextColor="white" 
                                    value={email}
                                    keyboardType="email-address"
                                    onChangeText={setEmail} />
                                <TextInput 
                                    style={styles.inputs} 
                                    placeholder="Password" 
                                    placeholderTextColor="white" 
                                    value={password}
                                    secureTextEntry={true} 
                                    onChangeText={setPassword} /> 
                                <TextInput 
                                    style={styles.inputs} 
                                    placeholder="Re-Password" 
                                    placeholderTextColor="white" 
                                    value={rePassword}
                                    secureTextEntry={true} 
                                    onChangeText={setRePassword} /> 
                            </View>
                            <View style={{...styles.alignCenterContainer, ...styles.marginContainer}} >
                                <RoundedButton title="Sign Up" onPress={createAccount} />
                            </View>
                        </View>
                        <View style={{...styles.alignCenterContainer}}>
                            <TouchableOpacity style={{...styles.alignCenterContainer, ...styles.marginContainer, ...styles.createAccountButton}} 
                                onPress={backToLogin}> 
                                <Text style={{...styles.forgotPasswordText, ...styles.createAccountText}}>Go to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    alignCenterContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    loginScreen: {
        width: '100%',
        height: '100%',
    },
    inputs: {
        width: '85%',
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'black',
        color: 'white',
    },
    titleScreen: {
        color: 'white',
        fontSize: 23
    },
    marginContainer: {
        marginVertical: 10,
    },
    forgotPasswordText: {
        color: 'white',
    },
    createAccountText: {
        marginVertical: 13,
        marginHorizontal: 15
    },
    createAccountButton: {
        backgroundColor: Colors.darkGray,
        borderRadius: 50,
        alignSelf: 'center'
    },
    bottomContainer: {
        paddingBottom: 30
    }
});

export default Register;