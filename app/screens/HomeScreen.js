import React from 'react';
import { ImageBackground ,StyleSheet,View,Text,Button,TouchableOpacity,SafeAreaView, Image, TextInput,SearchBar} from 'react-native';
import { BlurView } from "@react-native-community/blur";

function HomeScreen({navigation, route}) {
    return (
        <SafeAreaView>

         
            
                <Text style={styles.head}>Discover Best{"\n"}Recipes</Text>
                <TouchableOpacity>
                    {/* //comment updtated */}
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

              <TouchableOpacity>
                <View>
                    <Image style={styles.pizzaimg}  source={require('../assets/pizza.png')}/>
                    <Image style={styles.blurimg} source={require('../assets/blurimg.png')}/>
                    <Text style={styles.Rtopic}>Tortilla Pizza Recipe</Text>
                
                </View>
              </TouchableOpacity>
                


                

            
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

    },

    pizzaimg:{
        marginLeft:"7%",
        marginTop:"5%"
    },

    blurbox:{
        backgroundColor:"black",
        width:186,
        height:69,
        borderRadius:8,
        
        
    },
    blurimg:{
        marginTop:"-20%",
        marginLeft:"9%",
        
    },

    Rtopic:{
        color:"white",
        fontSize:15,
        fontWeight:"600",
        marginTop:"-12%",
        marginLeft:"13%",
    }
    
})

export default HomeScreen;
