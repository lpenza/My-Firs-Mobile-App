import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  const imgSource=require('./assets/img/coder.png');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Image source={imgSource} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 180,
  },
  text:{
    color:'white',
    fontSize:45,
  },
});
