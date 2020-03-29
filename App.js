import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { enableScreens } from 'react-native-screens'

import MealsNavigator from './navigation/MealsNavigator';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealsReducer from './store/reducers/meals';

// useScreens(); // To configure react-navigation to use screens instead of plain RN Views for rendering screen views, 
enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () =>{
  return Font.loadAsync({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    'Satisfy': require('./assets/fonts/Satisfy-Regular.ttf'),
    'AbrilFatface': require('./assets/fonts/AbrilFatface-Regular.ttf')
  })
}

const App = () =>{
  const [fontLoaded, setFontLoaded] = useState(false)
  console.log(fontLoaded)

    if(!fontLoaded){
      return <AppLoading 
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={(err) => console.log(err)}
        />
    } 

  
  return(
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )

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
