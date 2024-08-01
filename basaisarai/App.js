import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Importing Clerk
import {ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo';

//Importing LoginScreen
import LoginScreen from './Apps/Screens/LoginScreen';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_Z2l2aW5nLWNoYW1vaXMtMzMuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View className="flex-1 bg-white ">
      
      <StatusBar style="auto" />
      <SignedIn>
        <Text>Logged In</Text>
      </SignedIn>
      <SignedOut><LoginScreen /></SignedOut>
      
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
 
});
