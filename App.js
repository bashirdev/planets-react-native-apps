import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,  View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {colors} from './src/theme/colors'
import {typography} from './src/theme/typography'
import {spacing} from './src/theme/spacing'
import Text from './src/components/text/text'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/details';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) { 
    return <Text>Font Loading...</Text>
    
  }


  return (
  
     <>
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
       
        </Stack.Navigator>
     </NavigationContainer>
     <StatusBar style='light' />
     </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  

  },
  text:{
    fontFamily:typography.bold,
    fontSize:spacing[6],
  }
});
