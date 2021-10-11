import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium 
} from '@expo-google-fonts/inter';
 //screens
 import  {Home}  from "./screens/";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { icons, images, SIZES, COLORS, FONTS} from './constants';
import {
  Image,
  TouchableOpacity
} from 'react-native';



const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

 const Stack = createStackNavigator();
 const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });
  if(!fontsLoaded) {
    return null;
  }else{
    return(
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={'Home'}>
           <Stack.Screen 
            name= "Home"
            component= {Home}
            options={{
              title: ' SHOES STORE',
              headerTintColor: COLORS.lightGray,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                ...FONTS.navTitle,
              },
              headerLeft: ({onPress}) => (
                <TouchableOpacity 
                  style={{ marginLeft: SIZES.padding}}
                  onPress={onPress}
                >
                  <Image 
                    source={icons.menu}
                    resizeMode= 'contain'
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: SIZES.padding}}
                  onPress={() => console.log('headerRight pressed!')}
                >
                  <Image 
                    source={icons.search}
                    resizeMode= "contain"
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </TouchableOpacity>
              )
            }}
           />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
 }

 export default () => {
  return <App />;
};