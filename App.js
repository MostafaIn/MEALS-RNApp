import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () =>{
  Font.loadAsync({
    'lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    'satisfy': require('./assets/fonts/Satisfy-Regular.ttf'),
    'AbrilFatface': require('./assets/fonts/AbrilFatface-Regular.ttf')
  })
}

const App = () =>{
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> this is MOSTAFA.</Text>
      <Button title="submit" onPress={() => console.log('this is me.!!!')} />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
