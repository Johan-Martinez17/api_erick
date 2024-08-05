import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
  return (
    <view Style= {styles.container}> 
    <Text>Open up App.js</Text>
    <StatusBar style="auto">
    </view>
  )
}

const styles = StyleSheet.create({
  container : {
    flex= 1,
    justifyContent = 'center',
    alignItems= 'center',

  },
})