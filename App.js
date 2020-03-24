import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import MealsNavigator from './navigation/MealsNavigator';

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
  return <MealsNavigator />
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
