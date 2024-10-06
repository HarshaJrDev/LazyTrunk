import { StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../Screen/HomeScreen';
import DeckScreen from '../Screen/DeckScreen';
import SettingScreen from '../Screen/SettingScreen';
import Relationship from '../Screen/Relationship'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,  // This hides the header on all screens
          cardStyle: { backgroundColor: 'transparent' }, // Remove any background color from the card to avoid white background
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Deck" component={DeckScreen} />
        <Stack.Screen name="Setting" component={SettingScreen}/>
        <Stack.Screen name="Relationship" component={Relationship}/>
      </Stack.Navigator>
    </>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
