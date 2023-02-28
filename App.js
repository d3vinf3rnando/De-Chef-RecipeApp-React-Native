import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {
console.log('App Executed!!!')

const handlePress =()=> console.log("liNK PRESSED") //onpress when big functions

  return (
    <SafeAreaView style={styles.container}>

      <Text onPress={handlePress}>hello world!</Text>
      <Text onPress={()=>console.log('Congrats')}>This is my first react native app</Text>

      <Image 
      style={styles.myimage}
      source={require('./assets/my.png')}/>

      <StatusBar style="auto" />

      {/* <View>
        <Text>Hello this is new view</Text>
      </View> */}
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems: 'center',

    
  },

  myimage:{
    width:'20%',
    height:'10%',
  }
});
