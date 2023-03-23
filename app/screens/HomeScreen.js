import React from 'react';
import { ImageBackground ,StyleSheet,View,Text,Button,TouchableOpacity,SafeAreaView, Image, TextInput,SearchBar} from 'react-native';

function HomeScreen({navigation, route}) {
    return (
        <SafeAreaView>

         
            
                <Text style={styles.head}>Discover Best{"\n"}Recipes</Text>
                <TouchableOpacity>
                <Image style={styles.profile} source={require('../assets/PROFILE.png')} />
                </TouchableOpacity>
                

                <View style={styles.searchview}>
                    <TextInput style={styles.search} placeholder='Search here...'></TextInput>
                </View>

                <Text style={styles.topic1}>Just For You</Text>
               

                <TouchableOpacity>
                <View style={styles.coverview}>
                    <Image  style={styles.cimg} source={require('../assets/cover.png')}/>
                    <Text style={styles.cardtext}>15 best pasta recipes from chef John</Text>
                                                    
                                   
                                   
                </View>

                </TouchableOpacity>


              <View>
                <Text style={styles.topic2}>Trending Recipes</Text>
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
        alignSelf:'flex-end',
        marginTop:"-22%",
        marginRight:"8%"
        
    },

    search:{
        
        backgroundColor:'#EFEFEF',
        height:60,
        marginTop:"15%",
        paddingLeft:20,
        borderRadius:15,
        
    },

    searchview:{
        paddingHorizontal:30,
        bottom:'10%'
    },

    coverview:{
        paddingHorizontal:0
       
        

    },

    cimg:{},

    cardtext:{
        fontSize:18,
        fontWeight:600,
        color:"white",
        marginTop:"-25%",
        marginLeft:"-15%",
        paddingHorizontal:'27%',
        
    },

    topic1:{
        fontSize:22,
        fontWeight:"600",
        paddingLeft:"7%",
        marginTop:"-4%",
    },

    topic2:{
        fontSize:22,
        fontWeight:"600",
        paddingLeft:"7%",
        marginTop:"10%"

    }
    
})

export default HomeScreen;
