import React from 'react';
import { ImageBackground ,StyleSheet,View,Text,Button,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//this is a comment



const AppButton = ({ onPress, title }) => (
    <TouchableOpacity  style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Get Started</Text>
    </TouchableOpacity>
  );


function WelcomeScreen({navigation}) {
    return (


        <ImageBackground style={styles.background} source={require('../assets/back.png')}>

            <View id='userNa' style={{alignItems:'center',top:'75%'}}>
                <Text style={styles.text}>Cook Like a Chef</Text>
                

                <Text style={styles.para} >De Chef is a user-friendly
                 recipe app designed for those who are new to cooking and want to try new 
                recipes at home</Text>

                <AppButton onPress={() => navigation.navigate('Home')}></AppButton>

                
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
    },

    text:{
        color:'white',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize:35,
        fontWeight:'bold',
        top:-40
    },

    para:{
        color:'white',
        fontSize:12,
        paddingHorizontal:70,
        paddingBottom:40,
        textAlign:'center',
        top:-20
    },

   

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#25AE87",
        borderRadius: 15,
        paddingVertical: 13,
        paddingHorizontal: 110,
      },
      appButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        
      }
})

export default WelcomeScreen;