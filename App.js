import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger'

import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ShopNavigator from "./navigation/ShopNavigator";
import  Colors  from './constants/Colors';

enableScreens();

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer

})

const store = createStore(rootReducer,applyMiddleware(logger))

const fetchFonts = () => {
  return Font.loadAsync({
    'proxima-nova': require('./assets/fonts/proxima-nova-regular.otf'),
    'proxima-nova-bold': require('./assets/fonts/proxima-nova-bold.otf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.PrimaryLight} barStyle="light-content"/>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
