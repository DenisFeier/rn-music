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
import firebase from 'firebase/app'
import 'firebase/auth'

import Colors from '../constants/Colors';
import RoundedButton from '../components/RoundedButton';
import { AuthNavProps } from "../params/AuthParamList";
import { validateEmail, validatePassword } from "../util/AuthUtility";

interface LoginProps extends AuthNavProps<"Login"> {

}

const Login: React.FC<LoginProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();

    const goToCreateAccount = () => {
        navigation.navigate("Register")
    }

    const signIn = () => {

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

        firebase.auth().signInWithEmailAndPassword(email as string, password as string)
            .then((userCredential) => {
                const credentialUser = userCredential.user;
                
            })
            .catch((error) => {
                const errorMessage = error.message;

                Alert.alert(
                    "Sign In Failed!", 
                    errorMessage, [
                        {
                            text: 'Ok',
                        }
                ])

            });

    }

    return (
        <LinearGradient 
            colors={[Colors.darkGreen, 'black']}
            style={styles.loginScreen} 
            end={{ x: 0.5, y: 0.75 }} > 
            <SafeAreaView style={styles.loginContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginContainer}>
                        <View>
                            <View style={{...styles.alignCenterContainer, ...styles.marginContainer}} > 
                                <Text style={styles.titleScreen}> Sign In</Text>
                            </View>
                            <View style={styles.alignCenterContainer} > 
                                <TextInput 
                                    style={styles.inputs} 
                                    placeholder="Email" 
                                    placeholderTextColor="white" 
                                    value={email} 
                                    onChangeText={setEmail} />
                                <TextInput 
                                    style={styles.inputs} 
                                    placeholder="Password" 
                                    placeholderTextColor="white" 
                                    value={password}
                                    secureTextEntry={true} 
                                    onChangeText={setPassword} /> 
                            </View>
                            <View style={{...styles.alignCenterContainer, ...styles.marginContainer}} >
                                <RoundedButton title="Sign In" onPress={signIn}/>
                            </View>
                            <View style={{...styles.alignCenterContainer, ...styles.marginContainer}}>
                                <TouchableOpacity> 
                                    <Text style={styles .forgotPasswordText}>Forgot your login or password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{...styles.alignCenterContainer}}>
                            <TouchableOpacity 
                                style={{...styles.alignCenterContainer, ...styles.marginContainer, ...styles.createAccountButton}}
                                onPress={goToCreateAccount}> 
                                <Text style={{...styles.forgotPasswordText, ...styles.createAccountText}}>Create account</Text>
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

export default Login;