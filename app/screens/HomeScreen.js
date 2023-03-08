import React from 'react';
import { ImageBackground ,StyleSheet,View,Text,Button,TouchableOpacity,SafeAreaView, Image, TextInput,SearchBar} from 'react-native';

function HomeScreen({navigation, route}) {
    return (
        <SafeAreaView>
            
                <Text style={styles.head}>Discover Best{"\n"}Recipes</Text>
                <Image style={styles.profile} source={require('../assets/PROFILE.png')} />

                <View style={styles.searchview}>
                    <TextInput style={styles.search} placeholder='Search here...'></TextInput>
                </View>

                <Text style={styles.topic1}>Just For You</Text>

                <View style={styles.coverview}>
                    <Image source={require('../assets/cover.png')}/>
                    <Text>15 best pasta recipes from chef John</Text>
                </View>


                

            
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
        top:'-20%',
        left:'80%'
    },

    search:{
        
        backgroundColor:'#EFEFEF',
        height:60,
        paddingLeft:20,
        borderRadius:15,
        
    },

    searchview:{
        paddingHorizontal:20,
        bottom:'10%'
    },

    coverview:{
        bottom:20
    },

    topic1:{
        fontSize:22,
        fontWeight:'bold'
    }
    
})

export default HomeScreen;