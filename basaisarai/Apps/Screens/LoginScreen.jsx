import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

export default function LoginScreen() {
  return (
    <View className='flex-1'>
    <View className='flex-1  justify-start items-center mt-40 '>
        <ImageBackground source={require('./../../assets/images/loginbackground.png')} className='w-full h-[400px] items-center object-cover absolute'/>
        <Image 
          source={require('./../../assets/images/login.png')}
          className='mt-60 w-32 h-32'
        />
        <Text className='text-2xl font-bold '>BasaiSarai</Text>
        <View className='pt-8 items-center w-full bg-white rounded-t-3xl top-10  object-cover'>
            <Text className='text-2xl font-bold'>Welcome Back 🙂</Text>
            <Text className='text-slate-500 pt-3'>Explore Flats, Rooms, and Houses for rent. Find your perfect home with ease and convenience. Sign in to start your search today!</Text>
            <TouchableOpacity className='p-3 w-40 mt-20 bg-blue-500 rounded-full shadow-md' onPress={()=>{
                console.log('Sign in with Google')
            }}>
                <Text className='text-white text-center'>Get Started</Text>
                </TouchableOpacity>
        </View>
        </View>
        
    </View>
    
    
    
  );
}