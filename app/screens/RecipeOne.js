import { View,Text,SafeAreaView,ImageBackground ,StyleSheet,Button,TouchableOpacity,backgroundColor } from 'react-native'
import React from 'react'

function RecipeOne() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
           <View>

           <View style={styles.v1}></View>

           </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex: 1,
    padding: 20,
    },

    v1:{
        backgroundColor:'red',
        flex:1
    }


})

export default RecipeOne