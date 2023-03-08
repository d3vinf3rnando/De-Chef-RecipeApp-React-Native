import React from 'react';
import { ImageBackground ,StyleSheet,View,Text,Button,TouchableOpacity,SafeAreaView, Image} from 'react-native';

function HomeScreen({navigation, route}) {
    return (
        <SafeAreaView>
            
                <Text style={styles.head}>Discover Best{"\n"}Recipes</Text>
                <Image style={styles.profile} source={require('../assets/PROFILE.png')} />
                


            
        </SafeAreaView>
       
    );
}

const styles = StyleSheet.create({
    head:{
        padding:30,
        fontSize:28,
        fontWeight:'bold',
        color:'#25AE87',
    },

    profile: {
        top:-90,
        left:'80%'
    }
})

export default HomeScreen;